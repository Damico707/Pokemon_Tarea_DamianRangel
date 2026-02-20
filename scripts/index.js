document.getElementById("search-bar").addEventListener("keydown",
     function() {
        let nombre = document.getElementById("search-bar").value.toLowerCase(); /*para minisculas y tal*/
        let linksito = "https://pokeapi.co/api/v2/pokemon/" + nombre;
        console.log(linksito);

        fetch(linksito)
        .then(function(res) { return res.json(); })
        .then((data) => {
            console.log(data);

            /*image*/
            document.querySelector(".pokemons img").src = data["sprites"]["front_default"];

            /* número*/
            document.querySelector(".number").textContent = "#" + data["id"];

            /*nombre*/
            document.querySelector(".name").textContent = data["name"];
        })
        .catch(function() {
            document.querySelector(".number").textContent = "N/A";
            document.querySelector(".name").textContent = "Not Found";
            document.querySelector(".pokemons img").src = "";
        });
});