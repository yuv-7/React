const About = () =>{
    return (
        <div className="w-full h-screen flex">
            <div className="box1 w-1/2 h-full">
                <img src="Hammock.svg" alt=""></img>
            </div>
            <div className="box2 w-1/2 h-full flex flex-col justify-center items-center px-8 text-center">
                <h1 className="text-7xl mb-4 text-orange-500" style={{fontWeight:400,letterSpacing:"10px"}}>About Pagge</h1>
                <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem
                provident commodi nisi aliquam magni aspernatur saepe impedit reprehenderit iusto</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem
                provident commodi nisi aliquam magni aspernatur saepe impedit reprehenderit iustoLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem
                provident commodi nisi aliquam magni aspernatur saepe impedit reprehenderit iusto</p>
            </div>
        </div>
    );
}

export default About;