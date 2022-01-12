import React, {useState, useEffect} from "react";
import axios from "axios";
import Mapper from "./map";
import {Helmet} from "react-helmet";
import CountrySelect from "./details";
import Flag from "./flag";
import '../css/mycss.css';

//https://geo.ipify.org/api/v2/country,city?apiKey=at_4MA0p9XjkdAbMdLmYHsQEQiJjs2Wb&ipAddress=90.186.137.12 / https://api.ipify.org
//at_bgr0EbXgg0FK6ZKm0ilPSF0vSMcHq

export default function Chained(){

    const [ip, setIp] = useState(null);
    useEffect(async () => await axios.get(`https://api.ipify.org`)
    .then(response => {
        setIp(response.data);
        return response.data;
    })
    .then(ip => axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_bgr0EbXgg0FK6ZKm0ilPSF0vSMcHq&ipAddress=${ip}`))
    .then(response => {
        setIp(response.data.location);
    }), []);

    console.log(ip)

    let article

    

    if(ip){
        article = <><Helmet>
        
        <title>MY IP</title>
    </Helmet><div className="city">Your Server ist located at , {ip.country}</div><div >{WaitForIT()}</div></>
       //article = <><div>conntection failed</div></>id="mappi"
    }

    else{
        article = <><div>conntection failed</div></>
    }

    function WaitForIT(){
        while(!ip.lat){
            return <h2>Map is loading</h2>
           
        }

        return (<><CountrySelect className="Small" code={ip.country} city={ip.city}/><Mapper lang={ip.lng} lat={ip.lat} className="center"/></>)
    
    }

    

    return article;
    
    }

    //>{ip.location.country}, {ip.location.city}{ip.country}, <div></div><Timezone code={ip.country}/>