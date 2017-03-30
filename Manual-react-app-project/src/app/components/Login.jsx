import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import '../../css/Login.css'

class Login extends Component {
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
                                <input type="password" name="Password" required=""/> 
                                <label>Password</label>
                                <span></span>
                            </div> 
                            <div className="wthree-text">  
                                <p>
                                    <input type="checkbox" id="brand" value=""/>
                                    <label htmlFor="brand"><span></span>Stay signed in</label>  
                                </p>  
                            </div>
                            <div className="agileits-bottom"> 
                                <Link to="/">
                                    <input type="submit" value="Log in"/> 
                                </Link>
                            </div>	
                        </form>
                    </div> 
                    <div className="w3agile-btm"> 
                        <p>Not a member ? <Link to="/signup">Sign up</Link> </p>  
                    </div>
                </div>	
            </div>	
        )
    }
}

export default Login