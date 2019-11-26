import React,{Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
    //构造函数
    constructor(props) {
        super(props);

        //当组件的state或者props发生改变的时候,render函数就会重新执行
    
        this.state  = {
            inputVlue: '',
            list:[]
        }
    }
    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
        console.log("componentWillMount")
    }

    //组件被更新之前,他会自动被执行

    shouldComponentUpdate(){

        console.log("shouldComponentUpdate")

        return true

    }

    //组件被更新之前,他会自动被执行,但是他在shouldComponentUpdate之后
    //如果shouldComponentUpdate返回true他才执行
    //shouldComponentUpdate返回false就不会被执行

    componentWillUpdate(){

        console.log("componentWillUpdate")

    }

//组件更新完成之后他会被执行

    componentDidUpdate(){
        //console.log("componentDidUpdate")
        axios.get('/list.json').then(() =>{
            
        })
    }




    render() {
        console.log("parent render")
        return (
            <Fragment>
            <div>
                <label htmlFor="insertArea">输入内容</label>
                <input 
                
                id="insertArea" 
                className="input" 
                value={ this.state.inputVlue }
                onChange={ this.handleInputChange.bind(this) }

                ref={ (input) => {this.input = input}}
                />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
            <ul ref= {(ul) => {this.ul = ul}}>
                {
                    this.state.list.map((item,index) => {
                        return (
                        <div>
                        <TodoItem 
                        content={item} 
                        index={item}
                        handleBtnDelete= {this.handleBtnDelete.bind(this)}
                        />
                        {/*<li 
                        key={index} 
                        onClick={this.handleBtnDelete.bind(this,index)}
                        dangerouslySetInnerHTML = {{ __html: item }}
                        > 
                        </li>*/}
                        </div>
                        )
                    })
                }
            </ul>



            </Fragment>
        )
    }

//在组件被挂载到页面之后,自动被执行
    componentDidMount(){

        console.log("componentDidMount")
    }
        handleInputChange(e){
         
            this.setState({
                inputVlue:this.input.value
            })
          
        }

        handleBtnClick(){

            
            this.setState((prevState) => ({
                list: [...prevState.list,prevState.inputVlue],
                inputVlue: ''
            }),() => {
                console.log(this.ul.querySelectorAll('div').length)
            });

            
        }

        handleBtnDelete(index){
            //immutable
            //state不允许我们做任何的改变
            console.log(index)
            const list = [...this.state.list];
            list.splice(index,1)
            this.setState({
                list:list
            })
        }
}

export default TodoList