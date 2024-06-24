import React from 'react';
import Bodyall from './Components/Bodyall'
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import reduser from './reducers/'

const  store = createStore(reduser);
class App extends React.Component{
      
    render(){
        return(
            <Provider store={store}>
            <Bodyall/>
            </Provider>
        )
    }
}
export default App;
import React, { Component, createRef } from "react";
// import { debounce } from 'lodash';
import cn from 'classnames';
import { debounce } from "./func";

class InputField extends Component {
  inputRef = createRef();
  constructor(props) {
    super(props);
    this.state ={
      inputfield : (this.props.defaultValue) ? this.props.defaultValue : ""
    }
    this.throttleHandleChange = debounce(this.throttleHandleChange.bind(this), 500);
  }
  componentDidMount(){
    if(this.props.defaultValue){
      this.setState({inputfield : this.props.defaultValue})
    }
    setTimeout(() => {
      document.querySelector(".input-dynamic").click();
    }, 1500);
  }
  throttleHandleChange(e) {
    // this.setState({inputfield:e.target.value})
    if(this.props.onChange){
      this.props.onChange(e);
    }
 }
 handleClick = () => {
  this.inputRef.current.focus();
}
 onChangeHandler(e){
  console.log("this.inputRef.current ",this.props.defaultValue)
  this.throttleHandleChange(e)
}
  render() {
      let disabled = (this.props.disabled) ? this.props.disabled : false;
      let readOnly = (this.props.readOnly) ? true : false;
      let typeInput = (this.props.type) ? this.props.type : "text";
      let id = (this.props.id) ? this.props.id :"input-id"
      id += "-" + Math.floor(Math.random() * 100000);
      let lableClass = "lable-dynamic "
      lableClass += (this.props.defaultValue !=="") ? " active" : "";
      let direction =(this.props.direction === "ltr") ? " ltr " : "";
      let inputError ="";
      let inputValid="";
      let disabledTooltip ="";
      if(disabled){
        disabledTooltip = "disable";
      }
      if("valid" in this.props){
        inputError =  this.props.valid ? "" : " error"
      }
      if("validated" in this.props){
        inputValid =  this.props.validated ? " valid" : "";
      }
      
    return (
        <div className={cn("input-field" + direction ,this.props.parentClassname && this.props.parentClassname)}>
            <input 
                  style={this.props.style && this.props.style}
                  // value={this.props.defaultValue}
                  id={id} 
                  ref={ this.inputRef}
                  name={this.props.name && this.props.name} 
                  placeholder={this.props.placeholder && this.props.placeholder} 
                  type={typeInput}
                  className={cn("input-dynamic " + inputError + inputValid , this.props.className && this.props.className )}
                  onClick={this.props.onClick && this.props.onClick}
                  onChange={(e)=> this.onChangeHandler(e)}
                  onFocus={this.props.onFocus && this.props.onFocus}
                  onKeyPress={this.props.onKeyPress && this.props.onKeyPress}
                  onKeyDown={this.props.onKeyDown && this.props.onKeyDown}
                  onBlur={this.props.onBlur && this.props.onBlur}
                  disabled={disabled}
                  readOnly = {readOnly} 
                  // autoComplete="off"
                  autoComplete={`${this.props.autoComplete || 'new-password'}`}
                  data-parent= {this.props.datePickerParentId && this.props.datePickerParentId}
                  />
            <label 
                  htmlFor={id} 
                  onClick={this.handleClick}
                  className={cn(lableClass ,
                    this.props.lableClass && this.props.lableClass)}>
                        {this.props.lableText && this.props.lableText}
            </label>
            {this.props.hasTooltip && (
               <div className={cn("tooltip-wrapper" ,disabledTooltip, this.props.parentTooltipCalssName && this.props.parentTooltipCalssName )}>
                  <div className="tooltip-row">
                    <small className="tooltips-icon">
                      {this.props.tooltipIcon}
                    </small>
                    {this.props.tooltipText && (
                      <p className="tooltips-text">
                        {this.props.tooltipText}
                      </p>
                    )}
                  </div>
              </div>
            )}
            {(this.props.errorText && !this.props.valid) && (
              <span className="input-error-field">{this.props.errorText}</span>
            )}
            {(this.props.validated && this.props.errorText)  && (
              <span className="input-valid-field">{this.props.errorText}</span>
            )}
        </div>
    );
  }
}

export default InputField;

export const debounce = (fn, time)=> {
    let timeoutId
    return wrapper
    function wrapper (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        timeoutId = null
        fn(...args)
      }, time)
    }
  }
