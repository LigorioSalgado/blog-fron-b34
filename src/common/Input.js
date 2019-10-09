import React from 'react';

function Input({label,type,placeholder,change,value,required,name}){

    return(
        <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>{label}</label>
              <input type={type} class="form-control" placeholder={placeholder} 
                name={name}
                onChange={change} 
                value={value}
                required={required} 
                />
              <p class="help-block text-danger"></p>
            </div>
        </div>
    )
}

export default Input;