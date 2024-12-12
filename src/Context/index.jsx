import { createContext, useState } from "react";
import dayfoodImg from '../assets/imgCadapio/OUTBECO-079-200x300.jpg'
import dayfoodmobileImg from '../assets/imgCadapio/OUTBECO-104-200x300.jpg'
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
    name:"Dayfood",
    date:"25,90",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    stacks:"JavaScript;React;Axios;Nookies;framer-motion;jquery;lodash;styled-components",
  },
  {
    id:"2",
    git: "",
    sit: "https://play.google.com/apps/test/com.niallswift.dayfoodmobile/14",
    image: `${ dayfoodmobileImg}`,
    name:"Dayfood-Garçom",
    date:"65,90",
    description:"Imagine um restaurante onde os pedidos são feitos em um piscar de olhos e a cozinha recebe tudo com precisão, Essa é a realidade do Dayfood Garçom, um aplicativo que transforma o atendimento ao cliente!!",
    stacks:"TypeScript;ReactNative;NativeBase;Axios",
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
    name:"Avl Telecom",
    date:"59,90",
    description:"(AVL TELECOM foi um freelancer)  O aplicativo foi desenvolvido para que os usuários da empresa AVL consigam ver suas faturas, pagá-las solicitando 2° via e ver condição de conexão.",
  },
  {
    id:"5",
    git: "",
    sit: "",
    image: `${maisembreveimg}`,
    name:"Mais em Breve",
    date:"109,90",
    description:"Novos projetos irão aparecer aqui. ",
    stacks:"",
  },
  {
    id:"6",
    git: "",
    sit: "https://dayfood.vercel.app/Home",
    image: `${oninflays}`,
    name:"Dayfood",
    date:"65,90",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
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