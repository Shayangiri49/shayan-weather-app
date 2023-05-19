import './App.css';
import SearchField from "react-search-field";
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toasty from './components/Toasty';

function App() {
  const [city,setCity] = useState('Kolkata');
  const [temp,setTemp] = useState(0);
  const [Humidity,setHumidity] = useState(0);
  const [search,setSearch] = useState('');
  const [pressure,setPressure] = useState(0);
  const [wind,setWind] = useState(0);
  const [query] = useState({q: ""})


  useEffect(()=>{
    
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b20835142b580a2f308f935ba1a2257f`).then((res)=>{

    const message = query.q ? query.q : "current location";
    toast.info("Fetching weather for" + message);

    toast.success(
      `Successfully fetches weather for ${search}`
    )
      

    
        setTemp(res.data.main.temp);
        setPressure(res.data.main.pressure);
        setHumidity(res.data.main.humidity);
        setWind(res.data.wind.speed);
        setCity(res.data.name);

    })
  },[query.q, search]);





  return (
    <>
    <Toasty/>
   <div className='weather-box'>
     
    <div className='weather-header'>
      <h1>Weather App</h1>
    </div>
    <div className='weather-search'>
    <SearchField
  placeholder="Search..."
  onSearchClick={(value)=>{
    setSearch(value);
  }}
  searchText={search}
  classNames="weather-input"
/>
    </div>
    <div className='weather-cloud'>
    <FeatherIcon icon="cloud-rain"color="white" size="60"/>

    <div className='weather-city'>
      <h1>{city}</h1>
    </div>
    </div>

    <div className='weather-row'>
      <div className='weather-column'>
      <FeatherIcon icon="sun"color="white" />
         <p>Temp: {(temp - 273.15).toFixed(2)} °C</p>
      </div>
      <div className='weather-column'>
      <FeatherIcon icon="command"color="white" />
      <p>Pressure: {pressure}</p>
      </div>
    </div>
    <div className='weather-row'>
      <div className='weather-column'>
      <FeatherIcon icon="cloud"color="white" />
         <p>Humidity: {Humidity}</p>
      </div>
      <div className='weather-column'>
      <FeatherIcon icon="wind"color="white" />
      <p>Wind: {wind}</p>
      </div>
    </div>
   
  
    
   </div>
   </>
   
  );
}

export default App;
