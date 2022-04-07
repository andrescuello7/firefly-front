import { useState } from 'react'
const UserModel = () => {
    const [userModel, setUserModel] = useState([]);
    return {
        userModel,
        setUserModel
    }
}
export default UserModel;