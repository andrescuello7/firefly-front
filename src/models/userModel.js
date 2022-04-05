import { useState, useEffect } from 'react'
const UserModel = () => {
    const [userModel, setUserModel] = useState([]);
    return {
        userModel,
        setUserModel
    }
}
export default UserModel;