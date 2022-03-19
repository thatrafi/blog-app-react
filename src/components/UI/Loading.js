import React from 'react'

import classes from './Loading.module.css'

class Loading extends React.Component{
    render(){
        return <div className={classes.loader}></div>
    }
}

export default Loading;