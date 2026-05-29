export default function DisplayIpData({ ipData }) {

    const ipDataArray = [
        {
            title: 'IP ADDRESS',
            value: ipData?.ip
        },
         {
            title: 'LOCATION',
            value: `${ipData?.location?.region}, ${ipData?.location?.country}`
        },
         {
            title: 'TIMEZONE',
            value: ipData?.location?.timezone
        },
         {
            title: 'ISP',
            value: ipData?.isp
        }
     ];

     const ipDataElements = ipDataArray.map((item, index) => (
        <div key={index}>
            <p className="description">{item.title}</p>
            <p className="value">{!ipData ? 'Loading...' : item.value}</p>
        </div>
     )) 

    return(
        <div className="ip-dashboard-container">
            <section className="ip-data-dashboard">
                {ipDataElements}
            </section>
        </div>
    )
}