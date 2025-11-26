import React, {    useState } from "react";

function Home() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    Email: "",
    contact: "",
  });

  
   const handleChange = (e) => {
    const {name , value} = e.target 
    setUser((currentInput)=> {
         return {
            ...currentInput, [name] : value, 
         }
    })
    console.log(user)
  };
  
  

  return (
    <div>
      <form action="post">
        <label htmlFor="name">Name</label> <br />
        <input
        name="name"
          type="text"
          id="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age</label> <br />
        <input
        name="age"
          type="number"
          id="age"
          value={user.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="Email">Email</label> <br />
        <input
        name="Email"
          type="Email"
          id="Email"
          value={user.Email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="no" typeof="text">
          
          Contact
        </label>
        <br />
        <input
        name="contact"
          type="number"
          id="no"
          value={user.contact}
          onChange={handleChange}
        />
        <br />
      </form>
    </div>
  );
}

export default Home;
