import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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
