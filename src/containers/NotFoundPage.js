import React from "react";

import '../components/UI/Card.scss'

class NotFoundPage extends React.Component{
    render(){
        return (
            <div className="flex-container-center">
                <div className="wrapper-center">
                    <div className="wrapper-center">
                        <p className="warning_text">404 Not Found!</p>
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default NotFoundPage;