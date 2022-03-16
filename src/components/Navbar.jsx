import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context";


const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            {isAuth 
            ? 
            <div className='navbar'>
                <Button onClick={logout}>Выйти</Button>
                <h3> Info </h3>
                <h3> Info </h3>
                <h3> Info </h3>
                <div className='navbar__links'>
                    <h4> Вы вошли в аккаунт </h4>
                </div>
            </div>
            :
            <div className='navbar'>
                <Button onClick={logout}>Выйти</Button>
                <h3> Info </h3>
                <h3> Info </h3>
                <h3> Info </h3>
            </div>
            }
            
            

            
        </div>
    )
}

export default Navbar;