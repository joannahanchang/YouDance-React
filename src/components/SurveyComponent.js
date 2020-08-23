// // import React from 'react';
// import ReactDOM from "react-dom";
// // import Modal from 'react-modal';

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
// import './App.css';

class Survey extends Component {
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
        alert(`URL: ${values.url} Satisfaction: ${values.satisfaction} Intensity: ${values.intensity}`);
        this.toggleModal();
    }


    render() {
        console.log('from LoginComponent:', this.state)
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Quick Survey: Your Experience Matters to Us!</ModalHeader>
                <ModalBody>
                <div className="col-md-12">
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                            <Label htmlFor="url" md={12}>Which workout video did you watch?  Copy and paste the URL here:</Label>
                            <Col md={12}>
                                <Control.textarea 
                                model=".url" 
                                id="url" 
                                name="url"
                                rows="2"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            >
                                </Control.textarea>
                                <Errors
                                className="text-danger"
                                model=".url"
                                show="touched"
                                component="div"
                                messages={{
                                required: 'URL required'
                                    }}
                                />
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="satisfaction" md={12}>On a scale of 1 to 5, 5 being extremely satisfied, how satisfied are you with this workout?</Label>
                                <Col md={12}>
                                <Control.select
                                    model=".satisfaction"
                                    id="satisfaction"
                                    name="satisfaction"
                                    placeholder="Select your satisfaction rating"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".satisfaction"
                                    show="touched"
                                    component="div"
                                    messages={{
                                    required: 'Required'
                                }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>How intense was this workout for you?</Label>
                                <Col md={12}>
                                <Control.select
                                    model=".rating"
                                    id="rating"
                                    name="rating"
                                    placeholder="1"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                >
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".rating"
                                    show="touched"
                                    component="div"
                                    messages={{
                                    required: 'Required'
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

export default Survey;

