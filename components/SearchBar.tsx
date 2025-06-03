'use client';

import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500 transition-all">
      <FaSearch className="text-gray-400 text-base" />
      <input
        type="text"
        placeholder="Search by name or department..."
        className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
