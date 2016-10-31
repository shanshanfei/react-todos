import React from 'react';

export default class Header extends React.Component {
    constructor(){
        super();
    }
    addTodo(e){
        if(e.keyCode === 13){
            let v = e.target.value.replace(/^\s+|\s+$/, '');
            if(!v) return ;
            this.props.addTodo(v);
            e.target.value = '';
        }
    }
    //组件渲染完后，获取焦点
    componentDidMount(){
        this.refs.shuru.focus();
        //获取真实DOM，除了this.refs.refName，还可以使用React.findDOMNode(this.refs.refName)
    }
    render(){
        return (
            <div>
                <input ref="shuru" className="ipt" type="text" onKeyUp={this.addTodo.bind(this)} placeholder="请输入您的任务，回车加入列表"/>
            </div>
        );
    }
}