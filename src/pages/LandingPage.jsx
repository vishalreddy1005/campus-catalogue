
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { facilities } from '../data/facilities';
import FacilityCard from '../components/FacilityCard';

const LandingPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const categories = [
    { id: 'anna-auditorium', name: 'Anna Auditorium', icon: '🏛️' },
    { id: 'mgr-block', name: 'Dr.M.G.R Block', icon: '🏢' },
    { id: 'sjt', name: 'Silver Jubilee Tower', icon: '🏨' },
    { id: 'tt', name: 'Technology Tower', icon: '🏗️' }
  ];

  const handleSearch = (query) => {
    setHasSearched(true);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = facilities.filter(facility => 
      facility.name.toLowerCase().includes(query.toLowerCase()) ||
      facility.description.toLowerCase().includes(query.toLowerCase()) ||
      facility.location.toLowerCase().includes(query.toLowerCase()) ||
      facility.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Campus Infrastructure
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and infrastructure
            </p>
            <div className="flex justify-center">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {searchResults.length > 0 
              ? `Search Results (${searchResults.length})` 
              : 'No results found'}
          </h2>
          
          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map(facility => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Explore Our Facilities</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link 
              to={`/facilities/${category.id}`} 
              key={category.id}
              className="bg-white rounded-lg p-8 text-center shadow-md card-hover"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Featured Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.slice(0, 3).map(facility => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
