import React from "react";
import { Grid, Box } from '@material-ui/core';




function Profile() {



    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{
                    height: '100vh',
                    backgroundColor: 'rgb(223, 141, 116)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <img src='logo512.png' alt='react' />
                    <h1>Home Page</h1>
                </Box>
            </Grid>
        </Grid>
    )
}


export default Profile;