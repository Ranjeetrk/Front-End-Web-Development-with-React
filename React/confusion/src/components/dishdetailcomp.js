import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

class DishDetail extends Component {
    render() {
        return (
            <Card>
                <CardImg top src={this.props.selDish.image} alt={this.props.selDish.name}/>
                <CardBody>
                    <CardTitle>{this.props.selDish.name}</CardTitle>
                    <CardText>{this.props.selDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default DishDetail;