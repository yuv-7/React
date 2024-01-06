const Contact = () =>{
    return (
        <div className="w-full h-screen flex">
            <div className="box1 w-1/2 h-full">
                <img src="Hammock.svg" alt=""></img>
            </div>
            <div className="box2 w-1/2 h-full flex flex-col justify-center items-center px-8 text-center">
                <h1 className="text-7xl mb-4 text-orange-500" style={{fontWeight:400,letterSpacing:"10px"}}>Contact Us</h1>
                    <p>Send us email at : XXXXXXXXXXXX@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;