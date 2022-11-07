class TokenService {
    getLocalRefreshToken() {
      const admin = JSON.parse(localStorage.getItem("admin"));
      return admin?.refreshToken;
    }
    getLocalAccessToken() {
      const admin = JSON.parse(localStorage.getItem("admin"));
      return admin?.token;
    }
    updateLocalToken(token, refreshToken) {
      let admin = JSON.parse(localStorage.getItem("admin"));
      admin.token = token;
      admin.refreshToken = refreshToken;
      localStorage.setItem("admin", JSON.stringify(admin));
      console.log('update local refrestoken: ', refreshToken)
    }
    getAdmin() {
      return JSON.parse(localStorage.getItem("admin"));
    }
    setAdmin(admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    }
    removeAdmin() {
      localStorage.removeItem("admin");
    }
  }

  export default new TokenService();