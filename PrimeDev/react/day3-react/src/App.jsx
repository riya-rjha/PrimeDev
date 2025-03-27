import { useState } from "react";

const AppForm = () => {
  // const [monitor, remote] = useState("MOHAN");

  // let name = "RRJ";

  // console.log("Re render", monitor);

  // const handleChange = (e) => {
  //   console.log(e);
  //   e.target.style.backgroundColor = "pink";

  //   setTimeout(() => {
  //     console.log("Event: "  + e)
  //     remote((e.target.value).toUpperCase());
  //   }, 2000);

  //   // console.log(e.target.value);
  //   // name = e.target.value;
  //   // console.log(name);
  //   console.log("Updated: ", monitor);
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(true);

  const handleName = (e) => {
    setName(e.target.value);
    // console.log(name)
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email)
  };

  const handleSubmit = () => {
    setSubmit(false);
    // console.log("submit")
  };

  return (
    <>
      <style jsx>{`
        h1 {
          color: blue;
        }
        input {
          margin: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          margin: 5px;
          padding: 10px 20px;
          background-color: green;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: darkgreen;
        }
      `}</style>
      <h1>Page Creation</h1>
      {submit ? (
        <>
          Name: <input type="text" onChange={handleName} />
          Email: <input type="email" onChange={handleEmail} />
          Password: <input type="password" />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h1>Name: {name}</h1>
          <h2>Email: {email}</h2>
        </>
      )}
    </>
  );
};

export default AppForm;
