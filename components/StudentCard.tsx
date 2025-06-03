'use client';

import { FC } from 'react';
import Link from 'next/link';
import { FaUserGraduate } from 'react-icons/fa';
import { Student } from '@/types/student';

interface Props {
  student: Student;
}

const StudentCard: FC<Props> = ({ student }) => {
  const encodedId = student.ugr_id.replaceAll('/', '-');

  return (
    <Link href={`/${encodedId}`}>
      <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-100 rounded-2xl p-5 transition-shadow duration-300 shadow-sm hover:shadow-lg cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-900 text-blue-400 shadow-inner">
            <FaUserGraduate className="text-2xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold capitalize text-white">{student['Full Name']}</h2>
            <p className="text-sm text-gray-400">{student.department}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;
