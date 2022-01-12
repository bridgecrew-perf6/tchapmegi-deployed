export const checkToken = () => {
    return localStorage.getItem('access_token') !== null;
};

export const getToken = () => {
    return {
        "Authorization": localStorage.getItem('access_token')
    };
};

export const storeToken = token => {
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', token);
};

export const reloadApp = () => {
    window.location.reload();
};

export const deleteToken = () => {
    localStorage.removeItem('access_token');
};

export const logout = () => {
    deleteToken();
    reloadApp();
};

export const readAsFile = blob => {
    return new Promise((resolve, reject) => {
        const reader  = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

export const revokeObjectURL = (url) => {
    window.URL.revokeObjectURL(url);
}
