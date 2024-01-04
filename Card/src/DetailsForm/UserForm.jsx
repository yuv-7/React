import { useState } from "react";
import "./UserForm.css";

const UserForm = ( props ) => {
    // console.log(props);

    const [userName,setUserName] = useState("");
    const [itemName,setItemName] = useState("");
    const [itemPrice,setItemPrice] = useState("");

    const submitForm = (event) =>{
        event.preventDefault();

        const newUser = {
            id:Math.floor((Math.random()*100)+1),
            userName:userName,
            purchaseItem:itemName,
            itemPrice:itemPrice
        }

        props.sendToGetData(newUser);
        // console.log(newUser);

        setUserName('');
        setItemName('');
        setItemPrice('');
    }

    const enterUserName = (event) =>{
        setUserName(event.target.value);
    }

    const enterItemName = (evevt) =>{
        setItemName(evevt.target.value);
    }


    const enterItemPrice = (evevt) =>{
        setItemPrice(evevt.target.value);
    }

    return (
        <div className="form-box">
            <form onSubmit={submitForm}>
                <div className="input-box">
                    <input type="text" placeholder="enter user name" value={userName} onChange={enterUserName}></input>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="enter item name" value={itemName} onChange={enterItemName}></input>
                </div> 
                <div className="input-box">
                    <input type="number" placeholder="enter item price" value={itemPrice} min={10} onChange={enterItemPrice}></input>
                </div> 
                {/* <div className="input-box">
                    <input type="date" ></input>
                </div> */}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;