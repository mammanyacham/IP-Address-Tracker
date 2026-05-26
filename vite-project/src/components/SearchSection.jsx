import arrowIcon from '/images/icon-arrow.svg';
import { useState } from 'react';

export default function SearchSection() {

    const [formData, setFormData] = useState("");

    function getFormData(e) {
        e.preventDefault();
        
    }

    return (
        <section className="search-section">
            <h1>IP Address Tracker</h1>
            <form>
                <input type="text" placeholder="Search for any IP address or domain" className="search-input"/>
                <button type="submit" className="search-btn">
                    <img src={arrowIcon} alt="Search"/>
                </button>
            </form>
        </section>
    )
}