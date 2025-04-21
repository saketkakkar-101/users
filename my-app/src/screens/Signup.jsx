import React from "react";
import { useState } from "react";

function Signup() {

    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        location:"",
    })

const handleSubmit = async(e) => {
e.preventDefault();

const data = fetch("http://localhost:5000/api/createUser" , {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    } ,
    body: JSON.stringify(credentials),
})

}

const handleClick = (e) => {
    setCredentials({...credentials , [e.target.name] : e.target.value})
}

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            value={credentials.name}
            onChange={handleClick}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Email"
            value={credentials.email}
            onChange={handleClick}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            // placeholder="Enter Password"
            name="password"
            value={credentials.password}
            onChange={handleClick}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Location</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Address"
            name="location"
            value={credentials.location}
            onChange={handleClick}
          />
        </div>
              

              
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
