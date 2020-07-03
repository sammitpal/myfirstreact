import React, { Component } from 'react';
import './card.css';
class card extends Component{
    render(){
        return(
            <body>
                <form>
                <div className = "me">
                    <h1>My First React Project</h1>
                    Name: <input type = "text" placeholder = "Full Name" name = "Name" required/><br/><br/>
                    Email: <input type = "email" placeholder = "Email" name = "email" required/><br/><br/>
                    Password: <input type = "password" placeholder = "*****" name = "password" required min = "6"/><br/><br/></div>
                    <center>
                        <input type = "Submit" value = "Register"/><br/><br/><input type = "Reset"/><br/><br/><br/>
                    </center>
                    <br/><br/><br/><br/><br/><br/>
                    <h4>By: Sammit Pal</h4>
                </form>
            </body>
        );
    }
}
export default card;