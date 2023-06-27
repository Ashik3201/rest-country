fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        display(data)
    })

const display = countries => {
    const dv = document.getElementById("country");

    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = "country"

        const countryInfo = `
            <h3 class = "country-name">${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick = "displayOneCountry('${country.name.common}')" >Detail </button>
        `
        div.innerHTML = countryInfo;


        dv.appendChild(div)
    });
    
}

const displayOneCountry = name =>{
    const url =`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => rendercountry(data[0]))
}

const rendercountry = country =>{
    const countryInfo = document.getElementById("countryInfo");
    countryInfo.innerHTML = `
        <h1> Country : ${country.name.common} </h1>
        <p> Population: ${country.population}</p>
        <p> Area: ${country.area}</p>
        <img src="${country.flags.png}" alt="">
    `
}