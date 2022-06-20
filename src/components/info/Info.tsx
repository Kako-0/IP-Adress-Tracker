import axios from 'axios';
import { useEffect, useState } from 'react';
import { getIpInfo } from '../../ipify';
import './style.css';

function Info() {
    const [IPdata, SetIPData] = useState<[]>([]);

    async function getIp() {
        console.log("ue");
        const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOC_API_KEY}&ipAddress=8.8.8.8`);
        return response.data;

        //const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOC_API_KEY}&ipAddress=8.8.8.8`);
        //const data = await response.json();
        //console.log(data);
        //SetIPData(data)
    }

    useEffect(() => {
        const ip = getIpInfo('8.8.8.8', false);

        console.log(ip);

    }, []);

    //console.log(IPdata);
    return (
        <div className="infoContainer">
            <div id="ip">
                <span>
                    Ip Address
                </span>
                <p>
                    192.212.174.101
                </p>
            </div>
            <div id="localization">
                <span>Localization</span>
                <p>Brooklyn, NY <br /> 10001</p>
            </div>
            <div id="timezone">
                <span>Timezone</span>
                <p>UTC -05:00</p>
            </div>
            <div id="isp">
                <span>ISP</span>
                <p>SpaceX <br /> Starlink</p>
            </div>
        </div>
    );
}

export default Info;