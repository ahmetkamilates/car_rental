import { motion } from "framer-motion";
import CustomButton from "../CustomButton"


const Hero = () => {
  const flyTo = (): void => {
    alert("assagıya kaydır")
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 paddimng-x max-h[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>
        <p className="hero__subtitle text-gray-200">Lorem ipsum dolor,
          sit amet consectetur adipisicing elit.
          Illo inventore quo accusamus voluptatem et
          consequatur dolor vel nam nihil.</p>
        <CustomButton title="Arabaları Keşfet" designs="mt-10" handleClick={flyTo} />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7
          }}
          whileInView={{
            translateX: 0,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
          className="object-contain" src="/hero.png" />
      </div>
    </div>
  )
}

export default Hero