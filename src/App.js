import React, {Component} from 'react';

import * as firebase from "firebase";
import logo from './logo.svg';
import './App.css';
import PersistableContainer from './PersistableContainer';
import Create from "./components/Create";
import axios from 'axios';

import TodoList from "./components/TodoList";


var config = {
    apiKey: "AIzaSyArehR3T9gCp9bfqXZpeByvw1Ll_Zy8gEI",
    authDomain: "crowd-todo.firebaseapp.com",
    databaseURL: "https://crowd-todo.firebaseio.com",
    projectId: "crowd-todo",
    storageBucket: "crowd-todo.appspot.com",
    messagingSenderId: "468033952329"
};
firebase.initializeApp(config);
const firePathTodoList = firebase.database().ref().child("emadaghayi");

const PersistableTodoList = PersistableContainer(TodoList, firePathTodoList);

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            todoTitle: '',
            dueDate: '',
            todoDescription: '',
            todoPriority: 'Low',
            status:'in-progress',
            todos: []
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});

    };

    handleSubmit = (event) => {

        event.preventDefault();
        if (this.state.id !== '') {
            this.updateTodo();
        } else {
            this.saveTodo();
        }
    };

    updateTodo(){
        const dateAndTimeOptions = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        const timeOptions = {
            hour: "2-digit",
            minute: "2-digit"
        };
        const todoDueDateFormatted= '';

        const todo = {
            id: this.state.id,
            title: this.state.todoTitle,
            description: this.state.todoDescription,
            dueDate : this.state.dueDate.split('-')[1]+"-"+this.state.dueDate.split('-')[2]+"-"+this.state.dueDate.split('-')[0],
            priority: this.state.todoPriority,
            status: this. state.status,
            createdTime: new Date().toLocaleTimeString("en-us", timeOptions),
            createdDate: new Date().toLocaleTimeString("en-us", dateAndTimeOptions),
            userId: 'emad.aghayi',
            dataStoreId: 'schoolTasks'
        };
        console.log('todo for update: ', todo);
        axios.post('/endpoints/updateTodo', {todo})
            .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            todoTitle: '',
                            todoDescription: ''
                        });

                       // alert("You have updated a todo Successfully!");

                    } else {
                        alert("Error:" + res);
                    }
                    console.log('addTodo response: ', res);
                    // console.log(res.data);
                }
            );
    };

    saveTodo() {
        const min = 1;
        const max = 10000;
        const rand = min + Math.floor(Math.random() * (max - min));
        const todo = {
            id: rand,
            title: this.state.todoTitle,
            description: this.state.todoDescription,
           dueDate : this.state.dueDate.split('-')[1]+"-"+this.state.dueDate.split('-')[2]+"-"+this.state.dueDate.split('-')[0],
            priority: this.state.todoPriority,
            status: this. state.status,
            userId: 'emad.aghayi',
            dataStoreId: 'schoolTasks'
        };
        console.log('todo: ', todo);
        axios.post('/endpoints/addTodo', {todo})
            .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            todoTitle: '',
                            todoDescription: ''
                        });

                      //  alert("You have saved a todo Successfully!");

                    } else {
                        alert("Error:" + res);
                    }
                    console.log('addTodo response: ', res);
                    // console.log(res.data);
                }
            );
    }

    deleteIt = (event) => {

        const todo = {
            id: event.target.value
        };
        // new Promise((resolve, reject) => {
        console.log('ex1');
        const resultOfDelete = axios.post('/endpoints/deleteTodo', {todo});

        console.log('resultOfDelete', resultOfDelete);
        console.log('ex2');
        resultOfDelete.then(response => {
            console.log('response', response);

            if (response.status === 200) {
              //  alert("You have DELETED a todo Successfully!");
                console.log('ex4');
            } else {
                alert("Error, failed to DELETE!");
            }
        }).catch(error => {
            alert('! ' + error);
        });

    };
    updateIt = (item) => {
        document.getElementById("titleId").value = item.title;
        console.log('title updated', document.getElementById("titleId").value);
        document.getElementById("descId").value = item.description;
        document.getElementById("dueDateId").value = item.dueDate;
        this.setState({
            id: item.id,
            todoTitle: item.title,
            dueDate: item.dueDate,
            todoDescription: item.description,
            todoPriority: item.priority,
            status: item.status

        });


    }


    render() {
        const {firePathTodoList} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Organize your tasks with <strong>Crowd Todo</strong></h1>
                </header>

                <div>
                    <Create onSubmit={this.handleSubmit} onChange={this.handleChange} stateObj={this.state}/>

                    <PersistableTodoList persistablePath={'todoList'} formValue={this.state.todos}
                                         onDelete={this.deleteIt}
                                         onUpdateItem={this.updateIt}/>
                </div>

            </div>
        );
    }
}

export default App;
