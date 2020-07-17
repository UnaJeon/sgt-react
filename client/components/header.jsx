import React from 'react';

function Header(props) {
  return (
    <div>
      <h1>Student Grade Table</h1>
      <h2>Average Grade {props.average}</h2>
    </div>

  );
}

export default Header;
