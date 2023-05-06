export const selectUser = state => state.auth.user;
export const selectIsAuth = state => state.auth.isAuth;
export const selectError = state => state.auth.error;
export const selectToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
