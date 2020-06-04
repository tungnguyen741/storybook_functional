import React, {Component} from 'react'
export default class InputSearch extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="InputSearch">
               <div className="input container">
                    <input placeholder="Tìm kiếm tên sản phẩm" type="text" />
                </div>
            </div>
        );
    }
}