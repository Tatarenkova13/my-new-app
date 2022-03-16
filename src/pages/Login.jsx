import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AuthContext } from '../context';

function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }

  return (
    <div>
        <Box 
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            mt={2}
        >
            <TextField 
                className='Admin' 
                label="Введите логин" 
            />
            <TextField 
                ClassName='AdminPass' 
                label="Введите пароль" 
                type='password' 
            />
            <Button onClick={login}>Войти</Button>
      </Box>
    </div>
  );
}

export default Login;
