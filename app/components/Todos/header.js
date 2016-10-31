import React from 'react';

export default class Header extends React.Component {
    constructor(){
        super();
    }
    addTodo(e){
        var v = e.target.value.replace(/^\s+|\s+$/, '');
        if(e.keyCode === 13 && v){
            this.props.addTodo(v);
            e.target.value = '';
        }
    }
    componentDidMount(){
        this.refs.shuru.focus();
    }
    render(){
        return (
            <div>
                <input ref="shuru" className="ipt" type="text" onKeyUp={this.addTodo.bind(this)} placeholder="请输入您的任务，回车加入列表"/>
            </div>
        );
    }
}