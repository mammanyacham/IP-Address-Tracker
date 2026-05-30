import{ MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function Map() {
    return (
    <div className='map'>
        <MapContainer 
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
        >

            <TileLayer
                attribution= '&copy; OpenStreetMap contibutors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={[51.505, -0.09]}>
                <Popup>You are here!</Popup>
            </Marker>
        </MapContainer>
    </div>
    );
}