import { useState, useEffect } from 'react'
import '../Home/App.css'
import { MainContainer, Container, Icon } from './styles'
import Axios from 'axios'

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState()

  const handleClimate = (e) => {
    setCity(e.target.value)

  }
  const handleSubmit = () => {
    Axios.get(`http://api.weatherapi.com/v1/current.json?key=a8fee6f5682147fabe003435221806&q=${city}&lang=pt`)
      .then((data) => {
        if (data.status === 200) {
          return data.data
        } else {
          alert("Cidade não encontrada")
        }
      })

      .then((data) => {
        setWeather(data)
        console.log(data)
      })

  }

  return (
    <Container>
      <input
        placeholder='Buscar cidade ou país'
        onChange={handleClimate}
        type="text"
        value={city} />
      <button onClick={handleSubmit} type="button" className="btn btn-primary">Enviar</button>

      {
        weather ? (
          <MainContainer>

            <p>{`${weather.location.name}, ${weather.location.localtime}`}</p>

            <div className='location'>
              <h1>{`${weather.location.name}, ${weather.location.region}`}</h1>

            </div>
            <h1>{`${weather.current.temp_c}° `}</h1>
            <h2>{weather.current.condition.text}</h2>


            <div>
              <Icon src={weather.current.condition.icon} alt="" />
            </div>
            <p>{`Sensação térmica : ${weather.current.feelslike_c}° `}</p>
            <p>{`Úmidade relativa do ar : ${weather.current.humidity}`}</p>
            <p>{`Última atualização : ${weather.current.last_updated}`}</p>

          </MainContainer>
        ) : null
      }
    </Container>


  )
}

export default App
