import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input,  Col, Card, CardBody, CardHeader, Row} from 'reactstrap';

import '../App.css';
import axios from 'axios';

class Create extends Component {
    state = {
        todoTitle: '',
        todoDescription: '',
        todoPriority: ''
    };


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log('state:', this.state);
    }

    handleSubmit = (event) => {
        // alert('A name was submitted: ' + this.state.todoTitle + 'desc: ' + this.state.todoDescription);
        event.preventDefault();
        const min = 1;
        const max = 10000;
        const rand = min + Math.floor(Math.random() * (max - min));
        const todo = {
            id: rand,
            title: this.state.todoTitle,
            description: this.state.todoDescription,
            // priority: this.state.todoPriority,
            priority: 2,
            userId: 'emad.aghayi',
            dataStoreId: 'schoolTasks'
        };
        console.log('todo: ', todo);
        axios.post('/endpoints/addTodo', {todo})
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        todoTitle: '',
                        todoDescription: '',
                        todoPriority: 1
                    });

                    alert("You have saved a todo Successfully!");

                } else {
                    alert("Error:" + res);
                }
                console.log('addTodo response: ', res);
                // console.log(res.data);
            })

    }

    render() {
        return (
            <div className="container">

                <br/>
                <Row>
                    <Col sm="2"/>
                    <Col sm="7">
                        <Card>
                            <CardHeader>Add a todo</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row/>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={2}>
                                            <Label for="title"> Title </Label>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="text" id="title" name="todoTitle"
                                                   value={this.state.todoTitle}
                                                   onChange={this.handleChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={2}>
                                        <Label  for="Desc"> Description </Label>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="textarea" id="Desc" name="todoDescription"
                                                   value={this.state.todoDescription}
                                                   onChange={this.handleChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={2}>
                                        <Label  for="priorityId"> Priority</Label>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="select" id="priorityId" name="todoPriority"
                                                   value={this.state.todoPriority} onChange={this.handleChange}>
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                                <option value="4">Urgent</option>
                                            </Input>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup>

                                        <Col sm={{size: 3, offset: 5}}>
                                         
                                            <Button color="secondary" size="md" block>Save it</Button>
                                        </Col>
                                    </FormGroup>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br/>
            </div>
        );
    }


}

export default Create;