import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { facilities } from '../data/facilities';
import { MapPin, Clock, Users, Calendar } from 'lucide-react';
import FacilityCard from '../components/FacilityCard';

const FacilityDetail = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState(null);
  const [similarFacilities, setSimilarFacilities] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Find the facility with the matching ID
    const foundFacility = facilities.find(f => f.id === parseInt(id));
    setFacility(foundFacility);

    // Find similar facilities (same category, but different ID)
    if (foundFacility) {
      const similar = facilities.filter(f => 
        f.category === foundFacility.category && f.id !== foundFacility.id
      ).slice(0, 3);
      setSimilarFacilities(similar);
    }
  }, [id]);

  if (!facility) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Facility not found</h2>
          <p className="text-gray-500 mb-6">The facility you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Facility Header */}
      <div className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{facility.name}</h1>
              <div className="flex items-center text-gray-200">
                <MapPin size={16} className="mr-1" />
                <span>{facility.location}</span>
              </div>
            </div>
            <Link 
              to={`/facilities/${facility.building.toLowerCase().replace(/\s+/g, '-')}`}
              className="mt-4 md:mt-0 bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors inline-block"
            >
              Back to {facility.building}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <img 
                src={facility.images ? facility.images[activeImageIndex] : facility.image} 
                alt={facility.name} 
                className="w-full h-96 object-cover"
              />
              {facility.images && facility.images.length > 1 && (
                <div className="p-4 flex overflow-x-auto space-x-2">
                  {facility.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`block w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
                        activeImageIndex === index ? 'ring-2 ring-secondary' : ''
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${facility.name} view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{facility.description}</p>
              
              <h3 className="text-xl font-semibold text-primary mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {facility.features ? facility.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                )) : (
                  <li className="text-gray-700">Information not available</li>
                )}
              </ul>
              
              <h3 className="text-xl font-semibold text-primary mb-3">Equipment</h3>
              <ul className="list-disc pl-5 space-y-1">
                {facility.equipment ? facility.equipment.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                )) : (
                  <li className="text-gray-700">Information not available</li>
                )}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Info Box */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Facility Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-3">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">{facility.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-3">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Capacity</h4>
                    <p className="text-gray-600">{facility.capacity || 'Not specified'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-3">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Available Hours</h4>
                    <p className="text-gray-600">{facility.hours || '9:00 AM - 5:00 PM, Monday - Friday'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-3">
                    <Calendar size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Booking Information</h4>
                    <p className="text-gray-600">Contact the administration office for booking requests.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Upcoming Events */}
            {facility.events && facility.events.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {facility.events.map((event, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-gray-800">{event.name}</h4>
                      <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">Location Map</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={facility.gmapLocation}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Facility Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Similar Facilities */}
      {similarFacilities.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8">Similar Facilities</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarFacilities.map(facility => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilityDetail;
