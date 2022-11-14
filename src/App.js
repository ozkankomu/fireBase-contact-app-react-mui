import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, updateUser } from "./utils/function";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const [isAdd, setIsAdd] = useState("ADD");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
    setIsAdd("ADD");
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setIsAdd("UPDATE");
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <FormComponent
          info={info}
          setInfo={setInfo}
          handleSubmit={handleSubmit}
          isAdd={isAdd}
        />
        <Contacts editUser={editUser} />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
