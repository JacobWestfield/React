import React from "react";
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';




function Navigation() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{
                    height: '10vh',
                    backgroundColor: 'rgb(120, 190, 150)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Link to="/">Home</Link>
                    <Link to="/chat">New Chat</Link>
                    <Link to="/profile">Profile Page</Link>
                    <Link to="/chatlist">Chats</Link>
                </Box>
            </Grid>
        </Grid>
    )
}


export default Navigation;