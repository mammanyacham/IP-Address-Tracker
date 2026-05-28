export default function DisplayIpData({ ipData }) {

    return(
            <div className="ip-dashboard-container">
                <section className="ip-data-dashboard">
                    <div>
                        <p className="description">IP ADDRESS</p>
                        <p>{ipData.ip}</p>
                    </div>

                <div>
                    <p className="description">LOCATION</p>
                    <p>{ipData.location.region}, {ipData.location.country}</p>
                </div>

                <div>
                    <p className="description">TIMEZONE</p>
                    <p>{ipData.location.timezone}</p>
                </div>

                <div>
                    <p className="description">ISP</p>
                    <p>{ipData.isp}</p>
                </div>
            </section>
        </div>
    )
}