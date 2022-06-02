import { MapContainer, TileLayer } from "react-leaflet";
import './index.css';

function Map() {
    const center = { lat: -2.5606303, lng: -44.3281631 };
    const zoom = 12;

    return (
        <MapContainer
            center={center} zoom={zoom}
            dragging={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            attributionControl={false}
            zoomControl={false}>
            <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map;