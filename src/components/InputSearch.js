import React from 'react'
import PropTypes from 'prop-types';
 function InputSearch (props){
    const refValue = React.createRef();
    function changeInput(){
        var valueInput = refValue.current;
        var dataFiltered = props.dataFromApi.filter(product => product.title.toLowerCase().indexOf(valueInput.value) !== -1 ||  product.title.indexOf(valueInput.value) !== -1);
        if(dataFiltered.length > 0 && valueInput.value){
           props.renderFilter(dataFiltered, true);
        }
        if(!dataFiltered.length || !valueInput.value)
            props.renderFilter(props.dataDefault, false);
        if(valueInput.value === "")
            props.renderFilter(props.dataDefault, true);
     }
        return(
            <div className="InputSearch">
               <div className="input container">
                    <input onChange={changeInput} ref={refValue} placeholder="Tìm kiếm tên sản phẩm" type="text" />
                </div>
                {  
                    (props.dataDefault.length === 200 && !props.isShow)  &&
                    <div className="numberResult container">
                        Không tìm thấy sản phẩm
                    </div>
                }
                { 
                    props.dataFromApi.length < props.dataDefault.length &&
                    <div className="numberResult container">
                       Có  {props.dataFromApi.length} kết quả tìm kiếm được
                    </div>
                }
            </div>
        );
}

InputSearch.defaultProps = {
    dataDefault: [],
    dataFromApi: []
  };
  
  InputSearch.propTypes = {
    isShow: PropTypes.bool.isRequired,
    renderFilter: PropTypes.func,
    dataDefault: PropTypes.array.isRequired,
    dataFromApi: PropTypes.array.isRequired
  };
  
  export default InputSearch