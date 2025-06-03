'use client';

import { useEffect, useState } from 'react';
import studentsData from '@/data/students.json';
import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import StudentCard from '@/components/StudentCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ITEMS_PER_PAGE = 10;

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(studentsData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchLower = search.toLowerCase();
    const result = studentsData.filter(
      (student) =>
        student['Full Name'].toLowerCase().includes(searchLower) ||
        student.department.toLowerCase().includes(searchLower)
    );
    setFiltered(result);
    setPage(1);
  }, [search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200 p-6 max-w-6xl mx-auto">
     <div className="mb-10 text-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
    Addis Ababa University
  </h1>
  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-400 mt-2">
    College of Technology and Built Environment
  </h2>
  <p className="text-md sm:text-lg text-gray-400 mt-1 italic">
    2017/2025 Graduate Students Directory
  </p>
</div>


      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {displayed.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 text-lg mt-12">
            No students found.
          </p>
        ) : (
          displayed.map((student) => (
            <motion.div
              key={student.ugr_id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StudentCard student={student} />
            </motion.div>
          ))
        )}
      </div>

      {/* Pagination */}
     <div className="flex justify-center mt-10 overflow-x-auto py-2 space-x-2">
  {/* Previous Button */}
  <button
    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    className="flex cursor-pointer items-center gap-1 px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition"
  >
    <FaChevronLeft className="text-sm" /> Prev
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((p) => {
      // Show only 3 pages: current, one before, one after
      return p === page || p === page - 1 || p === page + 1;
    })
    .map((pageNumber) => {
      const isActive = page === pageNumber;
      return (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={`px-5 py-2 rounded-full font-semibold cursor-pointer transition
            ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-700/50'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
        >
          {pageNumber}
        </button>
      );
    })}

  {/* Next Button */}
  <button
    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
    className="flex items-center cursor-pointer gap-1 px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition"
  >
    Next <FaChevronRight className="text-sm" />
  </button>
</div>
    </div>
  );
}
