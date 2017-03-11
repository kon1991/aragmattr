import React, { Component} from 'react';

class AragmatikiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
                   name: '',
                   place: ''
                 }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({ name: e.target.value});
  }

  handlePlaceChange(e){
    this.setState({ place: e.target.value});

  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name.trim();
    let place = this.state.place.trim();
    console.log(name+"   "+place)
    if (!name || !place) {
     return;
    }
    this.props.onAragmatikiSubmit({ name: name, location: place });
    this.setState({ name: '', place: '' });
  }

  render() {
    return (
      <div className="aragmatikiContent">
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label htmlFor="name" className="aragmatiki_content">Name</label>
            <input id="name" type='text' value={this.state.name} onChange={this.handleNameChange} className="aragmatiki_content form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="place"className="aragmatiki_content">Place</label>
            <input id="place" type='text' value={this.state.place} onChange={this.handlePlaceChange} className="aragmatiki_content form-control" />
          </div>
          <button type="submit" value={this.state.place}  className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default AragmatikiForm;
