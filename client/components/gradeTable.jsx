import React from 'react';
import Grade from './grade';

function GradeTable(grades) {
  const gradeList = grades.grades.map(grade => {
    return (
      <Grade
        id = {grade.id}
        key={grade.id}
        name={grade.name}
        course={grade.course}
        grade={grade.grade}
        deleteGrade={grades.deleteGrade}
      />
    );
  });
  return (
    <div className="table-containter col-8">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Course</td>
            <td>Grade</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {gradeList}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
