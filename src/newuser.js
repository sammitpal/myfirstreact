import React, { Component } from 'react';
import './card.css';
class newuser extends Component{
    render(){
        return(
            <div className = "me">
                <h1>My First React Project</h1>
                Name: <input type = "text" placeholder = "Full Name" name = "Name" required/><br/><br/>
                Email: <input type = "email" placeholder = "Email" name = "email" required/><br/><br/>
                Password: <input type = "password" placeholder = "*****" name = "password" required min = "6"/><br/><br/>
                Date of Birth <input type = "date" name = "date"/><br/><br/>
                <input type = "Submit" value = "Create Account"/>&nbsp;&nbsp;<input type = "Reset"/><br/><br/><br/>

            </div>
        );
    }
}
export default newuser;