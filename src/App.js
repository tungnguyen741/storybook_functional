import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import InputSearch from './components/InputSearch'
import Books from './components/Books'
  function App(props) {
    const url = "https://demo-express-codersx.herokuapp.com/api/book";
    const [isShow, setIsShow] = useState(true);
    const [dataDefault, setDataDefault] = useState([]);
    const [dataFromApi, setDataFromApi] = useState(()=>{
      axios.get(url)
        .then(res=>{
          setDataFromApi(res.data);
          setDataDefault(res.data);
        })
        .catch(err=>{
          console.log('ERROR: ', err)
        })
    }); 
  function renderFiltered(dataFiltered, isShow){
    setDataFromApi(dataFiltered);
    setIsShow(isShow);
  }
  
    return (
      <div className="App">
        <Header/>
        <InputSearch isShow={isShow} dataFromApi={dataFromApi} dataDefault={dataDefault} renderFilter={renderFiltered}/>
        <Books data={dataFromApi} />
      </div>
    );
}

export default App;
