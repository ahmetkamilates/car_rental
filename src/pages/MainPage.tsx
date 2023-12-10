import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import CustomFilter from "../components/CustomFilter"
import { useEffect, useState } from "react"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"
import ShowMore from "../components/ShowMore"
import {useSearchParams} from "react-router-dom"
const MainPage = () => {
  const [params] = useSearchParams()
  const [cars,setCars] = useState<CarType[]|null>(null)
  const [isError,setIsError] = useState<boolean>(false)
  useEffect(() => {
 const paramsObject = Object.fromEntries(params.entries())
    fetchCars(paramsObject).then((data) => setCars(data)).catch(() => setIsError(true))
  },[params])
  return (
    <div>
      <Hero/>
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-xl font-extrabold">Araba Kataloğu</h1>
          <p>Begenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
        


          {!cars ? ( <div className="home__error-container">
            <h2>Yükleniyor...</h2>
          </div>): isError ? ( <div className="home__error-container">
            <h2>Üzgünüz bir sorun oluştu</h2>
          </div>) :
           cars.length < 1 ? ( <div className="home__error-container">
            <h2>Aradığınız kriterler uygun araba bulunamadı</h2>
          </div>):
          (
          <section>
            <div className="home__cars-wrapper"> {cars.map((car,i) => <Card car={car} key={i}/>)}</div>
           <ShowMore/>
            </section>)}

      </div>
      </div>
  )
}

export default MainPage