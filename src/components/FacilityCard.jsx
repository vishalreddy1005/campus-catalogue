
import { Link } from 'react-router-dom';

const FacilityCard = ({ facility }) => {
  return (
    <Link to={`/facility/${facility.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
        <img 
          src={facility.image} 
          alt={facility.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary mb-1">{facility.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{facility.location}</p>
          <p className="text-sm text-gray-700 line-clamp-2">{facility.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FacilityCard;
