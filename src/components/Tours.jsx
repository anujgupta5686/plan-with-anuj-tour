import React from "react";
import Card from "./Card";

const Tours = ({tours,removeTour}) => {
    return (
        <>
            <div className="container">
                <div>
                    <h2 className="title">😊Tour Plan With Anuj Kumar Gupta😊</h2>
                </div>
                <div className="cards">
                    {
                        tours?.map((tour)=>{
                           return(
                            <Card {...tour} removeTour={removeTour}></Card>
                           )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Tours;
