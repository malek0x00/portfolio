import Image from "next/image";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

function HomePage({propref, contactref}) {
    
    const downloadFile = async() => {
       const res = await fetch("/malek_bougadouha_cv.pdf")
         const blob = await res.blob()
         const url = window.URL.createObjectURL(blob);
         const a = document.createElement('a');
         a.style.display = 'none';
         a.href = url;
         // the filename you want
         a.download = 'malek_bougadouha_cv.pdf';
         document.body.appendChild(a);
         a.click();
         window.URL.revokeObjectURL(url);

    }

const TEXTS = ["web","mobile", "react"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    
    return ( 
        <>
        <Image alt="logo" className="fixed -top-24 -z-10 left-0 opacity-20" src={require("../../../public/logo_nobg_light.png")} />
        <div ref={propref} className="z-10 w-full h-screen md:pl-12 pl-6 flex justify-center text flex-col">
            <p className={`lg:text-7xl md:text-5xl text-3xl font-black text-stroke-1 text-[#121212]`}>Hi there,</p>
            <p className="lg:text-7xl md:text-5xl text-3xl font-black ">i{"'"}m Malek Bougadouha,</p>
            <div className="flex gap-2 lg:gap-4 flex-wrap">
            <p className="lg:text-7xl md:text-5xl text-3xl font-black text-stroke-1 text-[#121212]">a</p>
            <TextTransition className="lg:text-7xl md:text-5xl text-3xl font-black text-stroke-1 text-[#121212]" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            <p className="lg:text-7xl md:text-5xl text-3xl font-black text-stroke-1 text-[#121212]">developer.</p>
            
            </div>
            <div className="flex gap-4 ">
            <button onClick={()=>{contactref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}} className="lg:w-48 lg:h-16 md:w-40 md:h-14  w-36 h-12 lg:text-base text-sm text-lime-500 hover:bg-lime-500 hover:text-[#121212] transition-all active:scale-95 bg-[#121212] border-2 border-lime-500 mt-9 flex justify-center items-center">
                Contact Me
            </button>
            <button onClick={()=>{downloadFile()}} className="lg:w-48 lg:h-16 md:w-40 md:h-14  w-36 h-12 lg:text-base text-sm text-lime-500 hover:bg-lime-500 hover:text-[#121212] transition-all active:scale-95 bg-[#121212] border-2 border-lime-500 mt-9 flex justify-center items-center">
                Checkout My CV
            </button>
            
            </div>
        </div>
        
        </>
     );
}

export default HomePage;