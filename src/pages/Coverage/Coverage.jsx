// src/pages/Coverage.jsx
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const locations = [
   { id: 1, name: "Bagerhat", lat: 22.6602, lng: 89.7856 },
  { id: 2, name: "Bandarban", lat: 22.1953, lng: 92.2184 },
  { id: 3, name: "Barguna", lat: 22.0953, lng: 90.1121 },
  { id: 4, name: "Barisal", lat: 22.701, lng: 90.3535 },
  { id: 5, name: "Bhola", lat: 22.6859, lng: 90.6482 },
  { id: 6, name: "Bogra", lat: 24.8465, lng: 89.3776 },
  { id: 7, name: "Brahmanbaria", lat: 23.9571, lng: 91.111 },
  { id: 8, name: "Chandpur", lat: 23.2333, lng: 90.6667 },
  { id: 9, name: "Chattogram", lat: 22.3569, lng: 91.7832 },
  { id: 10, name: "Chuadanga", lat: 23.6402, lng: 88.8418 },
  { id: 11, name: "Comilla", lat: 23.4607, lng: 91.1809 },
  { id: 12, name: "Cox's Bazar", lat: 21.4272, lng: 92.0058 },
  { id: 13, name: "Dhaka", lat: 23.8103, lng: 90.4125 },
  { id: 14, name: "Dinajpur", lat: 25.6217, lng: 88.6353 },
  { id: 15, name: "Faridpur", lat: 23.607, lng: 89.8429 },
  { id: 16, name: "Feni", lat: 23.0235, lng: 91.3843 },
  { id: 17, name: "Gaibandha", lat: 25.3286, lng: 89.5283 },
  { id: 18, name: "Gazipur", lat: 24.0023, lng: 90.4266 },
  { id: 19, name: "Gopalganj", lat: 23.005, lng: 89.8266 },
  { id: 20, name: "Habiganj", lat: 24.3756, lng: 91.4155 },
  { id: 21, name: "Jamalpur", lat: 24.9375, lng: 89.9372 },
  { id: 22, name: "Jessore", lat: 23.1667, lng: 89.2167 },
  { id: 23, name: "Jhalokathi", lat: 22.6411, lng: 90.1985 },
  { id: 24, name: "Jhenaidah", lat: 23.5441, lng: 89.1531 },
  { id: 25, name: "Joypurhat", lat: 25.094, lng: 89.0247 },
  { id: 26, name: "Khagrachhari", lat: 23.1193, lng: 91.9847 },
  { id: 27, name: "Khulna", lat: 22.8456, lng: 89.5403 },
  { id: 28, name: "Kishoreganj", lat: 24.4449, lng: 90.7766 },
  { id: 29, name: "Kurigram", lat: 25.8054, lng: 89.6362 },
  { id: 30, name: "Kushtia", lat: 23.9013, lng: 89.1208 },
  { id: 31, name: "Lakshmipur", lat: 22.9445, lng: 90.8412 },
  { id: 32, name: "Lalmonirhat", lat: 25.9923, lng: 89.2847 },
  { id: 33, name: "Madaripur", lat: 23.1756, lng: 90.2115 },
  { id: 34, name: "Magura", lat: 23.4873, lng: 89.4195 },
  { id: 35, name: "Manikganj", lat: 23.8615, lng: 90.0003 },
  { id: 36, name: "Meherpur", lat: 23.7622, lng: 88.6318 },
  { id: 37, name: "Moulvibazar", lat: 24.4829, lng: 91.7774 },
  { id: 38, name: "Munshiganj", lat: 23.5422, lng: 90.5305 },
  { id: 39, name: "Mymensingh", lat: 24.7471, lng: 90.4203 },
  { id: 40, name: "Naogaon", lat: 24.7936, lng: 88.9318 },
  { id: 41, name: "Narail", lat: 23.1167, lng: 89.5 },
  { id: 42, name: "Narayanganj", lat: 23.6238, lng: 90.5 },
  { id: 43, name: "Narsingdi", lat: 23.9195, lng: 90.7176 },
  { id: 44, name: "Natore", lat: 24.412, lng: 88.9935 },
  { id: 45, name: "Netrokona", lat: 24.8709, lng: 90.7279 },
  { id: 46, name: "Nilphamari", lat: 25.931, lng: 88.856 },
  { id: 47, name: "Noakhali", lat: 22.8242, lng: 91.11 },
  { id: 48, name: "Pabna", lat: 24, lng: 89.2333 },
  { id: 49, name: "Panchagarh", lat: 26.3411, lng: 88.5542 },
  { id: 50, name: "Patuakhali", lat: 22.3596, lng: 90.3296 },
  { id: 51, name: "Pirojpur", lat: 22.5797, lng: 89.9787 },
  { id: 52, name: "Rajbari", lat: 23.7573, lng: 89.6446 },
  { id: 53, name: "Rajshahi", lat: 24.3745, lng: 88.6042 },
  { id: 54, name: "Rangamati", lat: 22.7324, lng: 92.2985 },
  { id: 55, name: "Rangpur", lat: 25.746, lng: 89.25 },
  { id: 56, name: "Satkhira", lat: 22.7085, lng: 89.0715 },
  { id: 57, name: "Shariatpur", lat: 23.22, lng: 90.35 },
  { id: 58, name: "Sherpur", lat: 25.0206, lng: 90.0153 },
  { id: 59, name: "Sirajganj", lat: 24.45, lng: 89.7 },
  { id: 60, name: "Sunamganj", lat: 25.0658, lng: 91.395 },
  { id: 61, name: "Sylhet", lat: 24.8949, lng: 91.8687 },
  { id: 62, name: "Tangail", lat: 24.2513, lng: 89.9167 },
  { id: 63, name: "Thakurgaon", lat: 26.0415, lng: 88.4283 },
  { id: 64, name: "Madaripur", lat: 23.1707, lng: 90.2091 },
];

const ZoomToLocation = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 10, {
        duration: 1.5,
      });
    }
  }, [lat, lng, map]);

  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filtered = search
    ? locations.filter((location) =>
        location.name.toLowerCase().includes(search.toLowerCase())
      )
    : locations;

  useEffect(() => {
    if (filtered.length === 1) {
      setSelectedLocation(filtered[0]);
    } else {
      setSelectedLocation(null);
    }
  }, [search, filtered]);

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-center px-2 sm:px-0">
        Our Delivery Coverage Area
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search district..."
        className="w-full max-w-sm px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Map container responsive wrapper */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "70vh", // 70% of viewport height for decent size on all devices
            minHeight: "400px",
            maxHeight: "700px",
          }}
          // alternative height strategy:
          // you can use media queries with Tailwind or inline styles for smaller devices
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {selectedLocation && (
            <ZoomToLocation lat={selectedLocation.lat} lng={selectedLocation.lng} />
          )}

          {filtered.map((location) => (
            <Marker key={location.id} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
              <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                {location.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
