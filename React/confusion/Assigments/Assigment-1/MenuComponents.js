import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            SelectedDish:null
        };
       // console.log("Menu component constructor is invoked");
    }

    onDishSelect(dish){
        this.setState({SelectedDish:dish});
    }
    // componentDidMount(){
    //     console.log("Component Did count is invoked");
    // }
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                            <CardImg width="100%"  src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        //console.log("Render is invoked");
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {<DishDetail dish={this.state.SelectedDish}/>}
                </div>
            </div>
        );
    }
}

export default Menu;