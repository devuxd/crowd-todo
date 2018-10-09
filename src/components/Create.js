import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Card, CardBody, CardHeader, Row} from 'reactstrap';

import '../App.css';
import axios from 'axios';


class Create extends Component {


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
                                <Form onSubmit={this.props.onSubmit}>
                                    <FormGroup row/>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={2}>
                                            <Label for="title"> Title </Label>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="text" id="title" name="todoTitle"
                                                   value={this.props.todoTitle}
                                                   onChange={this.props.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={2}>
                                            <Label for="Desc"> Description </Label>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="textarea" id="Desc" name="todoDescription"
                                                   value={this.props.todoDescription}
                                                   onChange={this.props.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={2}>
                                            <Label for="priorityId"> Priority</Label>
                                        </Col>
                                        <Col sm={5}>
                                            <Input type="select" id="priorityId" name="todoPriority"
                                                   value={this.props.todoPriority} onChange={this.props.onChange}>
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                                <option value="4">Urgent</option>
                                            </Input>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>

                                        {/*<Col sm={{size: 3, offset: 5}}>*/}
                                        {/*<Col sm={1}/>*/}
                                        {/*<Col sm={7}>*/}
                                        <Button color="primary" size="lg" block>Save or update it</Button>
                                        {/*</Col>*/}
                                        {/*/!*</Col>*!/*/}
                                        {/*<Col sm={1}/>*/}
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