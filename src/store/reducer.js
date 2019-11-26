
import { CHANGE_INPUT_VALUE,DELETE_TODO_ITEM,ADD_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
    inputValue:'',
    list:[]
}



//reducer 可以接受state 不可以修改state
//纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用

export default (state = defaultState,action) => {

    // console.log(state)
    // console.log(action)
    if(action.type == CHANGE_INPUT_VALUE){

        const newState = JSON.parse(JSON.stringify(state))

        newState.inputValue = action.value

        return newState

    }

    if(action.type == ADD_TODO_ITEM){

        const newState = JSON.parse(JSON.stringify(state))

        newState.list.push(newState.inputValue)
        
        newState.inputValue = ''

        // console.log(newState)

        return newState

    }

    if(action.type == DELETE_TODO_ITEM){

        const newState = JSON.parse(JSON.stringify(state))

        newState.list.splice(action.index,1)


        return newState
    }

    if(action.type == INIT_LIST_ACTION){

        const newState = JSON.parse(JSON.stringify(state))

        newState.list = action.data.data.list


        return newState
    }


    return state;
}