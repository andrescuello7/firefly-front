import ControllerVariables from "../../src/values/api";
import axios from "axios";

const RecuestAccess = () => {
    const { api, cloudinary, token, headers, idBanner } = ControllerVariables();

    //Method Post 
    const postRegister = async (input) => {
        const { data } = await axios.post(api + "user", input);
        localStorage.setItem("token", data);
        window.location.href = "/";
    };
    const postLogin = async (input) => {
        const { data } = await axios.post(api + "auth", input);
        localStorage.setItem("token", data);
        window.location.href = "/";
    };
    const postPhotoInAdmin = async (e, input) => {
        const pic = e.target.files[0];
        const formData = new FormData();
        formData.append("file", pic);
        formData.append("upload_preset", "wkuf5yo4");
        fetch(cloudinary, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) =>
                axios.post(api +
                    'home',
                    {
                        photo: res.url,
                        title: input.title,
                        description: input.description
                    },
                    {
                        headers,
                    }
                )
            )
            .then((response) => console.log(response.data),
        );
    };
    const postBannerInAdmin = async (e, input) => {
        const pic = e.target.files[0];
        const formData = new FormData();
        formData.append("file", pic);
        formData.append("upload_preset", "wkuf5yo4");
        fetch(cloudinary, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) =>
                axios.put(api +
                    'home/banner/' + idBanner,
                    {
                        photo: res.url,
                        title: input.title,
                        description: input.description
                    },
                    {
                        headers,
                    }
                )
            )
            .then((response) => console.log(response.data),
        );
    };

    //Method Get
    const getReadUser = async (e) => {
        try {
            const { data } = await axios.get(api + "user", {
                headers,
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const getUser = async (e) => {
        if (token !== null) {
            try {
                const { data } = await axios.get(api + "auth", {
                    headers,
                });
                return data;
            } catch (error) {
                console.log(error);
                window.location.href = "/login";
            }
        } else {
            window.location.href = "/login";
        }
    };
    const getPhoto = async (e) => {
        try {
            const { data } = await axios.get(api + "home", {
                headers,
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const getBanner = async (e) => {
        try {
            const { data } = await axios.get(api + "home/banner", {
                headers,
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    //Method Put
    const putUser = async (id, input) => {
        try {
            const { data } = await axios.put(api + `user/${id}`, input, {
                headers,
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const putBannerInAdminText = async (e, input) => {
        try {
            const response = await axios.put(api +
                'home/banner/' + idBanner,
                {
                    title: input.title,
                    description: input.description
                },
                {
                    headers,
                }
            )
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const putUserPhoto = async (e, id) => {
        const pic = e.target.files[0];
        const formData = new FormData();
        formData.append("file", pic);
        formData.append("upload_preset", "wkuf5yo4");
        fetch(cloudinary, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) =>
                axios.put(api +
                    `user/${id}`,
                    { photo: res.url },
                    {
                        headers,
                    }
                )
            )
            .then((response) => console.log(response.data),
        );
    };

    //Method Delete
    const deletePostInAdmin = async (id) => {
        try {
            const { data } = await axios.delete(api + `home/${id}`, {
                headers,
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        putUser,
        getUser,
        getPhoto,
        getBanner,
        postLogin,
        getReadUser,
        postRegister,
        putUserPhoto,
        postPhotoInAdmin,
        deletePostInAdmin,
        postBannerInAdmin,
        putBannerInAdminText,
    }
}
export default RecuestAccess;