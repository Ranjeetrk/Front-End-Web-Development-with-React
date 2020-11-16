import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
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

    function RenderComments({comments}){

        const list = comments.map((comment) => {
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
    const DishDetail=(props)=>{
        if(props.dish!=null){
            return(
                <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
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
    // const DishDetail=(props)=> {

    //     if (props.dish != null) {
    //         const dishDetails = <RenderDish dish={props.dish}/>
    //         const dishComments = <RenderComments comments={props.comments}/>;
    //         return (
    //             <div className="col">
    //                 <div className="row">
    //                     <div className="col-md-5 m-1">
    //                         {dishDetails}
    //                     </div>

    //                     <div className="col-md-5 m-1">
    //                         {dishComments}
    //                     </div>
    //                 </div>
    //             </div>


    //         );
    //     }
    //     else
    //         return (<div></div>);
    // }

export default DishDetail;