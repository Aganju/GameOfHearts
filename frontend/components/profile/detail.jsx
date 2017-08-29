import React from 'react';

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.details = this.props.details;
  }

  detailsCombiner(arr, contentName){
    const content = this.details[contentName];
    if(content) arr.push(content[0].toUpperCase() + content.slice(1));
  }

  render(){
    const combinedDetails = [];
    this.detailsCombiner(combinedDetails, 'orientation');
    this.detailsCombiner(combinedDetails, 'gender');
    combinedDetails.push('Single');
    this.detailsCombiner(combinedDetails, 'height');
    this.detailsCombiner(combinedDetails, 'body-type');
    return (
      <div id='details'>
        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
        <p>{combinedDetails.join(', ')}</p>
      </div>
    );
  }
}
