import React, { createContext, useContext, useState } from 'react'
import Header from './contant/Header'
import Todo from './contant/Todo'
import Footer from './contant/Footer'

export let UserContext = createContext();

const App = () => {
  let [user, setUser] = useState({ name : 'Dinesh', age : 20, email : "dineshramesh2899@gmail.com" })
  return (
    <UserContext.Provider value={{user}}>
      <div className="App">
        <Header />
        <Todo />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
