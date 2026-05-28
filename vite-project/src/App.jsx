import { useState, useEffect } from 'react';
import SearchSection from "./components/SearchSection";
import DisplayIpData from './components/DisplayIpData';
import '/index.css';



//api key: at_4cDTNTnQlxao4ho8mxw8nthEZtExp
export default function App() {

    const [formData, setFormData] = useState('');
    const [ipAddress, setIpAddress] = useState('')
    
    function getFormData(e) {
        const value = e.target.value
        setFormData(value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIpAddress(formData)

        console.log(ipAddress)
    }

    useEffect(() => {
           async function fetchData() {
                try{
                    const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_4cDTNTnQlxao4ho8mxw8nthEZtExp&ipAddress=${ipAddress}`);

                    const data = await response.json();

                     console.log(data)
                } catch(error) {
                    console.error('error loading data:', error)
                }

               
           } 

           fetchData();
    }, [ipAddress])

    return(
        <div className='container'>
            <SearchSection 
                getFormData={getFormData}
                handleSubmit={handleSubmit}
                formData={formData}
            />
            <DisplayIpData />       
        </div>
    )
}