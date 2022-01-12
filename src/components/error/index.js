import React, { Fragment } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export const Error = ({ state, removeError }) => {
    return (
        <Fragment>
            <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                open={state.open}
                autoHideDuration={3000}
                onClose={e=>removeError()}
                message={state.message}
            />
        </Fragment>
    );
};

export const ListError = ({ error }) => {
    return (
        <span className='list-error'>
            {error.message}
        </span>
    );
};

