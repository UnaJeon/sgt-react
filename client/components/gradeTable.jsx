import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const gradeList = props.grades.map(grade => {
    return (
      <Grade
        key={grade.id}
        name={grade.name}
        course={grade.course}
        grade={grade.grade}
      />
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Course</td>
          <td>Grade</td>
        </tr>
      </thead>
      <tbody>
        {gradeList}
      </tbody>
    </table>

  );
}

export default GradeTable;
