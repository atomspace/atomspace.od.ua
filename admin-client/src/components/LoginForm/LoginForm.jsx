import React from "react";
import './LoginForm.css';

const LoginForm = () => (
    <div>
        <p className='admin-text'>Atom Space Admin Panel</p>
        <form>
            <input className='login' type="text" placeholder='Login' />
            <input className='password' type="password" placeholder='Password' />
            <input className='submit-input' type="submit" onclick="" value="Log in" />
        </form>
    </div>
);

export default LoginForm;