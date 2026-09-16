
import Link from 'next/link'
 import Search from './Search'
import {  FaRegHeart } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import Nav from './Nav';


const Header = () => {
  return (
    
    <div className='headerWrapper '>
        <header className='py-3 border-b-[1px] border-[rgba(0,0,0,0.1)]'>
        <div className='container flex items-center justify-between'>
            <div className='logo'>
                <Link href={"/"}>
                <img src={"./logo.png"} width ={243} hight={73} alt='logo'/>
                </Link>

            </div>

            <Search/>


            <div className='flex items-center gap-5 '>
                <div className='flex items-center gap-3 '>
                    <Link href={'/login'} className='hover:text-primary'>Login </Link>
                    <span>|</span>
                    <Link href={'/register'}  className='hover:text-primary'>Register</Link>
                </div>

                 <div className='flex items-center gap-8 '>
                   <Link href={"/wishlist"}  className='relative flex group'>
                   <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[18px] -right-[17px] z-50'>3</span>
                        <FaRegHeart size={25} className='text-gray-900 group-hover:text-primary' />

                    </Link>

                   <Link href={"/cart"}  className='relative flex group'>
                   <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-[14px] -right-[15px] z-50'>3</span>
                        <MdOutlineShoppingBag size={30} className='text-gray-900 group-hover:text-primary' />

                    </Link>
                 </div>
            </div>

        </div>

    </header>

    <Nav/>
    </div>
  )
}

export default Header