import { useState } from "react"
import { CarType } from "../../types"
import CustomButton from "../CustomButton"
import DetailModal from "./DetailModal"
import { generateImage } from "../../utils/generateImages"
import {motion} from "framer-motion"
type CardPropsType ={
    car:CarType
}

const Card = ({car}:CardPropsType) => {
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false)
  return (
    <motion.div 
        initial={{
            scale:0.5,
            opacity:0
        }}
        whileInView={{
            scale:1,
            opacity:1
        }}
    
    className="car-card group">
        <h2 className="car-card__content-title">{car.make} {car.model}</h2>
        <p className="flex mt-6 text-[32px]">
            <span className="text-[19px] font-semibold self-start">$</span>
           {Math.round(Math.random() * 5000) + 500}
            <span className="text-[14px] font-medium self-end">/gün</span>
        </p>
        <div className="relative w-full h-40 my-3">
            <img src={generateImage(car)} className="object-contain w-full h-full"/>
        </div>
        <div className="relative flex w-full mt-2">
            <div className=" group_hover: invisible flex justify-between text-grey w-full">
            <div className="flex flex-col justify-center items-center gap-2">
                <img width={25} src="/steering-wheel.svg"  />
                <p className="text-[14px]">
                {car.transmission === 'a' ? 'Otomatik' : 'Manuel'} </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <img width={25} src="/tire.svg"  />
                <p className="text-[14px]">
                {car.drive } </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <img width={25} src="/gas.svg"  />
                <p className="text-[14px]">
                {car.fuel_type} </p>
            </div>
            </div>
            <div className=" group-hover:flex hidden w-full absolute bottom-0 z-10">
                <CustomButton title="Daha Fazla" designs="w-full py-[16px]" rIcon="/right-arrow.svg" handleClick={() => setIsModalOpen(true)}/>
            </div>
        </div>
        <DetailModal car={car} isOpen={isModalOpen} close={() => setIsModalOpen(false)}/>
    </motion.div>
  )
}

export default Card