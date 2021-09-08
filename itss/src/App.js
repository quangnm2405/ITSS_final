import React, { Component } from 'react'
import UserList from './components/hookPage'

function App() {

  const  list = ['Quynh', 'Hoang Anh', 'Nhi', 'Tu']
  const [ name,changeNewName,addName,listName] = UserList(list)
  const showList = (users) =>{
    let result = null
    result = users.map((value,index)=>{
      if(index === users.length -1){
        return(
          <span>{value}</span>
        )
      } else {
        return(
          <span>{value} ,</span>
        )
      }
      
    })
    return result
  } 

  return (
    <div className="App">
      <p>学生一覧：[{showList(list)}]</p> <br/>
      <p>追加する名前を入力してください。</p> <br/>
      <input value={name} onChange={changeNewName}/> <br/>
      <button onClick={addName} >確定</button> <br/>
      <p>追加する名前： {name}</p> <br/>
      <p>新しい一覧：[{showList(listName)}]</p>
    </div>
  );
}

export default App;