import { useState } from "react";
import RecuestAccess from "../../data-access/requestAccess";

const RegisterPageController = () => {
    const [input, setInput] = useState({});
    const [validation, setValidation] = useState(false);
    const { SubmitRegister } = RecuestAccess();

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SubmitRegister(input);
            setValidation(false)
        } catch (error) {
            console.log(error);
            setValidation(true)
        }
    };
    return {
        validation,
        HandleSubmit,
        HandleChange
    };
}
export default RegisterPageController