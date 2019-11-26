import React, { Component } from 'react';

class XiaogegeItem extends Component {

    // constructor(props){
    //     super(props)
    //     this.handleClick= this.handleClick.bind(this)
    // }
   
    render() { 
        return ( 
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
         );
    }

    handleClick(){
        console.log(this.props.index)
        this.props.handleBtnDelete(this.props.index)
    }


}
 
export default XiaogegeItem;