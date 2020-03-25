import React from "react";
import illustration from '../imgs/undraw_hacker.svg';
import Form from './contact.form';

export default() => (
    <header className="bg-green-300">
        <div className="container mx-auto p-12 max-w-4xl">

            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-green-800 text-6xl">¡Hola! Soy Marcelo</h1>
                    <p className="text-xl font-light">Creo aplicaciones web y enseño programación</p>
                </div>
                <img src={illustration} alt="programador" style={{height: "300px"}}></img>
            </div>

            <div>
                <Form />
            </div>
        </div>
        
    </header>
)