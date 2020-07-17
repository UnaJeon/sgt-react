import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="form_container col-3">
        <form>
          <div className="input-group mb-3s">
            <span className="input-group-text" ><i className="fa fa-user" aria-hidden="true"></i></span>
            <input name="name" type="text" className="form-control" placeholder="Name" onClick={this.handleChange}/>
          </div>
          <div className="input-group mb-3s">
            <span className="input-group-text"><i className="fa fa-list-alt" aria-hidden="true"></i></span>
            <input name="course" type="text" className="form-control" placeholder="Course" onClick={this.handleChange}/>
          </div>
          <div className="input-group mb-3s">
            <span className="input-group-text"><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>

            <input name="grade" type="number" className="form-control" placeholder="Grade" onClick={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-success">Add</button>
          <button type="reset" className="btn btn-outline-secondary">Cancel</button>
        </form>
      </div>

    );
  }
}

export default GradeForm;
