import ControllerVariables from "../../src/values/api";
import axios from "axios";
import { useState } from "react";
import { getBase64, beforeUpload } from '../../src/network/photo';

const RecuestAccess = () => {
    const { api, cloudinary, token, headers } = ControllerVariables();
    const [photo, setPhoto] = useState();
    const [base64, setBase64] = useState();

    //Submit of register
    const SubmitRegister = async (input) => {
        const { data } = await axios.post(api + "user", input);
        localStorage.setItem("token", data);
        window.location.href = "/";
    };

    //Submit of login
    const SubmitLogin = async (input) => {
        const { data } = await axios.post(api + "auth", input);
        localStorage.setItem("token", data);
        window.location.href = "/";
    };

    //Method Get of users | read date
    const getReadUser = async (e) => {
        try {
            const { data } = await axios.get(api + "user", {
                headers,
            });
            return data
        } catch (error) {
            console.log(error);
        }
    };

    //Method Get of user | read date
    const getUser = async (e) => {
        try {
            const { data } = await axios.get(api + "auth", {
                headers,
            });
            return data
        } catch (error) {
            console.log(error);
        }
    };

    //Method Put of user | read date
    const putUser = async (id, input) => {
        try {
            const { data } = await axios.put(api + `user/${id}`, input, {
                headers,
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    //Photo Profile
    const putUserPhoto = async (e, id) => {
        const pic = e.target.files[0];
        const formData = new FormData();
        formData.append("file", pic);
        formData.append("upload_preset", "wkuf5yo4");
        fetch("https://api.cloudinary.com/v1_1/five-drive/upload", {
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
    return {
        putUser,
        getUser,
        getReadUser,
        putUserPhoto,
        SubmitRegister,
        SubmitLogin
    }
}
export default RecuestAccess;