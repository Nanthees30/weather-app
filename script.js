// async function getweather() {
//    const city = document.getElementById("city").value;

//    const apikey = "7452de878f1c26f89e735ec30b43fa9f";

//    const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=${city}&appid=${apikey}&units==metric`;

//    try{
//       const responce = await fetch(url);

//         if(!responce.ok){
//            throw new Error ("city Not Found");  
//         }

//         const data = await responce.json();

//         document.getElementById("showcase").innerHTML =
//         `<h3> ${data.name}, ${data.sys.country}</h3>
//          <p>Temperature: ${data.main.trmp}°C</p>
//          <p>weather: ${data.weather[0].discription}</p>`;
//    }
//    catch(error){
//       document.getElementById("weather-info").innerHTML = 
//       `<p style="color:red;" >${error.message}</p>` 
//    }
// }

async function getWeather() {
   const city = document.getElementById("city").value;
   const apiKey = "7452de878f1c26f89e735ec30b43fa9f";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   try {
       const response = await fetch(url);
       if (!response.ok) {
           throw new Error("cheack your city Name, It's spelling is Wrong...");
       }

       const data = await response.json();
       document.getElementById("weather-info").innerHTML = `
           <h3 style="color:rgb(177, 21, 86);">${data.name}, ${data.sys.country}</h3>
           <p style="color: #3674B5;">Temperature: ${data.main.temp}°C</p>
           <p style="color: #3674B5;">Weather Report: ${data.weather[0].description}</p>
       `;
   } catch (error) {
       document.getElementById("weather-info").innerHTML = `<p style="color: red;">${error.message}</p>`;
   }
}