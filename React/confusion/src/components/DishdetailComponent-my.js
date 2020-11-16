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