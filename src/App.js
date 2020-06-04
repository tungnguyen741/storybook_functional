import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import BookList from './components/BookList';
import Header from './components/Header';
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        dataApi: []
      }
      this.urlApi = "https://demo-express-codersx.herokuapp.com/api/book";
  }
  componentDidMount(){
    const dataApi = [];
    console.log('did mount...');
    axios.get(this.urlApi)
    .then((res)=>{
         this.setState({
            dataApi: res.data
         })
    })
    .catch((err)=>{
        console.log('ERROR: ', err);
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <BookList />
       
      </div>
    );
  }
}

export default App;
