import React, {Component} from 'react'
import axios from 'axios'

import './Books.css'
export default class BookList extends Component {
    constructor(props){
        console.log('constructor...');
        super(props);
        this.state = {
            dataFromApi: [],
            dataDefault: [],
            isShow: true
        }
        this.urlApi = "https://demo-express-codersx.herokuapp.com/api/book";
        this.changeInput = this.changeInput.bind(this);
        this.refValue = React.createRef();
        this.dataDefault = [];
    }
    componentDidMount(){
        console.log('did mount...');
        axios.get(this.urlApi)
        .then((res)=>{
            this.setState({dataFromApi: res.data, dataDefault: res.data});
        })
        .catch((err)=>{
            console.log('ERROR: ', err);
        })
    }
    changeInput(){
        var valueInput = this.refValue.current;
        var dataFiltered = this.state.dataFromApi.filter(product => product.title.toLowerCase().indexOf(valueInput.value) !== -1 ||  product.title.indexOf(valueInput.value) !== -1);
        if(dataFiltered.length > 0 && valueInput.value){
            this.setState({dataFromApi: dataFiltered,   isShow: true });
        }
        if(!dataFiltered.length || !valueInput.value)
            this.setState({dataFromApi: this.state.dataDefault,  isShow: false})
        if(valueInput.value === "")
            this.setState({isShow: true})
     }
        
    render() {
        return (
            <div className="Books ">
                <div className="input container">
                    <input onChange={this.changeInput} ref={this.refValue} placeholder="Tìm kiếm tên sản phẩm" type="text" />
                </div>

                { this.state.dataFromApi.length < this.state.dataDefault.length &&
                    <div className="numberResult container">
                       Có  {this.state.dataFromApi.length} kết quả tìm kiếm được
                    </div>
                }
                {  (this.state.dataDefault.length === 200 && !this.state.isShow)  &&
                    <div className="numberResult container">
                        Không tìm thấy sản phẩm
                    </div>
                }
                <div className="container layout">
                    <div className="row">
                    {this.state.dataFromApi.map((product, index)=>
                        <div key={index} className="col-md-3 col-6">
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
            </div>
        )
      }
}