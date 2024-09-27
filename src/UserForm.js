import React,{useState} from 'react';

function UserForm() {

    const [id,setId] = useState(0);
    const [name, setName] = useState('');


    return(
        <div>
            <div>ID : <input value={id} type="number" placeholder="Enter number"/></div>
            <div>Name: <input value={name} type="text" placeholder="Enter Name" /></div>
        </div>
    );
}   


export default UserForm;