import "./App.css";
import { UserForm } from "./Components/UserForm";
import { Table } from "./Components/Table";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const getData = (data) => {
    setUserList([...userList, data]);
    console.log(userList);
  };

  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="App">
        {" "}
        <h1>...loading </h1>{" "}
      </div>
    );
  }

  const handleData = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <UserForm getData={getData} />
      <Table userList={userList} />
    </div>
  );
}

export default App;

//I joined Masai To become a Full-stack Web developer and after joining Masai every month we have evaluations. Every month we have a construction week, I upgrade myself in this journey a lot. I did some projects also and now I want to see how things work in a company. I want to work with some real projects or real world companies where I can explore myself and showcase my skills.
