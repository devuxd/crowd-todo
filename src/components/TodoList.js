import React, {Component} from 'react';
import {Table, Row,Col} from 'reactstrap';
//import {JsonTable} from 'react-json-table';
const JsonTable = require('ts-react-json-table');

class TodoList extends Component {
    state = {
        todoArray: []
    };

    fetchData() {
        if (this.props.data.current == null) {
            return this.state.todoArray;
        }
        const todoListJson = this.props.data.current;
        console.log('list2:', todoListJson);
        var result = [];
        for (var key in todoListJson.todoList) {
            //console.log('keys:', key);
            result.push(todoListJson.todoList[key]);
        }


        var result2 = [];
        for (var i = 0; i < result.length; i++) {
            result2.push({
                "id": result[i].id,
                "title": result[i].title,
                "description": result[i].description,
                "status": result[i].status,
                // "priority": result[i].priority,
                "address": result[i].address,
                "repeat": result[i].repeat
            });
        }
        console.log('state', this.state.todoArray);

        return result2;
        // return this.state.todoArray;
    }

    render() {
        return (
            <div >
                <Row>
                    <Col sm="4"/>
                    <Col sm="8">
                        < JsonTable classNemae='table' rows={this.fetchData()}/>
                    </Col>
                </Row>
            </div>


        );
    }

    // fetch('/endpoints/fetchAllTodos',{"emadaghayi"})
    //         <div>{JSON.stringify(this.fetchData())}</div>
    //     .then(res => res.json())
    //     .then(users => this.setState({users}));
//{/*<div>{this.fetchData().map(function(object) {
//                 return (
//                     <JsonTable rows={object} />
//                 );
//             })}</div>*/}

    // async fetchListOfTodo() {
    //     var result = await fetch('/endpoints/fetchAllTodos', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             userId: 'emadaghayi'
    //         }),
    //     });
    //     const todoListJson = await result.json();
    //
    //     // for(var key in dlist){
    //     //     var keyjson = dlist[key];
    //     //     console.log(keyjson)
    //     // }
    //     for (var key in todoListJson) {
    //         console.log("Key: " + key);
    //         console.log("Value: " + todoListJson[key].id);
    //         this.state.todoArray.push({
    //             "id": todoListJson[key].id,
    //             "title": todoListJson[key].title,
    //             "description": todoListJson[key].description,
    //             "status": todoListJson[key].status,
    //             "priority": todoListJson[key].priority,
    //             "address": todoListJson[key].address,
    //             "repeat": todoListJson[key].repeat
    //         });
    //     }
    //
    //     // this.setState({todoArray: todoList});
    //     console.log('in Fetch:', this.state.todoArray);
    //
    //
    // }

    // componentDidMount() {
    //
    //     this.fetchListOfTodo();
    //
    //     console.log('mount:', this.state.todoArray)
    // }


    // render() {
    //     const items = [
    //         {"id": 75950, "name": "Louella Wallace", "age": 24, "phone": "+44 (0)203 437 7302", "color": "green"},
    //         {"id": 80616, "name": "Hanson Perry", "age": 36, "phone": "+44 (0)203 279 3708", "color": "brown"},
    //         {"id": 77621, "name": "Brandi Long", "age": 20, "phone": "+44 (0)203 319 4880", "color": "gray"},
    //     ];
    //
    //     if (this.state.todoArray === []) {
    //         console.log('adfa');
    //         this.setState({todoArray: items});
    //
    //     } else {
    //         console.log('after')
    //     }
    //     ;
    //     return (
    //         <div>
    //             <div>
    //                 {/*<JsonTable rows={items}/>*/}
    //
    //                 < JsonTable rows={this.state.todoArray}/>
    //
    //             </div>
    //             {/*<div className="container">*/}
    //                 {/*<br/>*/}
    //                 {/*<br/>*/}
    //                 {/*<h3>List of todos</h3>*/}
    //                 {/*<Table responsive>*/}
    //                     {/*<thead>*/}
    //                     {/*<tr>*/}
    //                         {/*<th>#</th>*/}
    //                         {/*<th>Title</th>*/}
    //                         {/*<th>Description</th>*/}
    //                         {/*<th>Priority</th>*/}
    //                         {/*<th>Duo date</th>*/}
    //                         {/*<th>Created date</th>*/}
    //                         {/*<th>Repeat</th>*/}
    //                         {/*<th>Operation</th>*/}
    //                     {/*</tr>*/}
    //                     {/*</thead>*/}
    //                     {/*<tbody>*/}
    //                     {/*<tr>*/}
    //                         {/*<th scope="row">1</th>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                     {/*</tr>*/}
    //                     {/*<tr>*/}
    //                         {/*<th scope="row">2</th>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                     {/*</tr>*/}
    //                     {/*<tr>*/}
    //                         {/*<th scope="row">3</th>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                         {/*<td>Table cell</td>*/}
    //                     {/*</tr>*/}
    //                     {/*</tbody>*/}
    //                 {/*</Table>*/}
    //             {/*</div>*/}
    //         </div>
    //
    //     );
    // }


}

export default TodoList;