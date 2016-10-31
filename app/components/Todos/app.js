import React from 'react';
import ReactDOM from 'react-dom';

//导入其他自定义组件
import Header from './header.js';//必须加./ 不然找不到，感觉应该可以找到才对
import Main from './main.js';
import Footer from './footer.js';

class App extends React.Component {
    constructor(){
        super();
        //初始化状态
        this.state = {
            todos: [
                {id: this.uuid(), title: '洗澡', isDone: false},
                {id: this.uuid(), title: '吃饭', isDone: false},
                {id: this.uuid(), title: '开会', isDone: true},
            ]
        };
        this.state.isAllDone = this.state.todos.length > 0 && this.state.todos.filter(todo => todo.isDone).length  === this.state.todos.length;
    }
    //生成uuid，随机32位进制数作为todo id
    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }
    //复选框控制状态
    changeState(id, isDone){
        for(let todo of this.state.todos){
            if(todo.id === id){
                todo.isDone = isDone;
                break;
            }
        }
        this.setState({todos: this.state.todos});
    }
    //删除
    deleteTodo(id){
        let todos = this.state.todos;
        todos.map(function(todo, index, arr){
            if(todo.id === id){
                todos.splice(index, 1);
                return false; //break;//map中不能用break
            }
        });
        this.setState({todos: todos});
    }
    changeAll(isDone){
        this.state.todos.map(function(todo, index, arr){
            todo.isDone = isDone;
        });
        this.setState({todos: this.state.todos});
    }
    clearHasDone(){
        this.setState({todos: this.state.todos.filter(todo => !todo.isDone)});
    }
    addTodo(title){
        this.state.todos.unshift({
            id: this.uuid(),
            title: title,
            isDone: false
        });
        this.setState({todos: this.state.todos});
    }
    render(){
        let props = {
            hasDoneCount: this.state.todos && this.state.todos.filter(todo => todo.isDone).length || 0,
            totalCount: this.state.todos.length || 0
        };
        let isAllDone = props.totalCount > 0 && props.hasDoneCount === props.totalCount;
        return (
            <div className="panel">
                <Header addTodo={this.addTodo.bind(this)} />
                <Main todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeState={this.changeState.bind(this)} />
                <Footer isAllDone={isAllDone} clearHasDone={this.clearHasDone.bind(this)} changeAll={this.changeAll.bind(this)} {...props} />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);