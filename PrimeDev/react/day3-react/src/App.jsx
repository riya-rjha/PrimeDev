// import { useState } from "react";

// const AppForm = () => {
//   // const [monitor, remote] = useState("MOHAN");

//   // let name = "RRJ";

//   // console.log("Re render", monitor);

//   // const handleChange = (e) => {
//   //   console.log(e);
//   //   e.target.style.backgroundColor = "pink";

//   //   setTimeout(() => {
//   //     console.log("Event: "  + e)
//   //     remote((e.target.value).toUpperCase());
//   //   }, 2000);

//   //   // console.log(e.target.value);
//   //   // name = e.target.value;
//   //   // console.log(name);
//   //   console.log("Updated: ", monitor);
//   // };

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [submit, setSubmit] = useState(true);

//   const handleName = (e) => {
//     setName(e.target.value);
//     // console.log(name)
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     // console.log(email)
//   };

//   const handleSubmit = () => {
//     setSubmit(false);
//     // console.log("submit")
//   };

//   return (
//     <>
//       <style jsx>{`
//         h1 {
//           color: blue;
//         }
//         input {
//           margin: 5px;
//           padding: 10px;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//         }
//         button {
//           margin: 5px;
//           padding: 10px 20px;
//           background-color: green;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }
//         button:hover {
//           background-color: darkgreen;
//         }
//       `}</style>
//       <h1>Page Creation</h1>
//       {submit ? (
//         <>
//           Name: <input type="text" onChange={handleName} />
//           Email: <input type="email" onChange={handleEmail} />
//           Password: <input type="password" />
//           <button onClick={handleSubmit}>Submit</button>
//         </>
//       ) : (
//         <>
//           <h1>Name: {name}</h1>
//           <h2>Email: {email}</h2>
//         </>
//       )}
//     </>
//   );
// };

// export default AppForm;

import React, { useState, useEffect } from "react";

const AppPage = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [totPages, setTotPages] = useState(0);

  console.log("Before getData");

  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes?limit=10&skip=${10 * (currPage - 1)}`);
      const data = await response.json();
      console.log(data);
      setData(data.recipes);
      const totPages = Math.ceil(data.total / data.limit);
      setTotPages(totPages)
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Success");
    }
  };

  useEffect(() => {
    getData();
  }, [currPage]);

  // optional chaining
  // conditional rendering
  // nullish coalescing operator

  console.log("After getData");

  const pages = [];

  for (let i = 0; i < totPages; i++) {
    pages.push(i);
  }

  console.log(pages)

  return (
    // Plain JS Document Fragment
    <React.Fragment>
      <div className="container">

        <select onChange={(e) => {
          setCurrPage(e.target.value)
        }}>
          {pages.map((pageNumber) => {
            return <option>{pageNumber}</option>;
          })}
        </select>

        {data.map((el) => (
          <>
            <h1>{el.name}</h1>
            <img src={el.image} />
            {/* Pagination */}
            <h2>{el.cuisine}</h2>
          </>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AppPage;
