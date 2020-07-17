import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <h1 className="col-8">Student Grade Table</h1>
      <h2 className="col-4">Average Grade<span className="badge badge-secondary">{props.average}</span></h2>
    </div>
  );
}

export default Header;
