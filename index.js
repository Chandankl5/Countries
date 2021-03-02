const searchButton=document.getElementById("search") 
const searchInput=document.getElementById("search-input")
const filter=document.getElementById("select-region")

window.addEventListener("load",(event)=>{
    
    fetchCountryList("https://restcountries.eu/rest/v2/all") 

})

searchButton.addEventListener("click",(event)=>{

    const countryName=searchInput.value

    fetchCountryList("https://restcountries.eu/rest/v2/name/"+countryName+"")

})

filter.addEventListener("change",(event)=>{
    
    const regionName=event.target.value 

    fetchCountryList("https://restcountries.eu/rest/v2/region/"+regionName+"")

})


async function fetchCountryList(url){

    let response= await fetch(url) 
    let result= await response.json()    
    let countries=result
    console.log(countries)
    let html=countries.map((country)=>{
        
        return `<div class="card">  
             <div class="card-image-top">  
              <img src="${country.flag}" alt="country">  
               </div>      
               <div class="card-body">  
               <h4>${country.name}</h4> 
                <h6>Population: ${country.population}</h6>
                <h6>Region: ${country.region} </h6> 
                <h6>Capital: ${country.capital}</h6> 
                 </div> 
                 </div>`
    }).join("")


    document.getElementById("card-list").innerHTML=html
}
