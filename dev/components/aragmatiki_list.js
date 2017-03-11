import React, { Component } from 'react';

const Aragmatikes = (props) => {
	
	const aragmatikes = props.data.map((aragmatiki) => {
		return <li location={ aragmatiki.location } key={ aragmatiki['_id']} >{aragmatiki.name}</li>
	});
	
	
  return (
    <div className="aragmatikes">
      <ol>
	  {aragmatikes}
      </ol>
    </div>
  )
}

export default Aragmatikes;
