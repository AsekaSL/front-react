

function UserTable({users, setSelected, setIsEdit, deleteUser}) {

    

 return(
    <div>
        {
            users.map(user => {
                return(
                    <p key={user.id}>
                    {user.id}. {user.name} <button onClick={() => {
                        setSelected({id: user.id, name: user.name});
                        setIsEdit(true);
                        }}>Update</button> <button onClick={() => deleteUser({id: user.id})}>Delete</button>
                    </p>
                );
            })
        }
        
    </div>
 );
}

export default UserTable;