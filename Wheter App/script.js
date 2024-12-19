console.log("Hello Bhailog");  
function renderWeatherInfo(data){
    let newPara =document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;
    document.body.appendChild(newPara);
}
const API_KEY ="d1845658f92b31c64bd94f06f7188c9c";
async function fetchWeatherDetails() {
    try {
        // let latitude=15.333;
    // let longitude=74.0833;
    let city ="goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json(); // Coverting into JsON
    console.log("Wheathe data->",data);

    // let newPara =document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;
    // document.body.appendChild(newPara);

        renderWeatherInfo(data);
    }
    catch(err){
        //handle error here
    }
}
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
 
async function getCustomWeatherDetails(){
  try{
    let latitude =17.6333;
    let longitude=18.3333;

    let result =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    let data =  await result.json();
    console.log(data);  
  }

  catch(err){
    console.log("Error found ",err);
  }
} 