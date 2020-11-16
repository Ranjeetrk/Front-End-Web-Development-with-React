import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import DishDetail from "./dishdetailcomp";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish, comments: dish.comments});
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <DishDetail selDish={dish}/>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((commentObj) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(commentObj.date)))

                return (
                    <ul key={commentObj.id} className="list-unstyled">
                        <li className="comment">{commentObj.comment}</li>
                        <li className="author">-- {commentObj.author}, {date}</li>
                    </ul>
                );
            })
            return (
                <div className="container">
                    <div className="row">
                        <h4>Comments</h4>
                        <div>{comment}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
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
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;