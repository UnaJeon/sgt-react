import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  /* eslint-disable no-console */
  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        console.log(grades);
        this.setState({ grades: grades });
      })
      .catch(error => console.error(error.message));
  }

  render() {
    return (
      <div>
        <Header />
        <GradeTable grades={this.state.grades} />
      </div>

    );
  }
}

export default App;
