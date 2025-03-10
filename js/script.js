
// Fonction appelée lors du click du bouton
function start(city) {
    console.log("City input : ", city)

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(city);
    // Appel de la fonction fetchTodayForecast

    apiWeather
        .fetchTodayForecast()

        .then(function (response) {
            // Récupère la donnée d'une API
            const data = response.data.list;

            for (let i = 0; i < 4; i++) {
                // On récupère l'information principal
                const main = data[i].weather[0].main;
                const description = data[i].weather[0].description;
                const temp = data[i].temp.day;
                const icon = apiWeather.getHTMLElementFromIcon(data[i].weather[0].icon);

                // Modifier le DOM
                document.getElementById(`day-forecast-nb${i}-main`).innerHTML = main;
                document.getElementById(`day-forecast-nb${i}-more-info`).innerHTML = description;
                document.getElementById(`day-icon-weather-container-nb${i}`).innerHTML = icon;
                document.getElementById(`day-forecast-nb${i}-temp`).innerHTML = `${temp}°C`;
            }
        })
        .catch(function (error) {
            // Affiche une erreur
            console.error(error);
        });
}
