import React from 'react';

import Item from './item.js';

export default class Main extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <ul style={{padding: 0}}>
                {this.props.todos.map((todo, index) => {
                        return (<Item key={index} {...todo} {...this.props}>{todo.title}</Item>);
                    })//结尾不能加分号; 会报语法错误，日了狗了
                }
            </ul>
        );
    }
}