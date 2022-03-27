import { useState, useEffect } from 'react'
const UsersModel = () => {
    const [usersModel, setUsersModel] = useState([]);
    return {
        usersModel,
        setUsersModel
    }
}
export default UsersModel;