import React, {Component} from 'react'
export default class InputSearch extends Component{
    constructor(props){
        super(props);
        this.refValue = React.createRef();
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(){
        var valueInput = this.refValue.current;
        var dataFiltered = this.props.dataFromApi.filter(product => product.title.toLowerCase().indexOf(valueInput.value) !== -1 ||  product.title.indexOf(valueInput.value) !== -1);
        if(dataFiltered.length > 0 && valueInput.value){
           this.props.renderFilter(dataFiltered, true);
        }
        if(!dataFiltered.length || !valueInput.value)
            this.props.renderFilter(this.props.dataDefault, false);
        if(valueInput.value === "")
            this.props.renderFilter(this.props.dataDefault, true);
     }

    render(){
        return(
            <div className="InputSearch">
               <div className="input container">
                    <input onChange={this.changeInput} ref={this.refValue} placeholder="Tìm kiếm tên sản phẩm" type="text" />
                </div>
                {  
                    (this.props.dataDefault.length === 200 && !this.props.isShow)  &&
                    <div className="numberResult container">
                        Không tìm thấy sản phẩm
                    </div>
                }
                { 
                    this.props.dataFromApi.length < this.props.dataDefault.length &&
                    <div className="numberResult container">
                       Có  {this.props.dataFromApi.length} kết quả tìm kiếm được
                    </div>
                }
            </div>
        );
    }
}