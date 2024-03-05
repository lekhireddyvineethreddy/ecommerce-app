import React from "react";
import Headerbaner from "../Bannersection/Headerbanner";
import Homefooter from "./Homefooter";
import "./HomePage.css";
import { Tours } from "../Data/Tour";

const HomePage = () => {
    return (
        <div>
            <Headerbaner />
            <div className="Banner"> 
            <button className="Generics">Get Your Latest Album</button>
            <button className="play-btn">►</button>
            </div>

            <section  className="container">
                <h2>TOURS</h2>
                <div>
                    <div className="tour-item">
                    {Tours.map((data) => (

                       <tbody key={data.date}>

                        <tr >
                           <td>{data.date}</td>
                           <td>{data.Place}</td>
                           <td>{data.city}</td>
                           <td><button className="Buy-btn">Buy Tickets</button></td>
                          </tr>
                        </tbody>

                    ))
                }
                    </div>
                </div>
            </section>
            <div>
                <Homefooter />
            </div>
        </div>
    );
};

export default HomePage;
