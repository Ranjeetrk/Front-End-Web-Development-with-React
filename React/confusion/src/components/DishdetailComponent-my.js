import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null        //javascript object
      }
     
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }

  renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

renderComments({comments, addComment, dishId}){
  // console.log(comments)
  if (comments != null) {

      // let list = comments.map((comments)=>{

      //     return(
      //         <li key={comments.id} >
      //             <div>
      //                 <p>{comments.comment}</p>
      //                 <p>--{comments.author},
      //                 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
      //             </div>
      //         </li>

      //     )
      // })

      return(
              <div className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                      {/* {list} */}
                  </ul>
                  {/* <CommentForm dishId={dishId} addComment={addComment}> */}

                  {/* </CommentForm> */}
              </div>
      )
  }
  else{
      return(
          <div></div>
      )
  }
}

  
render() {
  const menu = this.props.dishes.map((dish) => {
      return (
        <div  className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
  });

  return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
          <div className="row">
            <div  className="col-12 col-md-5 m-1">
              {this.renderDish(this.state.selectedDish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
            {/* <DishDetail/> */}
            </div>
          </div>
      </div>
  );
}
}
  
export default DishDetail;



// import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Link } from 'react-router-dom';
// class DishDetail extends Component{
//     constructor(props){
//         super(props);
//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleLogin = this.handleLogin.bind(this);
//         this.state = {
//           isModalOpen:false
//         };
//     }

//     toggleModal() {
//         this.setState({
//           isModalOpen: !this.state.isModalOpen
//         });
//       }

//       render(){
//           return(

//           );
//       }
    
// }
//     function RenderDish({dish}) {
//         return (
//             <Card>
//                 <CardImg top src={dish.image} alt={dish.name} />
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         );

//     }

//     function RenderComments({comments}){

//         const list = comments.map((comment) => {
//             return (
//                 <div className="row">
//                     <ul className="list-unstyled">
//                         <li><i>{comment.comment}</i> </li>
//                         <li> -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
//                     </ul>
//                 </div>
//             );

//         });
//         return (
//             <div className="row m-1">
//                 <div className="col">
//                     <div className="row"><h4>Comments</h4></div>
//                     <div class="row"></div>
//                     {list}
//                 </div>
//             </div>
//         );

//     }
//     function CommentForm(){
//         return(
//             <div>comment form </div>
//         );
//     }
//     const DishDetail=(props)=>{
//         if(props.dish!=null){
//             return(
//                 <div class="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h3>{props.dish.name}</h3>
//                         <hr />
//                     </div>                
//                 </div>
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         <RenderDish dish={props.dish} />
//                     </div>
//                     <div className="col-12 col-md-5 m-1">
//                         <RenderComments comments={props.comments} />
//                         <CommentForm/>
//                     </div>
//                 </div>
//                 </div>


//             );
//         }
//         else{
//             return(
//                 <div></div>
//             );
//         }
//     }

// export default DishDetail;



// import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label ,Row, Col} from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { Control, LocalForm, Errors } from 'react-redux-form';



// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);


// class DishDetail extends Component{
//     constructor(props){
//         super(props);
//         this.toggleButton = this.toggleButton.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.handleLogin = this.handleLogin.bind(this);
//         this.state = {
//           isModalOpen:false
//         };
//     }
//     toggleButton() {
//         this.setState({
//           isModalOpen: !this.state.isModalOpen
//         });
//       }

//     handleSubmit(values) {
//         this.toggleButton();
//         // console.log('Current State is: ' + JSON.stringify(values));
//         this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
//     }



//       RenderDish({dish}) {
//         return (
//             <Card>
//                 <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
//                 <CardBody>
//                     <CardTitle>{this.props.dish.name}</CardTitle>
//                     <CardText>{this.props.dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         );

//     }

//     CommentForm(){
//         return(
//             <div>
//                 <Button outline onClick={this.toggleButton}>
//                     <span className="fa fa-pencil fa-lg"> Submit Comment</span>
//                 </Button>
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleButton}>
//                     <ModalHeader toggle={this.toggleButton}>Submit Comment</ModalHeader>
//                     <ModalBody>
//                         <div>
//                             <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//                                 <Row className="form-group">
//                                     <Label htmlFor="rating" md={2}>Rating</Label>
//                                     <Col md={10}>
//                                         <Control.select model=".rating" id="rating" name="rating"
//                                             className="form-control">
//                                             <option>1</option>
//                                             <option>2</option>
//                                             <option>3</option>
//                                             <option>4</option>
//                                             <option>5</option>

//                                         </Control.select>
//                                     </Col>
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="name" md={2}>Your Name</Label>
//                                     <Col md={10}>
//                                         <Control.text model=".name" id="name" name="name"
//                                             placeholder="Your Name"
//                                             className="form-control"
//                                             validators={{
//                                                 required, minLength: minLength(3), maxLength: maxLength(15)
//                                             }}
//                                             />
//                                         <Errors
//                                             className="text-danger"
//                                             model=".name"
//                                             show="touched"
//                                             messages={{
//                                                 required: 'Required',
//                                                 minLength: 'Must be greater than 2 characters',
//                                                 maxLength: 'Must be 15 characters or less'
//                                             }}
//                                         />
//                                     </Col>
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="comment" md={2}>Comment</Label>
//                                     <Col md={10}>
//                                         <Control.textarea model=".comment" id="comment" name="comment"
//                                             rows="6"
//                                             className="form-control" />
//                                     </Col>
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Col md={{size:10, offset: 2}}>
//                                         <Button type="submit" color="primary">
//                                         Submit
//                                         </Button>
//                                     </Col>
//                                 </Row>
//                             </LocalForm>
//                         </div>
//                     </ModalBody>
//                 </Modal>

//             </div>
//         );
//     }

//     RenderComments({comments,addComment,dishId}){

//         const list = this.props.comments.map((comment) => {
//             return (
//                 <div className="row">
//                     <ul className="list-unstyled">
//                         <li><i>{comment.comment}</i> </li>
//                         <li> -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
//                     </ul>
//                 </div>
//             );

//         });
//         return (
//             <div className="row m-1">
//                 <div className="col">
//                     <div className="row"><h4>Comments</h4></div>
//                     <div class="row"></div>
//                     {list}
//                 </div>
//             </div>
//         );

//     }

//       render(){
//         if(this.props.dish!=null){
//             return(
//                 <div class="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h3>{this.props.dish.name}</h3>
//                         <hr />
//                     </div>                
//                 </div>
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         {/* <RenderDish dish={props.dish} /> */}
//                         {this.RenderDish(this.props.dish)}
//                     </div>
//                     <div className="col-12 col-md-5 m-1">
//                         {/* <RenderComments comments={props.comments} /> */}
//                         {this.RenderComments(this.props.comments,this.props.addComment,this.props.dish.id)}
//                         {this.CommentForm(this.addComment,this.dishId)}
//                     </div>
//                 </div>
//                 </div>


//             );
//         }
//         else{
//             return(
//                 <div></div>
//             );
//         }
//       }
    
// }
// export default DishDetail;