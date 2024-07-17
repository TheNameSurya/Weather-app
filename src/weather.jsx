import axios from "axios"
import { useState } from "react"

function Weather() {
    const [city, setcity] = useState("")
    const [Weather, setWeather] = useState("")
    const [Temperature, setTemperature] = useState("")
    const [Description, setDescription] = useState("")

    function handlecity(event) {
        setcity(event.target.value)
    }

    function weatherhandle() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80ac1bb9c3ba28260acf8bb28426c145`)
        weather.then(function (success) {

            setWeather(success.data.weather[0].main)
            setDescription(success.data.weather[0].description)
            setTemperature(success.data.main.temp)

        }).catch(function (error) {
            alert(" Please Check Spelling")
        })
    }
    return (
        <div>
            <div className="p-10 bg-orange-100">
                <div className="bg-green-100 p-5 flex flex-col gap-3 border rounded-md shadow-2xl">
                    <h1 className="text-3xl font-bold"> Weather Report</h1>
                    <p> I can give you weather report about your city !</p>
                    <input className="p-2 border rounded-md w-56 " onChange={handlecity}></input>
                    <button className="bg-black text-white w-36 border rounded-md py-2" onClick={weatherhandle}>Get Report</button>

                    <h1>Weather : {Weather} </h1>
                    <h1>Description :{Description} </h1>
                    <h1>Temperature : {Temperature}</h1>

                </div>
            </div>
        </div>
    )
}
export default Weather