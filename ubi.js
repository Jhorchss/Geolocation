// Inicializar el mapa con un centro y un zoom predeterminado
        let map = L.map('map').setView([51.505, -0.09], 2); // Esto muestra un centro por defecto

        // Cargar la capa de mapa de OpenStreetMap (o la que prefieras)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Función para obtener la ubicación del usuario
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;

                // Centrar el mapa en la ubicación actual del usuario
                map.setView([lat, lon], 13); // Ajustamos el zoom

                // Crear un marcador en la ubicación del usuario
                L.marker([lat, lon]).addTo(map)
                    .bindPopup("Tu ubicación actual")
                    .openPopup();
            }, function() {
                alert("No se pudo obtener la ubicación.");
            });
        } else {
            alert("La geolocalización no está soportada en este navegador.");
        }