// import { useState } from "react";


// const defaultvalue = {
//     name: "",
//     email: "",
//     password: "",
//   }
// function App() {
//   const [form, setForm] = useState(defaultvalue);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form Data:", form);

//     setForm(defaultvalue)
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Signup Form</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block mb-1 text-gray-600">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block mb-1 text-gray-600">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

const defaultValue = {
  name: "",
  fathername: "",
  gender: "",
  courses: [],
  email: "",
  dob: "",
  address: "",
};

function App() {
  const [form, setForm] = useState(defaultValue);
  const [students, setStudents] = useState([]);

  // Load saved students from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  // Save students to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => {
        let updatedCourses = prev.courses;
        if (checked) {
          updatedCourses = [...updatedCourses, value];
        } else {
          updatedCourses = updatedCourses.filter((c) => c !== value);
        }
        return { ...prev, courses: updatedCourses };
      });
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Add new student
    setStudents((prev) => [...prev, form]);

    // Reset form
    setForm(defaultValue);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Student Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block mb-1 text-gray-600">Father Name</label>
            <input
              type="text"
              name="fathername"
              value={form.fathername}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter father name"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-gray-600">Gender</label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={form.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <label className="block mb-1 text-gray-600">Courses</label>
            <div className="flex gap-4">
              {["Python", "CSS", "JavaScript"].map((c) => (
                <label key={c} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="courses"
                    value={c}
                    checked={form.courses.includes(c)}
                    onChange={handleChange}
                  />
                  {c}
                </label>
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-gray-600">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-gray-600">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Cards Section */}
      <div className="mt-8 w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow-md border"
          >
            <h3 className="text-lg font-bold text-gray-800">
              {student.name}
            </h3>
            <p className="text-gray-600">
              Courses: {student.courses.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
 


// {/* Cards Section */}
// <div className="mt-8 w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
//   {students.map((student, index) => (
//     <div
//       key={index}
//       className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
//     >
//       <h3 className="text-xl font-bold text-gray-800 mb-3">Student Details</h3>
//       <p className="text-gray-700">
//         <span className="font-semibold">Student Name:</span> {student.name}
//       </p>
//       <p className="text-gray-700">
//         <span className="font-semibold">Father Name:</span> {student.fathername}
//       </p>
//       <p className="text-gray-700">
//         <span className="font-semibold">Gender:</span> {student.gender}
//       </p>
//       <p className="text-gray-700">
//         <span className="font-semibold">Course(s):</span> {student.courses.join(", ")}
//       </p>
//       <p className="text-gray-700">
//         <span className="font-semibold">Email:</span> {student.email}
//       </p>
//       <p className="text-gray-700">
//         <span className="font-semibold">Date of Birth:</span> {student.dob}
//       </p>
//       <p className="text-gray-700">
//         <span className="font-semibold">Address:</span> {student.address}
//       </p>
//     </div>
//   ))}
// </div>

