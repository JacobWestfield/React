import { PROFILE_SAVE, PROFILE_UNSAVE } from './Actions';

const initialState = {
    saved: false,
}

export const ProfileReducer = (state = initialState, action) => {

    switch (action?.type) {
        case PROFILE_SAVE: {
            return {
                saved: true
            }
        }
        case PROFILE_UNSAVE: {
            return {
                saved: false
            }
        }
        default: {
            return state
        }
    }
};



