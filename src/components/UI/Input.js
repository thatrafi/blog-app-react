import React from "react";

class Input extends React.Component{

    render(){
        return (
            <div className="form-group">
                <label htmlFor={`input${this.props.name}`}>{this.props.title}</label>
                <input
                    id={`input${this.props.name}`} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    className={`form-control ${this.props.className}`}
                    onChange={this.props.onChange}
                    defaultValue={this.props.defaultValue}
                    ref={this.props.forwardRef}
                    />
                    <small className="form-text text-muted">{this.props.message}</small>
            </div>
        )
        
        
    }
}

export default Input;