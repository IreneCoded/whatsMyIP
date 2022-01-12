import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Connection(){


   


        const client = axios.create({
           baseURL:" https://api.ipify.org"});
      
       const [apical, setApical] = useState(null);
       useEffect(() => {
           async function getData() {
              const response = await client.get();
              setApical(response.data);
           }
           getData();
       }, []);
       
       console.log(apical)
       
     //https://geo.ipify.org/api/v2/country,city?apiKey=at_4MA0p9XjkdAbMdLmYHsQEQiJjs2Wb&ipAddress=90.186.137.12 / https://api.ipify.org

     const ipadd = apical
        

       function ShowCity(elem){
        const client = axios.create({
            baseURL:  `https://geo.ipify.org/api/v2/country,city?apiKey=at_4MA0p9XjkdAbMdLmYHsQEQiJjs2Wb&ipAddress=${ipadd}`  });
       
        const [apical, setApical] = useState(null);
        useEffect(() => {
            async function getData() {
               const response = await client.get();
               setApical(response.data);
            }
            getData();
        }, []);

        console.log( `https://geo.ipify.org/api/v2/country,city?apiKey=at_bgr0EbXgg0FK6ZKm0ilPSF0vSMcHq&ipAddress=${ipadd}` )

        //return apical.location.city


       }
      
     

     return (<><h1>Who are you ...</h1><div className="firstIP
     ">Your ip is: {ipadd}</div></>)



}
