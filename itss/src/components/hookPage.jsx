import { useState } from 'react';

function UserList(list_user) {
    
  const  [ listName , setListName] = useState(list_user)
  const [name, setName] = useState('')
  const changeNewName = (e) => {
    setName(e.target.value)
  }
  const addName = () =>{
    let data = [].concat(listName)
    data = [...data, name]
    setListName(data)
    setName("")
  }
 
  return [ name,changeNewName ,addName,listName]
}

export default UserList;