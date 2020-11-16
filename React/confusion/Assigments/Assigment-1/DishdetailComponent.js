import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedDish: null
        };
    }

    renderComments(comments) {
        const list = comments.map((comment) => {
            return (
                <div className="row">
                    <ul className="list-unstyled">
                        <li><i>{comment.comment}</i> </li>
                        <li> -- {comment.author} {comment.date}</li>
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
    renderDish(dish) {

        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    render() {

        if (this.props.dish != null) {
            const dishDetails = this.renderDish(this.props.dish);
            const dishComments = this.renderComments(this.props.dish.comments);
            return (
                <div className="col">
                    <div className="row">
                        <div className="col-md-5 m-1">
                            {dishDetails}
                        </div>

                        <div className="col-md-5 m-1">
                            {dishComments}
                        </div>
                    </div>
                </div>


            );
        }
        else
            return (<div></div>);
    }
}

export default DishDetail;