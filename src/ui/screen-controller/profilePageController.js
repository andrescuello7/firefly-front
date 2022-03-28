import { useEffect, useState } from 'react';
import axios from "axios";
import RecuestAccess from '../../data-access/requestAccess';
import UserModel from '../../models/userModel';


const ProfilePageController = () => {
    const [input, setInput] = useState({});
    const [validation, setValidation] = useState(false);
    const { putUser, getUser, putUserPhoto } = RecuestAccess();
    const { userModel, setUserModel } = UserModel();

    useEffect(async () => {
        let response = await getUser()
        setUserModel(response)
    }, [userModel.length === 0])

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    const PutHandleSubmit = async (e) => {
        e.preventDefault()
        try {
            let { user } = await getUser();
            await putUser(user._id, input);
        } catch (error) {
            console.log(error);
        }
    };
    const onChangeImg = async (e) => {
        e.preventDefault()
        try {
            let response = await getUser();
            await putUserPhoto(e, response.user._id);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        userModel,
        validation,
        setValidation,
        onChangeImg,
        HandleChange,
        PutHandleSubmit
    };
}
export default ProfilePageController