import React, {Component} from 'react'
import './header.css'
import logoCart from '../img/supermarket.svg'
import { Button } from 'reactstrap';
export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Header">
                <div className="header_left container">
                   <div className="left_first">
                        <a href="/book">
                            <img src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png" alt=""/>
                        </a>
                        <h2>Hi </h2>
                   </div>
                   <div className="cart">
                        <img src={logoCart} alt=""/>
                   </div>
                   <div className="header_right">
                        <Button color="primary">Update info</Button>
                        <Button color="warning">View transaction</Button>
                        <Button color="info">Log out</Button>
                   </div>
                </div>
            </div>
        );
    }
}