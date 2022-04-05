import { useState } from "react";
import RecuestAccess from "../../data-access/requestAccess";

const LoginPageController = () => {
    const [input, setInput] = useState({});
    const [validation, setValidation] = useState(false);
    const { SubmitLogin } = RecuestAccess();

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SubmitLogin(input);
            setValidation(false)
        } catch (error) {
            console.log(error);
            setValidation(true)
        }
    };

    return {
        HandleSubmit,
        HandleChange,
        validation,
    };
}
export default LoginPageController