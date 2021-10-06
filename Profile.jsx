import React, { useEffect, useState } from "react";
import { Grid, Box } from '@material-ui/core';

import { useDispatch } from "react-redux";
import { PROFILE_SAVE as save, PROFILE_UNSAVE as unsave } from '../../Store/Actions'


// const store = createRedux(ProfileReducer, { saved: false });
// const { PROFILE_SAVE: save, PROFILE_UNSAVE: unsave } = profileActions;



function Profile() {
    const dispatch = useDispatch();

    const [state, setState] = useState(false);

    useEffect(() => {
        if (state === true) {
            dispatch({ type: save })
        } else {
            dispatch({ type: unsave })
        }
    }, [dispatch, state])


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
                    <h1>Profile page</h1>
                    <h2>New User</h2>
                    <div>
                        <input type="checkbox" checked={state} onChange={() => setState(!state)} />
                        <label>SAVED</label>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}


export default Profile;