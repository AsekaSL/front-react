import React,{useEffect, useState} from 'react';

function UserForm({addUser, selected, isEdit, updateUser, isSubmit}) {

    const [id,setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        setId(selected.id);
        setName(selected.name);
    }, [selected])

    useEffect(() => {
        setId(0);
        setName('');
    }, [isSubmit]);

    return(
        <div>
            <div>ID : <input value={id} type="number" placeholder="Enter number" onChange={(e) => {setId(e.target.value)}}/></div>
            <div>Name: <input value={name} type="text" placeholder="Enter Name" onChange={(e) => {setName(e.target.value)}}/></div>
            <button onClick={() =>  isEdit ? updateUser({id, name}) :addUser({id, name})}>
                {
                    isEdit ? 'Update' : 'Submit'
                }
            </button>
        </div>
    );
}   


export default UserForm;