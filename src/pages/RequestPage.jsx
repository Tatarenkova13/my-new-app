import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { AuthContext } from '../context';
import { Outlet } from 'react-router-dom';
import DataGridDemo from '../components/DataGrid';



function Requests() {

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 0.7 }}>
                            Welcome
                        </Typography>
                        <nav>
                            
                            <Link
                                variant="button"
                                color="text.primary"
                                href="/requestPage"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Ссылка
                            </Link>

                            <Link
                                variant="button"
                                color="text.primary"
                                href="#"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Settings
                            </Link>
                        </nav>
                      
                        <Button href="/" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            На главную
                        </Button>
                    </Toolbar>
                </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Согласование заявок
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          <DataGridDemo />
        </Typography>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
      </Container>
      {/* End footer */}
      <Outlet />
    </React.Fragment>
  );
}

export default function RequestPage() {
  return <Requests />;
}