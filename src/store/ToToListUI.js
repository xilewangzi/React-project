import React, { Component } from 'react';
import { Input, Button, List } from 'antd'


class TodoListUI extends Component {
    render() {
        return (
            <div style={{ marginTop: '10px', margiLeft: '10px' }}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        placeholder="Basic usage"
                        style={{ width: '300px', marginRight: '10px' }}
                        onChange={this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleBtnClick.bind(this)}>提交</Button>
                </div>
                <List
                    style={{ marginTop: '10px', width: '300px' }}

                    bordered
                    dataSource={this.props.list}

                    renderItem={(item, index) => (
                        //在List组件的删除功能,需要用箭头函数的形式，代替以前方法，并在箭头函数里使用属性的方法，调用出你过来的方法。
                        <List.Item onClick={() => { this.props.handleBtnDeleteClick(index) }}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }


    
}

export default TodoListUI