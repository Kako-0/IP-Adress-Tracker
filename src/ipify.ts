import axios from "axios";

export const getIpInfo = async (ipOrDomain:String, isDomain:boolean) => {
    const urlAPI = 'https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOC_API_KEY}';
    let requestUrl = '';

    isDomain ?
        requestUrl = `${urlAPI}&domain=${ipOrDomain}`
    :
        requestUrl = `${urlAPI}&ipAddress=${ipOrDomain}`
    
  
    const response = await axios.get(`${requestUrl}`);
    
    const { ip, location, isp } = response.data;
        return {
          ipAddr: ip,
          location: location.city,
          timezone: location.timezone,
          isp: isp,
          lat: location.lat,
          lng: location.lng,
        };


  };
  