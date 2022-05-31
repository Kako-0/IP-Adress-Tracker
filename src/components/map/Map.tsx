import { MapContainer, TileLayer } from "react-leaflet";
import './index.css';

function Map() {
    const center = { lat: 51.721547, lng: -0.164687 };
    const zoom = 8;

    return (
        <MapContainer center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map;