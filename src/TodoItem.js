import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {


    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
       
    }

    render() {
        console.log('child render')
        const { content } = this.props;
        //JSX---> JS对象 --> 真实的DOM

        return <div onClick={ this.handleClick }>
        { content }
        </div>
    }
    
    handleClick(){
        // alert(this.props.index)
        this.props.handleBtnDelete(this.props.index)

        
    }

    //一个组件要从父组件接受参数
    //只要父组件的render函数被重新执行了,子组件的这个生命周期函数就会被执行
    //如果这个组件之前已经存在于父组件中,才会执行
    componentWillReceiveProps(){

        console.log("componentWillReceiveProps")
    }

 //执行时刻---当这个组件即将被从页面中剔除的时候,会被执行
    componentWillUnmount(){
        console.log("child componentWillUnmount")
    }



}


TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string
}


TodoItem.defaultProps = {
    test:'hello word'
}




export default TodoItem