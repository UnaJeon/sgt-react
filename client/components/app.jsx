import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  /* eslint-disable no-console */
  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ gardes: data });
      });
  }

  render() {
    return (
      <Header />
    );
  }
}

function Header() {
  return (
    <h1>Student Grade Table</h1>
  );
}
export default App;
