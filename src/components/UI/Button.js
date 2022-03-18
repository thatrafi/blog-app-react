import React from 'react'

class Button extends React.Component{
    render(){
        return <button className={`btn ${this.props.className}`} onClick={this.props.onClick} type={this.props.type}>
            {this.props.title}
        </button>
    }
}

export default Button;