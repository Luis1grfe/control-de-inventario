import React, { useContext } from "react";
import { Context } from "../store/appContext"
import Card from "../components/Card";
import Jumbo from "../components/Jumbo";


const Home = () => {
    const { store, actions } = useContext(Context)
        return (
        <>
            
            <div className="container">
                <div className="row py-4">
                   <Jumbo/>
                   <Card/>
                   
                </div>
            </div>
        </>
    )
}
export default Home;
