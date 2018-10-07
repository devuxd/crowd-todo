import React, {Component} from 'react';

import * as firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import PersistableContainer from './PersistableContainer';
import Create from "./components/Create";

import TodoList from "./components/TodoList";
import TestPage from "./components/TestPage";

var config = {
    apiKey: "AIzaSyArehR3T9gCp9bfqXZpeByvw1Ll_Zy8gEI",
    authDomain: "crowd-todo.firebaseapp.com",
    databaseURL: "https://crowd-todo.firebaseio.com",
    projectId: "crowd-todo",
    storageBucket: "crowd-todo.appspot.com",
    messagingSenderId: "468033952329"
};
firebase.initializeApp(config);
const firePathTodoList= firebase.database().ref().child("emadaghayi");

const PersistableTodoList = PersistableContainer (TodoList, firePathTodoList);
class App extends Component {
    // render() {
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 <img src={logo} className="App-logo" alt="logo"/>
    //                 <h1 className="App-title">Welcome to React</h1>
    //             </header>
    //             <p className="App-intro">
    //                 To get started, edit <code>src/App.js</code> and save to reload.
    //             </p>
    //         </div>
    //     );
    // }
    state = {users: []}

    // componentDidMount() {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(users => this.setState({users}));
    // }

    render() {
        const {firePathTodoList} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Organize your tasks with <strong>Crowd Todo</strong></h1>
                </header>
                {/*<h1>Users</h1>*/}
                {/*{this.state.users.map(user =>*/}
                {/*<div key={user.id}>{user.username}</div>*/}
                {/*)}*/}
                <div>
                    <Create/>
                </div>
                <div>
                    <PersistableTodoList persistablePath={'todoList'}/>
                </div>
                {/*<div>*/}
                    {/*<TestPage/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
