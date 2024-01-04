import { useState } from "react";
import UserBox from "./Expenses/UserBox.jsx";
import UserForm from "./DetailsForm/UserForm.jsx";

const App = () => {

  const [newDetails, setNewDetails] = useState('');

  const getNewUserDetails = (newUserDetails) => {
    setNewDetails(newUserDetails);
  }

  return (
    <>
      <UserForm sendToGetData={getNewUserDetails} />
      

        <UserBox newUserDetails={newDetails} />
      

    </>
  );

}

export default App
