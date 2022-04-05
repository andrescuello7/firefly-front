const Variables = () => {
    //api-rest
    const api = "https://firefly-church.herokuapp.com/api/";
    const cloudinary = "https://api.cloudinary.com/v1_1/five-drive/upload";
    const idBanner = "62485b0ae119f42257d2ab3b";
    
    //middlewares
    const admin = localStorage.getItem("admin");
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    return {
        idBanner,
        cloudinary,
        headers,
        token,
        admin,
        api
    }
}

export default Variables;