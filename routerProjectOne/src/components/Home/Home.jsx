const Home = () => {
    return (
        <div className="w-full h-screen flex">
          {/* <h1 class="text-5xl p-5 ">Hero apparment</h1>  */}
            <div className="box1 w-1/2 h-full">
                <img src="Hammock.svg" alt=""></img>
            </div>
            <div className="box2 w-1/2 h-full flex flex-col justify-center items-center px-8 text-center">
                <h1 className="text-5xl mb-4">Hey Pulaos</h1>
                <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem
                    provident commodi nisi aliquam magni aspernatur saepe impedit reprehenderit iusto.</p>
            </div>
        </div>
    );
}

export default Home;