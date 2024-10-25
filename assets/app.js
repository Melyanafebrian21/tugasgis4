//===================== Layer Group ==============masji
const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const sekolahCluster = new L.markerClusterGroup();
const masjidCluster = new L.markerClusterGroup();
const tokoCluster = new L.markerClusterGroup();
const puskesmasCluster = L.markerClusterGroup();

//===================================================

//====================== icon ====================

const iconSekolah = L.icon({
    iconUrl: 'assets/leaflet/images/school.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'assets/leaflet/images/mosquee.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'assets/leaflet/images/tile-shop.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'assets/leaflet/images/puskesmass.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});


//==================== marker =========================
var masjid = [
    L.marker([-8.676139087406256, 116.33414268395897], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="assets/leaflet/images/masjid.jpg">`),
    L.marker([-8.671404992831478, 116.33858381872312], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="assets/leaflet/images/msdarmaji.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.67735746481326, 116.33395099029171], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="assets/leaflet/images/SMP2.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.670505229154443, 116.33764281061309], { icon: iconpuskesmas }).addTo(puskesmasCluster).bindPopup(` <img src="assets/leaflet/images/puskesmas.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var toko = [
    L.marker([-8.675241939232192, 116.33480533205892], { icon: iconToko }).addTo(tokoCluster).bindPopup(` <img src="assets/leaflet/images/mcolection.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var streets  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',   
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

const map = L.map('map', {
    center: [-8.634173884984019, 116.24921668372933],
    zoom: 13,
    layers: [satelit, sekolahCluster, masjidCluster, tokoCluster]
});
//========================================================================

//==================== Cluster ===========================================
map.addLayer(sekolahCluster);
map.addLayer(masjidCluster);
map.addLayer(tokoCluster);
map.addLayer(puskesmasCluster);
//======================================================================



const baseLayers = {
    'streets': streets,
    'satelit': satelit,
};

const overlays = {
    'Sekolah': sekolahCluster,
    'Masjid': masjidCluster,
    'Toko': tokoCluster,
    'puskesmas': puskesmasCluster,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);


//  menampilkan geojSON
L.geoJSON(gis).addTo(map);