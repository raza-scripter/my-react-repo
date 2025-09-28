// import { useState } from "react"

// function App() {
//   const text =[input,text]=useState("");
//   function list() {
    
//     alert("input" + input);
    
//   }
//   return (
//     <>
//     <div>
//       <h1>Hello React 🚀</h1>
//       <p>My first React project</p>
//     </div>

//     <input type="text" onChange={(e)=> text(e.target.value)}/>
//     <button onClick={list}>Today task</button>
//    </>
//   )
// }

// export default App;
// import { useState } from "react";

// function App() {
//   const [form, formData] = useState({
// name:"",
// email:"",
// password:"",
// }); 

// function handleChange(e) {
//     const { name, value } = e.target;
//     formData((prev) => ({
//       ...prev,          
//       [name]: value,    
//     }));
//   }

//   function handleSubmit() {
//     alert(`Name: ${form.name}\nEmail: ${form.email}\nPassword: ${form.password}`);
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Multiple Input Example
//         </h1>

//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <button
//             onClick={handleSubmit}
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



  

 
// import { useState } from "react";

// function App() {
//   // ✅ simple state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // ✅ handle input change
//   function handleChange(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   // ✅ handle submit
//   function handleSubmit() {
//     alert(
//       `Name: ${form.name}\nEmail: ${form.email}\nPassword: ${form.password}`
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div classNa me="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Multiple Input Example
//         </h1>

//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <button
//             onClick={handleSubmit}
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

// ✅ Reusable Input Component
function InputField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={`Enter ${label}`}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

// ✅ Reusable Checkbox Component
function CheckBox({ label, name, checked, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
}

function App() {
  // ✅ state for form
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    google: false,
    phone: false,
  });

  // ✅ handle input change
  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // ✅ handle submit
  function handleSubmit() {
    alert(`
      Name: ${form.name}
      Email: ${form.email}
      Password: ${form.password}
      Login with Google: ${form.google}
      Login with Phone Number: ${form.phone}
    `);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Multiple Input + Checkboxes
        </h1>

        <div className="space-y-4">
          {/* ✅ Inputs */}
          <InputField
            label="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          {/* ✅ Checkboxes */}
          <CheckBox
            label="Login with Google"
            name="google"
            checked={form.google}
            onChange={handleChange}
          />

          <CheckBox
            label="Login with Phone Number"
            name="phone"
            checked={form.phone}
            onChange={handleChange}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit


          </button>

          
        </div>
      </div>
    </div>
  );
}

export function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="orange" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}


export function Gender() {
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    console.log("Selected Gender:", gender); 
  };

  return (
    <div>
      <h2>Select Gender</h2>
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={(e) => setGender(e.target.value)}
      /> Male
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;


