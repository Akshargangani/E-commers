import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFilters = (products = []) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category')?.split(',').filter(Boolean) || [],
    brand: searchParams.get('brand')?.split(',').filter(Boolean) || [],
    price: {
      min: searchParams.get('minPrice') || '',
      max: searchParams.get('maxPrice') || ''
    },
    rating: searchParams.get('rating') || null,
    availability: searchParams.get('availability') || null,
    sortBy: searchParams.get('sort') || 'featured'
  });

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.search) params.set('search', filters.search);
    if (filters.category.length > 0) params.set('category', filters.category.join(','));
    if (filters.brand.length > 0) params.set('brand', filters.brand.join(','));
    if (filters.price.min) params.set('minPrice', filters.price.min);
    if (filters.price.max) params.set('maxPrice', filters.price.max);
    if (filters.rating) params.set('rating', filters.rating);
    if (filters.availability) params.set('availability', filters.availability);
    if (filters.sortBy !== 'featured') params.set('sort', filters.sortBy);

    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(product =>
        product.name?.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.category?.toLowerCase().includes(searchLower) ||
        product.brand?.toLowerCase().includes(searchLower)
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Brand filter
    if (filters.brand.length > 0) {
      result = result.filter(product =>
        filters.brand.includes(product.brand)
      );
    }

    // Price filter
    if (filters.price.min) {
      result = result.filter(product =>
        product.price >= parseInt(filters.price.min)
      );
    }
    if (filters.price.max) {
      result = result.filter(product =>
        product.price <= parseInt(filters.price.max)
      );
    }

    // Rating filter
    if (filters.rating) {
      result = result.filter(product =>
        product.rating >= parseInt(filters.rating)
      );
    }

    // Availability filter
    if (filters.availability === 'in-stock') {
      result = result.filter(product =>
        product.stock > 0
      );
    } else if (filters.availability === 'out-of-stock') {
      result = result.filter(product =>
        product.stock === 0
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        result.sort((a, b) => b.soldCount - a.soldCount);
        break;
      case 'featured':
      default:
        // Keep original order or sort by featured flag
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [products, filters]);

  // Update filter function
  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: '',
      category: [],
      brand: [],
      price: { min: '', max: '' },
      rating: null,
      availability: null,
      sortBy: 'featured'
    });
  };

  // Get active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category.length > 0) count++;
    if (filters.brand.length > 0) count++;
    if (filters.price.min || filters.price.max) count++;
    if (filters.rating) count++;
    if (filters.availability) count++;
    if (filters.sortBy !== 'featured') count++;
    return count;
  }, [filters]);

  // Get filter summary for display
  const filterSummary = useMemo(() => {
    const summary = [];
    if (filters.search) summary.push(`Search: "${filters.search}"`);
    if (filters.category.length > 0) summary.push(`${filters.category.length} categories`);
    if (filters.brand.length > 0) summary.push(`${filters.brand.length} brands`);
    if (filters.price.min || filters.price.max) {
      const priceRange = [];
      if (filters.price.min) priceRange.push(`₹${filters.price.min}`);
      if (filters.price.max) priceRange.push(`₹${filters.price.max}`);
      summary.push(`Price: ${priceRange.join(' - ')}`);
    }
    if (filters.rating) summary.push(`${filters.rating}+ stars`);
    if (filters.availability) summary.push(filters.availability.replace('-', ' '));
    return summary;
  }, [filters]);

  return {
    filters,
    filteredProducts,
    updateFilters,
    clearFilters,
    activeFiltersCount,
    filterSummary
  };
};
