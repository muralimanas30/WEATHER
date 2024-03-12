const weather_main = document.querySelector(".weather-main");
const weather_form = document.getElementById("weather-form");
let weather_city_text="";

const api_key = "1341799dafeb76f4a071b50e299923b1";
const weather_city_img_name = document.querySelector(".city-image");
weather_city_img_name.style.display="none";

weather_form.addEventListener("submit" , (event)=> event.preventDefault());
const weather_search_button = document.getElementById("weather-search-button");

const weather_card = document.querySelector(".weather-card");
weather_card.style.display="none";


const all_weather_data_frame = document.querySelector(".all-weather-data");
all_weather_data_frame.style.display="none";

const trying_for_data_frame = document.querySelector(".trying-for-data");
trying_for_data_frame.style.display="none";

const weather_city_image = document.getElementById("weather-city-image")
const weather_city_name = document.getElementById("weather-city-name");
const temp_display_p = document.querySelector(".tempDisplay")
const humidity_display_p = document.querySelector(".humidityDisplay")
const desc_display_p = document.querySelector(".descDisplay")

const weather_city_input = document.getElementById("weather-city-input");



async function main(){

    
    if(weather_city_input.value==""){
        weather_card.style.display="block";
        trying_for_data_frame.style.display="block";
        trying_for_data_frame.innerHTML=
        "<p>PLEASE PROVIDE A CITY NAME</p>"
        // throw new Error("PLEACE PROVISE A CITY NAME");
    }
    else{
        weather_city_text=weather_city_input.value.toLowerCase().trim();
        console.log(weather_city_text);
    }
}