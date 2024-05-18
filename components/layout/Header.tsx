'use client';
import logo from "/public/logo.png"
import Image from "next/image";
const Header = () => {
  return (
   <main className="">
      <Image 
      className="flex items-center"
      src={logo} 
      alt="logo"
      width={200}
      height={100}
       />
       <div className="flex justify-center rounded-full bg-red-500 items-center">
       <ul className="flex gap-10">
        <li>Female</li>
        <li>Male</li>
        <li>All Products</li>
       </ul>
       <div className="Circle">
        
       </div>
       </div>
       </main>
  
  )
}

export default Header
