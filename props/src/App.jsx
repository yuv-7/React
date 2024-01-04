// import { useState } from "react";
export default function App(props){

  // We can also use props in hooks
  // let [name, setUserName] = useState(userName);

  return (
    <>
      <h1>Heyy Props I am {props.userName}</h1>
    </>
  );
}