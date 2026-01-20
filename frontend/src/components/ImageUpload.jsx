import React, { useState, useRef } from 'react';
import { FaCamera, FaUpload, FaTimes } from 'react-icons/fa';

const ImageUpload = ({ 
  images = [], 
  onChange, 
  maxImages = 5, 
  label = "Upload Images",
  className = "" 
}) => {
  const [uploadedImages, setUploadedImages] = useState(images);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (files) => {
    const newImages = [];
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push({
            id: Date.now() + Math.random(),
            url: e.target.result,
            name: file.name,
            size: file.size,
            type: file.type
          });
          
          if (newImages.length === files.length) {
            const updatedImages = [...uploadedImages, ...newImages].slice(0, maxImages);
            setUploadedImages(updatedImages);
            onChange(updatedImages);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleInputChange = (e) => {
    const files = e.target.files;
    if (files) {
      handleFileSelect(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files) {
      handleFileSelect(files);
    }
  };

  const removeImage = (imageId) => {
    const updatedImages = uploadedImages.filter(img => img.id !== imageId);
    setUploadedImages(updatedImages);
    onChange(updatedImages);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging 
            ? 'border-orange-400 bg-orange-50' 
            : 'border-gray-300 hover:border-orange-400 bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
        />
        
        <div className="space-y-4">
          <div className="flex justify-center">
            <FaCamera className="text-4xl text-gray-400" />
          </div>
          
          <div>
            <p className="text-lg font-medium text-gray-700">
              Drag & Drop images here
            </p>
            <p className="text-sm text-gray-500">
              or
            </p>
            <button
              type="button"
              onClick={openFileDialog}
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              browse files
            </button>
          </div>
          
          <p className="text-xs text-gray-500">
            Supports: JPG, PNG, GIF, WebP (Max 5MB each)
          </p>
        </div>
      </div>

      {/* Image Preview Grid */}
      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedImages.map((image) => (
              <div key={image.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeImage(image.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTimes className="text-xs" />
                </button>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                  {image.name}
                </div>
              </div>
            ))}
            
            {/* Add More Button */}
            {uploadedImages.length < maxImages && (
              <button
                type="button"
                onClick={openFileDialog}
                className="aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-orange-400 flex items-center justify-center bg-gray-50 hover:bg-orange-50 transition-colors"
              >
                <FaUpload className="text-2xl text-gray-400" />
              </button>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mt-2">
            {uploadedImages.length} of {maxImages} images uploaded
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
