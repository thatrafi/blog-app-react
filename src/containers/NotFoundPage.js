import React from "react";
import Card from "../components/UI/Card";

import classes from '../components/UI/Card.module.css'

class NotFoundPage extends React.Component{
    render(){
        return (
            <div className="flex-container-center">
                <div className="wrapper-center">
                <Card className={`${classes.card_blue} ${classes.card_center}`}>
                    <div className="wrapper-center">
                        <p className="warning_text">404 Not Found!</p>
                    </div> 
                </Card>
                </div>
            </div>
            
        )
    }
}

export default NotFoundPage;