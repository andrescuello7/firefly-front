const Variables = () => {
    //api-rest
    const api = "https://firefly-church.herokuapp.com/api/";
    const cloudinary = "https://api.cloudinary.com/v1_1/five-drive/upload";
    
    //middlewares
    const admin = localStorage.getItem("admin");
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    return {
        cloudinary,
        headers,
        token,
        admin,
        api
    }
}

export default Variables;