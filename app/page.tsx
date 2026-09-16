import Image from "next/image";
import HomeSlider from './components/HomeSlider'
import CatSlider from './components/CatSlider'


export default function Home() {
  return (
    <>
    <div className="sliderwrapper bg-[#FAFAFA] py-4">
      
        <HomeSlider/>
      <CatSlider/>

    </div>
    
    </>
  );
}
