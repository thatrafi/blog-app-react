import React from "react";
import Card from "../components/UI/Card";

import '../components/UI/Card.scss'

class NotFoundPage extends React.Component{
    render(){
        return (
            <div className="flex-container-center">
                <div className="wrapper-center">
                <Card className="card_blue card_center">
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