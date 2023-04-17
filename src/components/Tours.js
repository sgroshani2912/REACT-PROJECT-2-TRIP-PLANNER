import React from 'react';
import Card from "./Card";

function Tours({tours, removeTour}){

    return (
        <div className='container'>
            <h2 className='title'>PLAN WITH ROSHANI</h2>
            <div className='Cards'>
                {   
                    //Whenerve using a map function with a component always pass a key
                    tours.map((tour)=>{
                        return <Card key={tour}{...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;