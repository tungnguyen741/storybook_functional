import React, {Component} from 'react'
import './Books.css'
import PropTypes from 'prop-types';

export default class Books extends Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(
            <div className="Books">
                <div className="container layout">
                {
                  this.props.data.map((product, index)=>
                  <div className="col-3-m">
                    <div key={index} className="product"> 
                        <img src={product.image} alt=""/> 
                        <div className="title">
                            {product.title}
                        </div>
                        <div className="description">
                            {product.description}
                        </div>
                    </div>
                  </div>  
                )}
                </div>
            </div>
        );
    }
}

Books.defaultProps = {
    data: []
  };
  
  Books.propTypes = {
    data: PropTypes.array.isRequired
  };
  