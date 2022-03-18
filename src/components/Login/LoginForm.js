import React from 'react'
import Input from '../UI/Input';
import Button from '../UI/Button';

class LoginForm extends React.Component{


    constructor(){
        super();
        this.inputRef = {
            username : React.createRef(),
            password : React.createRef()
        }
    }

    submitHandler(event) {
        event.preventDefault();
        const loginData = {
            username : this.inputRef.username.current.value,
            password : this.inputRef.password.current.value
        }
        this.props.onSubmitLogin(loginData)
        this.inputRef.username.current.value = ""
        this.inputRef.password.current.value = ""
    }

    usernameOnChange(event){
        // this.setState((prev)=>{
        //     return {...prev,username: event.target.value}
        // })
    }

    passwordOnChange(event){
        // this.setState((prev)=>{
        //     return {...prev,password: event.target.value}
        // })
    }


    render(){   
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <Input type="text" className="my-2" name="username" title="Username" placeholder="username" forwardRef={this.inputRef.username}/>
                <Input type="password" className="my-2" value={this.inputRef.password.current} name="password" title="Password" placeholder="password" forwardRef={this.inputRef.password}/>
                <Button className="btn-primary" type="submit" title="Login"/>
            </form>
        )
    }
}

export default LoginForm;