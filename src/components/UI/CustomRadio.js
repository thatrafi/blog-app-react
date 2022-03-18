import React from 'react'

class CustomRadio extends React.Component {

    changeHandler(){
       return this.props.onChangeRadio({key: this.props.id ,title : this.props.title, isChecked : (this.props.isChecked === "1") ? "0" : "1" })
    }

    render(){
        return (<label className={`btn btn-secondary ${this.props.isActive ? 'active' : ''}`}>
                 <input type="radio" 
                 id={`option${this.props.id}`} 
                 autoComplete={this.props.autoComplete}
                 checked={(this.props.isChecked === "1") ? true : false }
                 onChange={this.changeHandler.bind(this)}
                 onClick={()=>{}}
                 /> {this.props.title}
             </label>)
    }
}

export default CustomRadio