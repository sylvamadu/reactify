import React, {useState} from 'react'
import LeftPaneForm from './LeftPaneForm'
import {Link, useHistory} from 'react-router-dom'
function LoginPage() {
    let history = useHistory()
    const initialState = {
        email: '',
        password: '',
    }
    const [userdata, setUserdata] = useState(initialState)
    const [clickicon, setClickicon] = useState(false)
    const onChange =e=>{
        setUserdata({...userdata, [e.target.name]: e.target.value})
    }
    const onSubmit = e =>{
        e.preventDefault()
        console.log(userdata)
        setUserdata(initialState)
        history.push('/')
    }
  
    const{email, password} = userdata
    return (
        <div className="login">
            <LeftPaneForm />
            <div className="rightpane_login">
                <h4>Login</h4>
                <p>Welcome back please login to your account.</p>
                <form action="">
                    <div className="input-group">
                        <input type="email"
                         name="email"
                          className="input"
                          value={email}
                          onChange={onChange}
                         placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type={!clickicon ? "password" : "text"}
                         name="password"
                          className="input"
                          value={password}
                          onChange={onChange}
                         placeholder="Password" />
                         <i class={clickicon ? "fa fa-eye" : "fa fa-eye-slash"} onClick={()=>setClickicon(!clickicon)} aria-hidden="true"></i>
                    </div>
                    <div className="check">
                        <div className="input-check">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    <div className="btn-block">
                        <Link to='/register' title='login' className="btn-default">
                           Register
                        </Link>
                        <button className="btn-primary" onClick={onSubmit}>Login</button>
                    </div>
                </form>
        </div>
        </div>
    )
}

export default LoginPage
