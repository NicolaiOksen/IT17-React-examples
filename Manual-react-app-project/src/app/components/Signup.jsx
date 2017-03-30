import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import '../../css/Login.css';

class Signup extends Component {
    render () {
        return (
            <div className="w3layouts-main"> 
                <h1> </h1>
                <div className="agilesign-form">  
                    <div className="agileits-top">
                        <form action="#" method="post">
                            <div className="styled-input w3ls-text">
                                <input type="text" name="User Name" required=""/>
                                <label>User Name</label>
                                <span></span>
                            </div>
                            <div className="styled-input w3ls-text">
                                <input type="text" name="email" required=""/>
                                <label>Email ID</label>
                                <span></span>
                            </div>
                            <div className="styled-input w3ls-text">
                                <input type="password" name="Password" required=""/> 
                                <label>Password</label>
                                <span></span>
                            </div> 
                            <div className="styled-input w3ls-text">
                                <input type="password" name="Password" required=""/> 
                                <label>Confirm Password</label>
                                <span></span>
                            </div>
                            <div className="wthree-text">  
                                <p>
                                    <input type="checkbox" id="brand" value=""/>
                                    <label htmlFor="brand"><span></span>I accept the terms of use</label>  
                                </p>  
                            </div>
                            <div className="agileits-bottom"> 
                                <Link to="/">
                                    <input type="submit" value="Sign Up"/> 
                                </Link>
                            </div>	
                        </form>
                    </div> 
                    <div className="w3agile-btm"> 
                        <p>Already a member ? <Link to="/login"> Log In</Link> </p>  
                    </div>
                </div>	
            </div>	
        )
    }
}

export default Signup