import { createContext, useState } from "react";
import dayfoodImg from '../assets/imgCadapio/Gemini_Generated_Image_jlw9rwjlw9rwjlw9.jpeg'
import dayfoodmobileImg from '../assets/imgCadapio/jpg (3).jpeg'
import expofilmeimg from '../assets/imgCadapio/jpg.jpeg'
import avlimg from '../assets/imgCadapio/jpg (1).jpeg'
import maisembreveimg from '../assets/imgCadapio/jpg (2).jpeg'
import oninflays from '../assets/imgCadapio/prato-onions.png'


export const ContextG = createContext({})

function GContext({ children }) {
  const  projects = [
    {
    id:"1",
    git: "",
    sit: "https://dayfood.vercel.app/Home",
    image: `${dayfoodImg}`,
    name:"onion rings",
    date:"25,90",
    description:"Uma sinfonia de sabores crocantes e adocicados, nossos anéis de cebola são uma experiência gastronômica inesquecível. Cada anel é cuidadosamente empanado e frito até atingir a perfeição dourada, revelando uma textura crocante por fora e um interior macio e suculento.",
    stacks:"",
  },
  {
    id:"2",
    git: "",
    sit: "https://play.google.com/apps/test/com.niallswift.dayfoodmobile/14",
    image: `${ dayfoodmobileImg}`,
    name:"beef chunch",
    date:"65,90",
    description:"5 tiras de beef tão crocantes por fora quanto macios por dentro com uma deliciosa batata frita.",
    stacks:"",
  },
  {
    id:"3",
    git: "",
    sit: "",
    image: `${expofilmeimg}`,
    name:"Crispy Rib’s",
    date:"56,90",
    description:"8 unidades de coxinhas de costela... (53gramas cada uma)",
    stacks:"TypeScript;ReactNative;NativeBase;Axios;NativeSwiper",
  },
  {
    id:"4",
    git: "",
    sit: "https://play.google.com/store/apps/details?id=com.niallswift.avlTelecom&pcampaignid=web_share",
    image: `${avlimg}`,
    name:"chicken mush",
    date:"59,90",
    description:"Um delicioso empanado de frango com um cremoso queijo por cima com temperos da casa e batata frita.",
  },
  {
    id:"5",
    git: "",
    sit: "",
    image: `${maisembreveimg}`,
    name:"bêco appetizers",
    date:"109,90",
    description:"bêco appetizers e para você que quer um pouco de tudo com 4 drumete  4 onion rings 4Crispy Rib’s meia costela ao molho babecuer e batata frita.",
    stacks:"",
  },
  {
    id:"6",
    git: "",
    sit: "https://dayfood.vercel.app/Home",
    image: `${oninflays}`,
    name:"onion flower",
    date:"65,90",
    description:"Acompanhada de um molho cremoso e aromático, essa onion flower e uma explosão de sabores que certamente irão conquistar seu paladar.",
  },
]
  return (
    <ContextG.Provider value={{
      projects
    }}>
      {children}
    </ContextG.Provider>
  )
}

export default GContext