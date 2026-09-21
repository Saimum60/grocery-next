import Image from "next/image";
import HomeSlider from './components/HomeSlider'
import CatSlider from './components/CatSlider'
import PopularProduct from './components/PopularProduct'



export default function Home() {
  return (
    <>
    <div className="sliderwrapper bg-[#f1f1f1] py-5">
      
      <HomeSlider/>
      <CatSlider/>
      <PopularProduct/>
      


    </div>
    
    </>
  );
}
