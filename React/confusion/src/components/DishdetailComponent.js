import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label ,Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        this.state = {
          isModalOpen:false
        };
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    toggleButton() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }
    RenderComments({comments}){

        const list = this.props.comments.map((comment) => {
            return (
                <div className="row">
                    <ul className="list-unstyled">
                        <li><i>{comment.comment}</i> </li>
                        <li> -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            );

        });
        return (
            <div className="row m-1">
                <div className="col">
                    <div className="row"><h4>Comments</h4></div>
                    <div class="row"></div>
                    {list}
                </div>
            </div>
        );

    }
    CommentForm(){
        return(
            <div>
                <Button outline onClick={this.toggleButton}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleButton}>
                    <ModalHeader toggle={this.toggleButton}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model=".rating" id="rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                        Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }

      render(){
        if(this.props.dish!=null){
            return(
                <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {/* <RenderDish dish={props.dish} /> */}
                        {this.RenderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {/* <RenderComments comments={props.comments} /> */}
                        {this.RenderComments(this.props.comments)}
                        {this.CommentForm()}
                    </div>
                </div>
                </div>


            );
        }
        else{
            return(
                <div></div>
            );
        }
      }
    
}
export default DishDetail;