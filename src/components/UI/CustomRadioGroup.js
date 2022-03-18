import React from 'react'
import CustomRadio from './CustomRadio';

class CustomRadioGroup extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            radioLists : this.props.radios.map(function(value) {
                return {title: value, isChecked: "0"};
            }),
            selected : ""
        }
    }

    componentDidUpdate(){
        
    }

    changeHandler(data){
        let newArr = [...this.state.radioLists]
        newArr.map( (x) => { x.isChecked = "0"; return x });
        newArr[data.key] = {title : data.title, isChecked : data.isChecked}

        this.setState(prevState => {
            return {...prevState, radioLists : newArr}
        })

        this.setState(prevState => {
            return {...prevState, selected : newArr.find((i)=> i.isChecked === "1").title}
        })
    }

    render(){
        return (<div className="btn-group btn-group-toggle" data-toggle="buttons">
        {this.state.radioLists.map((radio,index)=>(
            <CustomRadio title={radio.title} key={index} id={index} isChecked={radio.isChecked} onChangeRadio={this.changeHandler.bind(this)} />
        ))}
      </div>)
    }
}

export default CustomRadioGroup;