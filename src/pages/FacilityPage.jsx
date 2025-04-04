import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { facilities } from '../data/facilities';
import FacilityCard from '../components/FacilityCard';

const FacilityPage = () => {
  const { category } = useParams();
  const [filteredFacilities, setFilteredFacilities] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({
    title: '',
    description: '',
    icon: ''
  });

  useEffect(() => {
    // Filter facilities based on category
    const filtered = facilities.filter(facility => 
      facility.category.toLowerCase().replace(/\s+/g, '-') === category ||
      facility.building === category
    );
    setFilteredFacilities(filtered);

    // Set category information
    switch(category) {
      case 'anna-auditorium':
        setCategoryInfo({
          title: 'Anna Auditorium',
          description: 'Our landmark auditorium with state-of-the-art facilities for performances, conferences, and ceremonies.',
          icon: '🏛️'
        });
        break;
      case 'mgr-block':
        setCategoryInfo({
          title: 'Dr.M.G.R Block',
          description: 'A dedicated academic block featuring modern classrooms, laboratories, and faculty facilities.',
          icon: '🏢'
        });
        break;
      case 'sjt':
        setCategoryInfo({
          title: 'Silver Jubilee Tower',
          description: 'Our iconic tower housing advanced research facilities, classrooms, and administrative offices.',
          icon: '🏨'
        });
        break;
      case 'tt':
        setCategoryInfo({
          title: 'Technology Tower',
          description: 'A hub for innovation with specialized laboratories, design studios, and collaborative spaces.',
          icon: '🏗️'
        });
        break;
      default:
        setCategoryInfo({
          title: 'Facilities',
          description: 'Explore our campus infrastructure.',
          icon: '🏢'
        });
    }
  }, [category]);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl mb-4">{categoryInfo.icon}</div>
            <h1 className="text-3xl font-bold text-white mb-4">{categoryInfo.title}</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">{categoryInfo.description}</p>
          </div>
        </div>
      </div>

      {/* Facilities List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredFacilities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map(facility => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">No facilities found in this category.</h2>
            <p className="text-gray-500">Please check back later or explore other categories.</p>
          </div>
        )}
      </div>

      {/* Back to Home Button */}
      <div className="text-center py-8">
        <Link 
          to="/" 
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FacilityPage;
