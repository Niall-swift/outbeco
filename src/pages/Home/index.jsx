import { PageTransition } from "../../components/PageTransition";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { transition, fadeInDown, fadeInUp} from "../../utils/Animations";
import picture from '../../assets/pictures/voandoaltocomdrone-20241211-0001.mp4'
import { Header } from "../../components/Header";

export function Home() {
  const transitionImage = { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.91] };
  return (
    <>
    <PageTransition/>
      <Header/>

      <section className="container relative z-20 mx-auto w-full h-full overflow-hidden sm:mt-1">

      <div className="mx-auto w-[100%] h-[100%]">
          <motion.div
                initial={{ width: 1000, height: 600, y: "-20%" }}
                animate={{
                  y: 0,
                  x: 0,
                  width: "100%",
                  transition: { delay: 2, ...transitionImage },
                }}
                className="relative mx-auto rounded-xl"
              >
                <motion.video
                  initial={{ borderRadius: "20px" }}
                  animate={{ borderRadius: "0px" }}
                  transition={{ delay: 2, ...transitionImage }}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  src={picture}
                  alt=""
                  className="absolute bottom-0 h-[36rem] w-full object-cover object-center rounded-full"
                />
              </motion.div>
          </div>


        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mx-auto grid items-center gap-4 p-8 sm:grid-cols-3 xl:gap-14 "
        >

          <div className="flex flex-col gap-6">
            <h1 className="text-center font-Wulkan text-4xl font-medium uppercase  text-outbec-laranja sm:text-left lg:text-5xl">
              sejam bem <br className="hidden sm:block" /> <p className="text-white">vindos</p>
            </h1>

            <p className="text-xl xl:text-base text-white">
            Que tal embarcar em uma experiência gastronômica única e inesquecível com a gente, no Outbêco? Nosso cardápio está repleto de sabores especiais esperando por você! 🥰
            </p>
            {/* Redes sociais */}
            <div className="flex justify-center gap-10 pb-4 text-3xl sm:justify-start sm:pt-6">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                rel="noreferrer noopener"
                to="/projects"
                className="transition text-nowrap p-4 hover:text-white text-outbec-laranja hover:bg-outbec-laranja bg-bg-claro  justify-center items-center flex rounded-xl w-full"
              >
                <PiBookOpenTextLight className="bg-transparent mr-2"/>
                veja nosso cardápio
              </Link>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Efeitos em volta do site */}
    </>
  );
}
