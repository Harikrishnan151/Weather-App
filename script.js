
function place(){
    locations = inputs.value;
    console.log(locations);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)
    .then(result=>result.json())
    .then(data=>displayContent(data))
    .catch(erro=>console.log('faild to fetch data'))


function displayContent(data){
    
    let district=data.name;
    let humidity=data.main.humidity
    let pressure=data.main.pressure
    let wind=data.wind.speed
    let temperature=data.main.temp
    let sunny=data.weather[0].description

  
if(temperature>35){
    image.innerHTML=`<img style="width: 80px; height: 80px;" id="icon" src="https://media1.giphy.com/media/WxK5PIZnukRqksLYAx/giphy.gif?cid=ecf05e472ffc0pcpzj5w8b2padpz994f7rh0j3gtarkaiopq&ep=v1_gifs_related&rid=giphy.gif&ct=s" alt="">`
}else if(temperature<35 && temperature>30 ){
    image.innerHTML=`<img style="width: 80px; height: 80px;" id="icon" src="https://media1.giphy.com/media/UnyblOs6hGx9Mli7jq/giphy.gif" alt="">`
}else if(temperature<30){
    image.innerHTML=`<img style="width: 80px; height: 80px;" id="icon" src="https://media.giphy.com/media/3ohhwsupwJyzktdgS4/giphy.gif" alt="">`

}
  


    loc.innerHTML=district;
    humidity1.innerHTML=humidity+`%`;
    pressure1.innerHTML=pressure;
    wind1.innerHTML=wind+`km/h`;
    temp1.innerHTML=temperature+`°C`
    discription.innerHTML=sunny
   

}

function clock(){

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = new Date()
        let todayD  = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let month = months[date.getMonth()]
        let year = date.getFullYear()
    
        todayHours.innerHTML=hours
        todayMinutes.innerHTML=minutes
    
        todayDate.innerHTML=todayD
        todayMonth.innerHTML=month
        todayYear.innerHTML=year
        setTimeout(()=>{
            clock()
        },1000)
}
    clock();
}