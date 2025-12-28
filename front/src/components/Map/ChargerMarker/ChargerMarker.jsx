import { useEffect } from "react";
import "./ChargerMarker.css";

export default function ChargerMarker({ place, map, userLocation, activePlaceId }) {
  useEffect(() => {
    if (!map || !place || !place.geometry?.location || !userLocation) return;

    const markerElement = document.createElement("div");
    markerElement.className = "charger-marker";
    markerElement.style.width = "40px";
    markerElement.style.height = "40px";

    const icon = document.createElement("img");
    icon.src = place.image;
    icon.style.width = "100%";
    icon.style.height = "100%";
    icon.style.objectFit = "contain";
    icon.style.pointerEvents = "none";

    markerElement.appendChild(icon);

    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position: place.geometry.location,
      title: place.name || "Carregador",
      content: markerElement
    });


    const infoWindow = new window.google.maps.InfoWindow();


    const distance =
      window.google.maps.geometry.spherical.computeDistanceBetween(
        place.geometry.location,
        new window.google.maps.LatLng(userLocation.lat, userLocation.lng)
      );



    const content = `
      <div class="chargermarker__infowindow">
        <h3 class="infowindow__title">${place.name || "Estação de carga"}</h3>
        <p class="infowindow__distance">Distância: ${(distance / 1000).toFixed(2)} km</p>
        <p class="infowindow__address">Endereço: ${place.formatted_address || "N/A"}</p>
      </div>
    `;

    marker.addListener("click", () => {
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });


    if (activePlaceId === place.place_id) {
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
      map.panTo(place.geometry.location);
    }

    return () => marker.setMap(null);
  }, [map, place, userLocation, activePlaceId]);

  return null;
}