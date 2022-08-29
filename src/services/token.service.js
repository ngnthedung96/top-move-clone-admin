class TokenService {
    getLocalRefreshToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user?.refreshToken;
    }
    getLocalAccessToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user?.token;
    }
    updateLocalToken(token, refreshToken) {
      let user = JSON.parse(localStorage.getItem("user"));
      user.token = token;
      user.refreshToken = refreshToken;
      localStorage.setItem("user", JSON.stringify(user));
      console.log('update local refrestoken: ', refreshToken)
    }
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
    setUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    removeUser() {
      localStorage.removeItem("user");
    }
  }

  export default new TokenService();