import{ MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function Map({ ipData }) {

    const lat = ipData?.location?.lat;
    const lng = ipData?.location?.lng;


    if(!lat || !lng) return <p className='map-loading'>Map Loading...</p>

    console.log(lat, lng)

    return (
    <div className='map'>
        <MapContainer 
            center={[lat, lng]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
        >

            <TileLayer
                attribution= '&copy; OpenStreetMap contibutors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={[lat, lng]}>
                <Popup>You are here!</Popup>
            </Marker>
        </MapContainer>
    </div>
    );
}