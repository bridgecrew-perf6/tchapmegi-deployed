export const getLoginCredentials = state => {
    return {
        username: state.login.username.value,
        password: state.login.password.value
    };
};
