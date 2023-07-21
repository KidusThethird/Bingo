export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== 'undifiend'? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
return userInfo;
}