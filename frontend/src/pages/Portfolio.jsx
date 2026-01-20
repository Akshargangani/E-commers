import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaImage, FaExternalLinkAlt, FaCode, FaPalette, FaStar } from 'react-icons/fa';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      image: 'https://images.unsplash.com/photo-1460925859171-0ab2a45e3c6e?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f03d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      image: 'https://images.unsplash.com/photo-15046078013-58b9b2b4c5a?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 5,
      title: 'Video Streaming Platform',
      description: 'Live streaming platform with chat functionality',
      image: 'https://images.unsplash.com/photo-1573168710445-f4e0c8b5d5a4?w=500&h=300&fit=crop',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ]);

  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    liveUrl: '',
    githubUrl: '',
    featured: false
  });

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject,
        image: newProject.image || 'https://images.unsplash.com/photo-1460925859171-0ab2a45e3c6e?w=500&h=300&fit=crop',
        technologies: newProject.technologies.split(',').map(tech => tech.trim())
      };
      setProjects([...projects, project]);
      setNewProject({
        title: '',
        description: '',
        image: '',
        technologies: '',
        liveUrl: '',
        githubUrl: '',
        featured: false
      });
      setIsAddingProject(false);
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleToggleFeatured = (id) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, featured: !project.featured } : project
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <button
            onClick={() => setIsAddingProject(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all"
          >
            <FaPlus />
            Add Project
          </button>
        </div>

        {/* Add Project Form */}
        {isAddingProject && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-orange-200">
            <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={newProject.image}
                  onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter image URL (optional)"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="3"
                  placeholder="Enter project description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Technologies (comma-separated)</label>
                <input
                  type="text"
                  value={newProject.technologies}
                  onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Live URL</label>
                <input
                  type="url"
                  value={newProject.liveUrl}
                  onChange={(e) => setNewProject({...newProject, liveUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="https://example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
                <input
                  type="url"
                  value={newProject.githubUrl}
                  onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Add Project
              </button>
              <button
                onClick={() => setIsAddingProject(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border ${
                project.featured ? 'border-orange-400' : 'border-gray-200'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-pink-50">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1460925859171-0ab2a45e3c6e?w=500&h=300&fit=crop';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FaImage className="text-gray-400 text-4xl" />
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        title="View Live"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
                        title="View Code"
                      >
                        <FaCode className="text-sm" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleToggleFeatured(project.id)}
                      className={`p-2 rounded transition-colors ${
                        project.featured
                          ? 'bg-orange-400 text-white hover:bg-orange-500'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                      title={project.featured ? 'Remove from featured' : 'Mark as featured'}
                    >
                      <FaStar className="text-sm" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      title="Delete project"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <FaPalette className="text-gray-400 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Projects Yet</h3>
            <p className="text-gray-600 mb-6">Start building your portfolio by adding your first project.</p>
            <button
              onClick={() => setIsAddingProject(true)}
              className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all"
            >
              Add Your First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
