import React from 'react';

export default class Item extends React.Component {
    constructor(){
        super();
    }
    handleChange(e){
        let id = e.target.parentNode.getAttribute('id'), isDone = e.target.checked;
        this.props.changeState(id, isDone);
    }
    deleteTodo(e){
        let id = e.target.parentNode.getAttribute('id');
        this.props.deleteTodo(id);
    }
    render(){
        return (
            <li id={this.props.id}>
                <input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
                <span className={this.props.isDone ? 'line-through' : ''}>{this.props.title}</span>
                <button className="btn fr" onClick={this.deleteTodo.bind(this)}>删除</button>
            </li>
        );
    }

}