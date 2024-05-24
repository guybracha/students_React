import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score) {
      addStudent(name, parseInt(score));
      setName('');
      setScore('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="שם התלמיד"
        required
      />
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        placeholder="ציון"
        required
      />
      <button type="submit">הוסף תלמיד</button>
    </form>
  );
};

export default StudentForm;
