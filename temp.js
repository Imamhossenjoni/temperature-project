const API_KEY=`008b5a89046dd03381c8ca143509aea8`;
const tempSearch=()=>{
    const search=document.getElementById('search');
    const searchValue=search.value;
    url=` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`
    https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}
    //console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data));
}
//nicher ei duita line diye ekta function a ekta id o text newya hoyeche ebong oita pass kora hoyeche 
const assignText=(id,text)=>{
    document.getElementById('city-name').innerText=text;
}
//city temp add korar jonno ekta function nichi. jar modde duita parameter. ektate id pass kore arektate value pass kore assign kore
const cityTemp=(id,temp)=>{
    document.getElementById('city-temp').innerText=temp;
}
//use for set weather. 
const weather=(id,text)=>{
    document.getElementById('weather').innerText=text;
}
//data passing from fetch
const displayTemp=temperature=>{
    console.log(temperature);
    //console.log(temperature.name);
    assignText('city-name',temperature.name);
    //console.log(temperature.main.temp);
    cityTemp('city-temp',temperature.main.temp);
    //console.log(temperature.weather[0].main);
    weather('weather',temperature.weather[0].main);
    // console.log(temperature.weather[0].icon);
    //weather icon in dynamic(setAttribute use)
    const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon=document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);
}