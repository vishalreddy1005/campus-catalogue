
import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search facilities, locations, or events..."
        className="w-full rounded-full py-3 px-5 pr-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
