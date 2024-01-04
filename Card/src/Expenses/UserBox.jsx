import { useState } from "react";
import "./UserBox.css";
import UserCard from "./UserCard";

const dummy_Details = [
  {
    id: 1,
    userName: "Gaurav",
    purchaseItem: "book",
    itemPrice: "220"
  },
  {
    id: 2,
    userName: "Souvik",
    purchaseItem: "Camera",
    itemPrice: "500"
  },
  {
    id: 3,
    userName: "Arijit",
    purchaseItem: "Manga",
    itemPrice: "100"
  }
]



const UserBox = (props) => {

  const [userAllDetails, setUserAllDetails] = useState(dummy_Details);

  if (props.newUserDetails.hasOwnProperty("id")) {
    
    const ob = [props.newUserDetails,...userAllDetails]
    console.log(ob);
    setUserAllDetails(ob);
    // console.log(dummy_Details);
  }
  return (
    <div className="user-box">
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
  );

}

export default UserBox;