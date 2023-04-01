const Variables = () => {
    //api-rest
    // const api = "http://localhost:4000/api/";
    const api = "https://firefly-server-production-a6e1.up.railway.app/api/";
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
