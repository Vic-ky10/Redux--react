import React from 'react'
import { useState } from 'react'

function Contact() {
  const [user , setUser] = useState()
 
  const handleFunction = (){
    setUser(user)
  }
  return (
    <div>{user}</div>
  )
}

export default Contact