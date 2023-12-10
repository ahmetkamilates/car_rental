import { CarType,filterType } from "../types"

const options = {
    method:'GET',
    
    headers:{
        'X-RapidAPI-Key':
        '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host':'cars-by-api-ninjas.p.rapidapi.com',
    },
}
 
export async function fetchCars(filters:filterType):Promise<CarType[]> {

  const {make="bmw",model="",limit="5",year="",fuel=""} = filters
  const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&model=${limit}&model=${year}&model=${fuel}`,
  options)
  return await res.json()
}