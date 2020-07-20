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
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewGrade({
      name: this.state.name,
      course: this.state.course,
      grade: Number(this.state.grade)
    });
  }

  render() {
    return (
      <div className="form_container col-3">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3s">
            <span className="input-group-text" ><i className="fa fa-user" aria-hidden="true"></i></span>
            <input name="name" value={this.state.name} type="text" className="form-control" placeholder="Name" onChange={this.handleChange}/>
          </div>
          <div className="input-group mb-3s">
            <span className="input-group-text"><i className="fa fa-list-alt" aria-hidden="true"></i></span>
            <input name="course" value={this.state.course} type="text" className="form-control" placeholder="Course" onChange={this.handleChange}/>
          </div>
          <div className="input-group mb-3s">
            <span className="input-group-text"><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>
            <input name="grade" value={this.state.grade} type="number" className="form-control" placeholder="Grade" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-success" >Add</button>
          <button type="reset" className="btn btn-outline-secondary">Cancel</button>
        </form>
      </div>

    );
  }
}

export default GradeForm;
