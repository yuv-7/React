# props

# props is a object.

# props amra use kori-> Jokhon kono component er modhhe amra value pass kori. Amra react a anek component create kori and sei component ke main.jsx file a import kori. Tai jokhon kono value amra pass korte chai component a tokhon sei component er sathe amra value pass kori.

# syntax ::->
# dhora jak amader kache 'App'namer component ache and sekhane amra userName pass korte chai tahole 
    syntax is::-> 
        <App userName="Gaurav">

# jodi amra ekhane value 'array' or 'object' pathate chai tahole amader correct way hobe =>
    example ->
    let arr = [1,2,3];
    <App userName="Gaurav" userAge={arr}>

# component definer somoy je function thakbe sekhane amader 'props' parameter dhorte hobe.

# **It is compulsary je amader 'props' parameter e dhorte hobe.

# Example::=>
    export default function App(props){

  return (
    <>
      <h1>Heyy Props I am {props.userName}</h1>
    </>
  );
}

# Destructure example ::=>

    export default function App({userName}){

# destructure er rule a amra jani je amader bar bar object.(dot) likhe property or method ke call korte hoy na. Tai ekhane amra destructure use korlam.

# jodi ekhane eker besi destructure use korte hoy tahole amader coma use korte hobe.

# Example ::=> {userName,userEmail,userAge} -> Thats how we can perform more than one destructure.
 
  return (
    <>
      <h1>Heyy Props I am {userName}</h1>
    </>
  );
}