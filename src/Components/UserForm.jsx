import { useRef, useState } from "react";

export const UserForm = ({ getData }) => {
  const initial = {
    name: "",
    isMarried: "",
    age: "",
    addr: "",
    salary: "",
    department: "",
  };

  const [formData, setFormData] = useState(initial);
  const fileRef = useRef()
  const { name, age, addr, salary, department, isMarried } = formData;

  const [usersList, setUserList] = useState([]) 

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    console.log(fileRef.current.files[0]);
    value = type === "checkbox" ? checked : type === "file"  ? fileRef.current.files[0]: value;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...usersList,formData])
    // 
    getData(formData);
    console.log(formData);
  };
  return (
    <div className="userForm">
      <h2>UserForm</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={name} placeholder=" Enter your name" /><br />
        <input onChange={handleChange} type="number" name="age" value={age} placeholder=" Enter your age" /><br />
        <input onChange={handleChange} type="text" value={addr} name="addr" placeholder=" Enter your Address" /><br />
        <select onChange={handleChange} name="department" value={department}>
          <option> -- Department -- </option>
          <option> Development </option>
          <option> Testing </option>
          <option> Marketing </option>
        </select><br />
        <input onChange={handleChange} type="text" name="salary" value={salary} placeholder=" Enter your salary" /><br />
        <label for="marital"> Married 
        <input onChange={handleChange} type="checkbox" name="isMarried" checked={isMarried} id="marital" />
        </label> <br />
        <input ref={fileRef} onChange={handleChange} type="file" name="profile_photo"  /> 
        <br />
        <input  type="submit" value="Sumbit" />
      </form>
    </div>
  );
};

