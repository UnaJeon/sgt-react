import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
      })
      .catch(error => console.error(error.message));
  }

  getAverageGrade() {
    const grades = this.state.grades;
    const gradesGrade = grades.map(grade => grade.grade);
    let total = 0;
    for (let i = 0; i < gradesGrade.length; i++) {
      total += gradesGrade[i];
    }
    const average = Math.round(total / gradesGrade.length);
    return average;
  }

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(grade => {
        this.setState({ grades: this.state.grades.concat(grade) });
      })
      .catch(error => console.error(error.message));
  }

  deleteGrade(gradeId) {
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(grade => {
        const copyGrades = this.state.grades.slice();
        const newGrades = [];
        for (let i = 0; i < copyGrades.length; i++) {
          if (copyGrades[i].id !== gradeId) {
            newGrades.push(copyGrades[i]);
          }
        }
        this.setState({ grades: newGrades });
      })
      .catch(error => console.error(error.message));
  }

  render() {
    return (
      <div>
        <Header average={this.getAverageGrade()} />
        <div className="row">
          <GradeTable grades={this.state.grades} deleteGrade ={this.deleteGrade} />
          <GradeForm addNewGrade={this.addNewGrade}/>
        </div>
      </div>

    );
  }
}

export default App;
