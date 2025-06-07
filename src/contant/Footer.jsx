import React,{useContext} from 'react'
import {UserContext} from '../App'

const Footer = () => {
  let {user} = useContext(UserContext);
  return (
   
      <footer>
        <h2>UserDetails</h2>
        <article>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </article>
      </footer>
  
  )
}

export default Footer
