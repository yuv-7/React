# hooks in react


Q>amra hooks use kori kano??

ans: 
    amra react a multiple jaigai variable er value change korte hooks use kori.
    ete amader ekta boro advantage dei . Amra ekta click a anek jaigair variable eke bare change korte pari.

Q>How to use hooks??

ans:
    amder 'useState' import korte hoy 'react' folder theke.
    syntax:
        import {useState} from 'react';

Q>How to use in hooks in code??

ans:
    fucntion fucntionName(){

        let [variable,controlFunction] = useState(value);

        return(
            //Html code
        );
    }

Q>Lets discuss hooks syntax

ans:
    let [variable,controlFunction] = useState(value);

    ->Ekhane variable mane amara je variable er value ke bar bar change korbo.
    ->controlFunction holo jar madhome amra variable er value ke change korbo.
    ->useState(value) : ekhane value bolte amara variable a koto value first a hold korbo.
    ->value,controlFunction : je kono name hote pare.

Q>Example of hooks

example:
            <!-- import useState so that we can use hook -->
            import { useState } from "react";
            function App() {
            // let value = 5
            <!-- hook -->
            // first value ekhane 5.
            // amra ekhane setValue er sahaje value(variable) er value change korchi.
            // ei puro react code e value(variable) jekhane jekhane use kora hoyeche sekhane sekhane value change hobe

            let [value, setValue] = useState(5); 

            const increseValue = () => {

                if (value < 20) {
                setValue(value + 1);
                }
            }

            const decreseValue = () => {

                switch (value) {
                case 0:
                    break;
                default:
                    setValue(value - 1);
                    break;
                }
                
            }

            return (
                <div>
                <span>totla value {value}</span>

                <h1>Counter World</h1>
                <h4>Counter : {value} </h4>

                <button onClick={
                    increseValue
                }>Increse value</button>
                <br />
                <br />
                <button onClick={
                    decreseValue
                }>Decrese value</button>

                </div>
            )
            }

            export default App





