import React, { Component } from 'react';
import MainBar from './main_bar';
import Aragmatikes from './aragmatiki_list';
import AragmatikiContent from './aragmatiki_content';
import AragmatikiForm from './newaragmatiki';
import axios from 'axios';


class Container extends Component {
  constructor(props) {
    super(props);
	this.state = { data: [], newaragmatiki: false};
	this.loadAragmatikesFromServer = this.loadAragmatikesFromServer.bind(this);
	this.handleAragmatikiSubmit = this.handleAragmatikiSubmit.bind(this);
	 }

	 loadAragmatikesFromServer() {
		 console.log();
		 console.log(2000);
		 axios.get('http://localhost:3000/api/aragmatikes')
		 .then(res => {
		 this.setState({ data: res.data });
		 })
	 }
	 handleAragmatikiSubmit(aragmatiki) {
  	  axios.post('http://localhost:3000/api/aragmatikes', aragmatiki)
      .then(res => {
          console.log(res);
      })
      .catch(err => {
          console.error(err);
        });
	     }

	 componentDidMount() {
	 this.loadAragmatikesFromServer();
	 setInterval(this.loadAragmatikesFromServer, 4000);
	 }




  render() {
    let container = null;
    if(!this.state.newaragmatiki){
      container = <AragmatikiContent />
    }
    else {
      container = <AragmatikiForm onAragmatikiSubmit={ this.handleAragmatikiSubmit }/>;
    }
    return (
      <div>
        <MainBar onNewAragmatiki = { () => this.setState({ newaragmatiki: true})} />
        <Aragmatikes data = {this.state.data} />
        {container}
      </div>
    )
  }
}


export default Container;
