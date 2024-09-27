import { useEffect, useState } from "react";
import UserForm from "./UserForm.js";
import UserTable from "./UserTable.js";
import axios from "axios";

function User() {

    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const getUser = () => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
                setIsSubmit(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    
    const addUser = (data) => {
        axios.post('http://localhost:3001/createuser', data)
            .then(response => {
                getUser();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateUser = (data) => {
        axios.put('http://localhost:3001/updateuser', data)
            .then(response => {
                setIsSubmit(true);
                getUser();
                setIsEdit(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteUser = (data) => {
        axios.delete(`http://localhost:3001/deleteuser?id=${data.id}`)
            .then(response => {
                getUser();
                setIsEdit(false);
            })
            .catch(error => {
                console.log(error);
            });
    };


    useEffect(() => {
        getUser();
    }, []);

    return(
        <div>
            <UserForm addUser={addUser} selected={selected} isEdit={isEdit} updateUser={updateUser} isSubmit={isSubmit}/>
            <UserTable deleteUser={deleteUser} users={users} setSelected={(data) => setSelected(data)} setIsEdit={(data) => setIsEdit(data)} />
        </div>
    );
}

export default User;