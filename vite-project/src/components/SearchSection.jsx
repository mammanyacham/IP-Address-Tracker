import arrowIcon from '/images/icon-arrow.svg';


export default function SearchSection({formData, handleSubmit, getFormData}) {

    return (
        <section className="search-section">
            <h1>IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for any IP address or domain" className="search-input" onChange={getFormData} value={formData}/>
                <button type="submit" className="search-btn">
                    <img src={arrowIcon} alt="Search"/>
                </button>
            </form>
        </section>
    )
}