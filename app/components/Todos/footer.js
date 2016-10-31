import React from 'react';

export default class Footer extends React.Component {
    constructor(){
        super();
    }
    changeAll(e){
        this.props.changeAll(e.target.checked);
    }
    clearHasDone(e){
        this.props.clearHasDone();
    }
    render(){
        return (
            <div>
                <input type="checkbox" checked={this.props.isAllDone} onChange={this.changeAll.bind(this)}/>
                {this.props.hasDoneCount}已完成 / {this.props.totalCount} 总数
                <button className="btn fr" onClick={this.clearHasDone.bind(this)}>清除已完成</button>
            </div>
        );
    }
}