import React from "react";
import img from "../img/milky-way.jpg";

function Header() {
    return (
        <header
            className="bg-cover bg-center h-screen pb-32 text-white bg-black"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="h-32 px-64 flex justify-between items-center">
                <h3>Something</h3>
                <h3>Something</h3>
            </div>

            <div className="inline-block w-1/2 ml-64 mt-32">
                <h1 className="text-7xl font-semibold leading-none my-10">
                    Welcome to Space digest.
                </h1>
                <h3 className="text-2xl font-light leading-snug mb-8">
                    A magnificent window to the universe. Discover images,{" "}
                    <br />
                    news and facts about the galaxy and beyond.
                </h3>
                <p className="text-base">Powered by Nasa API</p>
            </div>
        </header>
    );
}

export default Header;
