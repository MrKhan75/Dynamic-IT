import axios from "axios";
import { useEffect, useState } from "react";
import Phone from "./Phone";



const NewData = () => {

    const [phones, setPhones] = useState([]);
 

    useEffect(() => {
        axios(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        .then(data => setPhones(data.data.data));


    }, [])


    
    return (
        <div className="my-20">
            <div>
            <h2 className="text-center text-2xl font-semibold pb-2">Our New Products</h2>
            <p className="text-center text-base text-gray-500 px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda dolore iste quisquam nam <br />aliquid? Aspernatur ex impedit debitis vero.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        phones.map(phone => <Phone product = {phone}></Phone>)
                    }
                </div>
            </div>


       

        </div>
    );
};

export default NewData;