import React from 'react';
import { StudentProvider } from './context/StudentContext';
import StudentForm from './comps/StudentForm';
import StudentList from './comps/StudentList';

const App = () => {
  return (
    <StudentProvider>
      <div>
        <h1>מערכת ניהול תלמידים</h1>
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
};

export default App;
