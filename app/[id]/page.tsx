'use client';

import studentsData from '@/data/students.json';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaUserGraduate,
  FaUniversity,
} from 'react-icons/fa';

export default function StudentDetailPage() {
  const params = useParams();
  const encodedId = params.id as string;
  const actualId = encodedId.replaceAll('-', '/');
  const student = studentsData.find((s) => s.ugr_id === actualId);

  if (!student) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 px-4 py-10 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <motion.div
            whileHover={{ x: -4 }}
            className="flex items-center gap-1"
          >
            <FaArrowLeft />
            Back to Directory
          </motion.div>
        </Link>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="mt-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-10 transition-colors"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-blue-100 dark:bg-blue-950 p-6 rounded-full shadow-md"
            >
              <FaUserGraduate className="text-blue-600 dark:text-blue-300 text-5xl" />
            </motion.div>

            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold capitalize tracking-tight text-gray-900 dark:text-white">
                {student['Full Name']}
              </h1>
              <p className="mt-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                UGR ID: {student.ugr_id}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <FaUniversity className="inline mr-2 text-base" />
                {student.department}
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(student).map(([key, value]) => {
              if (['Full Name', 'ugr_id', 'department'].includes(key)) return null;
              return (
                <div key={key} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 shadow-inner">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300 mb-1">
                    {key}
                  </h3>
                  <p className="text-base text-gray-800 dark:text-gray-100">{value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
