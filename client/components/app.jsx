import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

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

  render() {
    return (
      <div>
        <Header average={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades} />
      </div>

    );
  }
}

export default App;
