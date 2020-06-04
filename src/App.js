import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import BookList from './components/BookList';
import Header from './components/Header';
import InputSearch from './components/InputSearch'
import Books from './components/Books'
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        dataFromApi: [],
        dataDefault: [],
        isShow: true
      }
      this.urlApi = "https://demo-express-codersx.herokuapp.com/api/book";
      this.renderFiltered = this.renderFiltered.bind(this);

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
  renderFiltered(dataFiltered, isShow){
    this.setState({dataFromApi: dataFiltered,   isShow: isShow });
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <InputSearch isShow={this.state.isShow} dataFromApi={this.state.dataFromApi} dataDefault={this.state.dataDefault} renderFilter={this.renderFiltered}/>
        <Books data={this.state.dataFromApi} />
       
      </div>
    );
  }
}

export default App;
