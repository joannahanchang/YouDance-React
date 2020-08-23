// // import React from 'react';
// import ReactDOM from "react-dom";
// // import Modal from 'react-modal';

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = val => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(val);

// import './App.css';

class Login extends Component {
    constructor(props) {
        // this.passwordRegex.test('myPassword34')
        super(props);

        this.state = {
          isModalOpen: props.isOpen
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            isModalOpen: props.isOpen,
        });
    }

    // toggleModal() {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }

    toggleModal() {
        if (this.state.isModalOpen) {
            console.log(this.props);
            this.props.onCloseModal()
        }
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    handleSubmit(values) {
        console.log('this', this)
        console.log('values', values)
        alert(`Email: ${values.email} Password: ${values.password}`);
        this.toggleModal();
    }


    render() {
        console.log('from LoginComponent:', this.state)
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>
                <ModalBody>
                <div className="col-md-12">
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="email" md={5}>Email Address</Label>
                                <Col md={12}> 
                                    <Control.text 
                                    model=".email" 
                                    id="email" 
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    >
                                    </Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={5}>Password</Label>
                                <Col md={12}> 
                                    <Control.text 
                                    model=".password" 
                                    id="password" 
                                    name="password"
                                    placeholder="Enter your password"
                                    className="form-control"
                                        validators={{
                                            required,
                                            validPassword
                                        }}
                                    >
                                    </Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validPassword: 'Must be minimum eight characters, at least one letter, and one number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 0}}>
                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                    </div>
                </ModalBody>
                </Modal>
            </React.Fragment>
         );
      }
    }

export default Login;