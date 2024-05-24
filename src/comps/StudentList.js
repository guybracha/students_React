import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <div>
      <h2>רשימת תלמידים</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.score}
            <button onClick={() => removeStudent(student.id, student.name)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
