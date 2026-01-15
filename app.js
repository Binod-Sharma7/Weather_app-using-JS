let btn= document.getElementById("btn");
let input =document.getElementById("city");

let getweather=()=>{

    loading.style.display = "block";
    let key="ddca94de38e6b6318214b13fb91b9342";
    let cityName=document.getElementById("city").value;
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`;
    fetch(url)
    .then(res=>res.json())
    
    .then(data=>
    {
        console.log(data)
        let cname=document.getElementById("cityName");
        let temp=document.getElementById("temp");
        let weather=document.getElementById("weather");
        cname.innerText=data.name;
        temp.innerText=data.main.temp+"°C";
        let text=data.weather[0].main;
        weather.innerText=text;
        if(text==="Clear")
        {
            weather.innerText=text+"☀️"
        } else if(text==="Clouds")
        {
            weather.innerText=text+"☁️"
        }else if(text==="Rain")
        {
            weather.innerText=text+"🌧️"
        }else if(text==="Thunderstorm")
        {
            weather.innerText=text+"⛈️"
        }else if(text==="Snow")
        {
            weather.innerText=text+"🌨️"
        }else
        {
            weather.innerText=text+"🌫️"
        }
        
    }

    
    )
    .catch(e=>
    {
        let temp=document.getElementById("temp");
        let weather=document.getElementById("weather");
        let cname=document.getElementById("cityName");
        cname.innerText="No data of that place!"
         temp.innerText="";
        weather.innerText="";
    }
    ) .finally(() => {
            
            loading.style.display = "none";
        })
    


}
btn.addEventListener("click",getweather);
input.addEventListener("keydown",(event)=>
{
    if (event.key==="Enter")
    {
        console.log("ENtered")
        getweather();
    }
})