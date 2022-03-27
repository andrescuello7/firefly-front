import ControllerVariables from "../../src/values/api";
import axios from "axios";

const RecuestAccess = () => {
    const { api, cloudinary, token, headers } = ControllerVariables();

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

    //Method Get of user | read date
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
    return {
        getReadUser,
        SubmitRegister,
        SubmitLogin
    }
}
export default RecuestAccess;