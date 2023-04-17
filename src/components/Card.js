import {useState} from "react";


function Card({id, image, info, price, name, removeTour}){
    function readmoreHandler(){
        setreadmore(!readmore); 
    }

    const [readmore, setreadmore] = useState(false);
    const description = readmore ?info : `${info.substring(0,200)}....`;
    return (
        <div className="card">
            <img src={image} className="image" alt=""></img>

            <div className="tourInfo">
                <div className="tourinfo">
                    <h4 className="tourprice">₹ {price}</h4>
                    <h4 className="name">{name}</h4>
                
                </div>

                <div className="desc">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? 'Show Mess': 'Read More'}</span>
                </div>
            </div>
           

            <button className="interested-btn" onClick={()=> removeTour(id)}> Not Interested</button>
            
        </div>
    );
}

export default Card;