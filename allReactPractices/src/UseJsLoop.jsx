const UseJsLoop = () => {
    const app = ['apple', 'redmi', 'onePlus', 'moto'];

    return (
        // amra jodi kono div or jekono tag er modhhe javascript likhi tahole kono error show korbe na.
        // kintu div or tag er baire js likhte chai tahole error show korbe.

        // // correct syntax
        // <>
        //     {
        //         app.map((item)=>{
        //             console.log(item);
        //         })
        //     }
        // </>

        // // correct syntax
        // <div>
        //     {
        //         app.map((item) => {
        //             console.log(item);
        //         })
        //     }
        // </div>

        // also currect syntax
        <p>
            {
                app.map((item) => {
                    console.log(item);
                })
            }
        </p>


    );


}

export default UseJsLoop;