import React from 'react';

export default class Detail extends React.Component{
  constructor(props){
    super(props);
    this.details = this.props.details;
  }

  detailsCombiner(arr, contentName){
    let content = this.props.details[contentName];
    if(content){
      if (contentName === 'height'){
        content = Math.floor(content/12) +"' " +content % 12 + "\"";
      }
      arr.push(content);
    }
  }

  render(){
    const combinedDetails = [];
    this.detailsCombiner(combinedDetails, 'orientation');
    this.detailsCombiner(combinedDetails, 'gender');
    this.detailsCombiner(combinedDetails, 'rel_status');
    this.detailsCombiner(combinedDetails, 'rel_type');
    this.detailsCombiner(combinedDetails, 'height');
    this.detailsCombiner(combinedDetails, 'body_type');
    return (
      <div id='details' onClick={this.props.openModal}>
        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
        <p>{combinedDetails.join(', ')}</p>
      </div>
    );
  }
}
