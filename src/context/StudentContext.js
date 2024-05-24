import React, { createContext, useState, useEffect } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const addStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const removeStudent = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const updatedStudents = students.filter(student => student.id !== id);
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
    }
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
