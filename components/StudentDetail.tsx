
// File: components/StudentDetail.tsx
'use client';

import { FC } from 'react';

interface Props {
  student: any;
}

const StudentDetail: FC<Props> = ({ student }) => {
  return (
    <div className="p-6 border rounded-xl shadow bg-white max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">{student["Full Name"]}</h2>
      <ul className="space-y-2">
        <li><strong>UGR ID:</strong> {student.ugr_id}</li>
        <li><strong>Department:</strong> {student.department}</li>
        <li><strong>Exam Topic:</strong> {student.exam_topic}</li>
        <li><strong>Gender:</strong> {student.gender}</li>
        <li><strong>GPA:</strong> {student.gpa}</li>
        <li><strong>Admission:</strong> {student.admission_year}/{student.admission_month}</li>
        <li><strong>Graduation:</strong> {student.graduation_year}</li>
        <li><strong>Campus:</strong> {student.campus}</li>
        <li><strong>Blind:</strong> {student.is_blind}</li>
        <li><strong>Deaf:</strong> {student.is_deaf}</li>
      </ul>
    </div>
  );
};

export default StudentDetail;
