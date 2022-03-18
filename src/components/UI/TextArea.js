import React from "react";

class TextArea extends React.Component{

    render(){
        return (
            <div className="form-group">
                <label htmlFor={`input${this.props.name}`}>{this.props.title}</label>
                <textarea
                    id={`input${this.props.name}`} 
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    className={`form-control ${this.props.className}`}
                    onChange={this.props.onChange}
                    defaultValue={this.props.value}
                    ref={this.props.forwardRef}
                    ></textarea>
                    <small className="form-text text-muted">{this.props.message}</small>
            </div>
        )
        
        
    }
}

export default TextArea;