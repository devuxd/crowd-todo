import React, {Component} from 'react';
import {Button, CustomInput, Form, FormGroup, Label, Input, Col, Card, CardBody, CardHeader, Row} from 'reactstrap';

import '../App.css';
import axios from 'axios';


class Create extends Component {


    render() {
        return (
            <div className="container">

                <br/>
                <Row>

                    <Col sm="12">
                        <Card>
                            <CardHeader>Add a todo</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.props.onSubmit}>
                                    <FormGroup row/>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={3}>
                                            <Label for="title"> Title </Label>
                                        </Col>
                                        <Col sm={6}>
                                            <Input type="text" id="titleId" name="todoTitle" required
                                                   value={this.props.todoTitle} onChange={this.props.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={3}>
                                            <Label for="descId"> Description </Label>
                                        </Col>
                                        <Col sm={6}>
                                            <Input type="textarea" id="descId" name="todoDescription" required
                                                   value={this.props.todoDescription} onChange={this.props.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={3}>
                                            <Label for="dueDateId">Due Date</Label>
                                        </Col>
                                        <Col sm={6}>
                                            <Input type="date" name="dueDate" id="dueDateId" value={this.props.dueDate} required
                                                   onChange={this.props.onChange} placeholder="date placeholder"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={3}>
                                            <Label for="priorityId">Priority</Label>
                                        </Col>
                                        <Col sm={6}>
                                            <CustomInput type="radio" id="Low" name="todoPriority"
                                                         onChange={this.props.onChange} value="Low"
                                                         label="Low" inline/>
                                            <CustomInput type="radio" id="Medium" name="todoPriority"
                                                         onChange={this.props.onChange} value='Medium'
                                                         label="Medium" inline/>

                                            <CustomInput type="radio" id="High" name="todoPriority"
                                                         onChange={this.props.onChange} value='High'
                                                         label="High" inline/>
                                            <CustomInput type="radio" id="Urgent" name="todoPriority"
                                                         onChange={this.props.onChange} value='Urgent' label="Urgent"
                                                         inline/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={1}/>
                                        <Col sm={3}>
                                            <Label for="statusId">Status</Label>
                                        </Col>
                                        <Col sm={6}>
                                            <CustomInput type="radio" id="in-progress" name="status"
                                                         onChange={this.props.onChange} label="in-progress"
                                                         value='in-progress' inline/>
                                            <CustomInput type="radio" id="complete" name="status"
                                                         onChange={this.props.onChange} value='complete'
                                                         label="complete" inline/>

                                            <CustomInput type="radio" id="archive" name="status"
                                                         onChange={this.props.onChange} value='archive' label="archive"
                                                         inline/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>

                                        {/*<Col sm={{size: 3, offset: 5}}>*/}
                                        {/*<Col sm={1}/>*/}
                                        {/*<Col sm={7}>*/}
                                        <Button color="primary" size="lg" block>Save or update</Button>
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