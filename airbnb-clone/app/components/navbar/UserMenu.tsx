"use client";
import { AiOutlineMenu } from "react-icons/ai"
import {useCallback, useState} from "react"
import Avatar from "../Avatar";
import MenuItems from "./MenuItems";
export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen(!isOpen);
    },[])
  return (
    <div className="relative">
          <div className="flex flex-row gap-3 items-center">
              <div onClick={()=>{}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-200 transition cursor-pointer ">
              Airbnb your home
              </div> 
              <div onClick={toggleOpen} className="flex items-center-gap-3 rounded-full cursor-pointer border-[1px] hover:shadow-md transition flex-row p-4  md:px-2 md:py-1 py-4">
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                      <Avatar/>
                  </div>
              </div>
          </div>      
          {isOpen && (
              <div className="absolute rounded-xl shadow-md w-[40vh] md:w-[3/4] bg-white overflow-hidden right-0 top-12 text-sm ">
                  <div className=" flex flex-col cursor-pointer">
                      <>
                      <MenuItems onClick={()=>{}} label="login"/>
                      <MenuItems onClick={()=>{}} label="Sign up"/>
                      </>
                  </div> 
              </div>
          )}
    </div>
  )
}
