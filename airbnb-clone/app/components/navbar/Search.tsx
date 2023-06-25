"use client";
import {BiSearch} from "react-icons/bi"
export default function Search() {
  return (
    <div className="border-[1px] md:w-auto w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-betwen">
        <div className="text-sm font-semibold px-2">
          AnyWhere
        </div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
         Any WEek
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guest</div>
          <div className="bg-rose-500 p-2 rounded-full">
            <BiSearch/>
          </div>
        </div>
      </div>
          
    </div>
  )
}
