import React, { Component } from 'react';
import 'antd/dist/antd.css'

import store from './store'
// import { CHANGE_INPUT_VALUE,DELETE_TODO_ITEM,ADD_TODO_ITEM } from './store/actionTypes'
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction,initListAction } from './store/actionCreators'
import TodoListUI from './store/ToToListUI'


//假数据
// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class TODO extends Component {
    //构造函数，当组件的state或者props发生改变的时候,render函数就会重新执行
    constructor(props) {
        super(props);
        //stroe提供的方法:getState,获取笔记本里的数据，即reducer初始的属性数据
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleBtnDeleteClick = this.handleBtnDeleteClick.bind(this)
        // console.log("得到state",this.state);
        store.subscribe(this.handleStoreChange)

    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleBtnDeleteClick={this.handleBtnDeleteClick}
            ></TodoListUI>
        )
    }
    componentDidMount(){
        console.log("ssss")

        const data = {
            "data": {
              "list": [
                '早上4点起床，锻炼身体',
                '中午下班游泳一小时',
                '晚上8点到10点，学习两个小时'
              ]
            }
          }

        const action = initListAction(data)

        console.log(action)

        store.dispatch(action)
    }


    handleInputChange(e) {

        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }

        const action = getInputChangeAction(e.target.value)


        store.dispatch(action);

    }

    handleStoreChange() {
        // console.log('store')

        this.setState(store.getState());
    }

    //提交
    handleBtnClick() {

        // const action = {
        //     type:ADD_TODO_ITEM
        // }

        const action = getAddTodoItemAction()

        store.dispatch(action)

    }

    //删除
    handleBtnDeleteClick(index) {

        // console.log(index)

        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index
        // }

        const action = getDeleteTodoItemAction(index)

        store.dispatch(action)
    }

}

export default TODO