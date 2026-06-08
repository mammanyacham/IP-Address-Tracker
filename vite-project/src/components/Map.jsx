import{ MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from "leaflet";

const icon = L.icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [40, 50],
  iconAnchor: [23, 56],
});

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

            <Marker position={[lat, lng]} icon={icon}>
                <Popup>{ipData?.location?.city}, {ipData?.location?.region}</Popup>
            </Marker>
        </MapContainer>
    </div>
    );
}