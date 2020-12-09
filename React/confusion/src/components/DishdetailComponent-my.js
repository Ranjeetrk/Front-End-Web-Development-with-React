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