import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import LeftPaneForm from './LeftPaneForm'

function RegisterPage() {
    let history = useHistory()
    const initialState = {
        firstname : '',
        lastname:'',
        email: '',
        password: '',
        confirmPass: ''
    }
    const [clickicon, setClickicon] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const [err, setErr] = useState(false)
    const [userdata, setUserdata] = useState(initialState)

    const onChange =e=>{
        setUserdata({...userdata, [e.target.name]: e.target.value})
    }
    const onSubmit = e =>{
        e.preventDefault()
        console.log(userdata)
        passMatch()
        setUserdata(initialState)
        history.push('/login')
    }
    const passMatch = ()=>{
        if(password !== confirmPass){
            setErr(true) 
        }else{
            setErr(false)
        }
    }
    const{firstname, lastname, email, password, confirmPass} = userdata
    return (
        <div className="register">
            <LeftPaneForm />
            <div className="rightpane_register">
                <h4>Create Account</h4>
                <p>Fill the below form to create a new account</p>
                <form action="">
                    <div className="input-group">
                        <input type="text"
                         name="firstname"
                          className="input"
                          value={firstname}
                          onChange={onChange}
                         placeholder="First name" />
                    </div>
                    <div className="input-group">
                        <input type="text"
                         name="lastname"
                          className="input"
                          value={lastname}
                          onChange={onChange}
                         placeholder="Last name" />
                    </div>
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
                    <div className="input-group">
                        <input type={!viewPassword ? "password" : "text"}
                         name="confirmPass"
                          className="input"
                          value={confirmPass}
                          onChange={onChange}
                         placeholder="Confirm password" 
                        />
                        <i class={viewPassword ? "fa fa-eye" : "fa fa-eye-slash"} onClick={()=>setViewPassword(!viewPassword)} aria-hidden="true"></i>

                    </div>
                    <small>{err && <p style={{'color': 'red', 'marginBottom': '.9em'}}>Passwords does not match</p>}</small>
                    <div className="btn-block">
                        <Link to='/login' title='login' className='btn-default'>
                            Login
                        </Link>
                        <button className="btn-primary" onClick={onSubmit}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
