import React from "react"
import Popaya from "../assets/Popaya.png"
const Recent = () =>{
    const ActivityData = [
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.05ETH" , time:"12mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.04ETH" , time:"13mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.06ETH" , time:"18mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.55ETH" , time:"26mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.09ETH" , time:"25mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.03ETH" , time:"30mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.05ETH" , time:"35mins ago" , items:"60 items"},
        { ActivImg:Popaya , ActivMessage:"Purchase by you for 0.05ETH" , time:"35mins ago" , items:"60 items"},
    ]
    return (
        <div className="block md:flex  md:justify-evenly ">
            {/* <div className="w-full">
            <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  p-5 md:text-[2rem]">Recent Acitvity</h3>
              <div className="bg-[#1D1932]">
                {
                    ActivityData.map(({ActivImg , ActivMessage , time}, index )=>{
                        return <div className="flex justify-evenly    border-[1.5px] border-b-[#D6DBDE] outline:none last " key={index}>
                            <div className="flex justify-center items-center">
                            <img src={ActivImg} alt="" />
                            <h4 className="font-semibold capitalize text-lg text-white p-2">
                                popaya
                                <span className="block font-normal text-sm text-[#68676E]">{ActivMessage}</span>
                            </h4>
                            </div>
                            <span className="text-sm text-[#68676E]">{time}</span>
                        </div>
                    })
                };
              </div>
            </div> */}

            <div className="w-1/2 p-2">
                 <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  p-5 md:text-[2rem]">Recent Acitvity</h3>
                <div className="bg-[#1D1932]">
                {
                 ActivityData.map(({ActivImg , ActivMessage , ActivityData , time} , index) =>{
                    return <div className="flex justify-between border-2 border-b-[#D6DBDE] outline:none last ">
                        <div className="flex justify-center items-center border-[1.5px] w-full border-hidden ">
                             <img src={ActivImg} alt="" className="" />
                             <h4 className="font-semibold capitalize text-lg text-white p-2">
                                popaya
                                <span className="block font-normal text-sm text-[#68676E]">{ActivMessage}</span>
                            </h4>
                            <span className="text-sm text-[#68676E]">{time}</span>
                        </div>
                    </div>
                 })   
                }
                </div>
            </div>
            <div className="w-1/2">
            <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  p-5 md:text-[2rem]">Recent Acitvity</h3>
            {
             ActivityData.map(({ActivImg , items} , index) =>{
                return <div className="flex justify-evenly m-4 bg-[#1D1932] items-center rounded " key={index}>
                <div className="flex justify-center items-center">
                <img src={ActivImg} alt="" />
                <h4 className="font-semibold capitalize text-lg text-white p-2">
                    popaya 
                    <span className="block font-normal text-sm text-[#68676E]">{items}</span>
                </h4>
                </div>
                <button className="text-white border-2 border-[#6F4FF2] p-[5px] w-[100px] hover:bg-[#6F4FF2] hover:text-black transition rounded-md ">Follow</button>
            </div>
             })
            }
            </div>
            <div className=" w-1/2">
            <h3 className="capitalize font-normal text-white p-2 text-[1.5rem]  p-5 md:text-[2rem]">Recent post</h3>
            {
             ActivityData.map(({ActivImg , items} , index) =>{
                return <div className="flex justify-evenly items-center  m-4 bg-[#1D1932]" key={index}>
                <div className="flex justify-center  items-center">
                <img src={ActivImg} alt="" />
                <h4 className="font-semibold capitalize text-lg text-white p-2">
                    popaya 
                    <span className="block font-normal text-sm text-[#68676E]">{items}</span>
                </h4>
                </div>
                <button className="text-white border-2 border-[#6F4FF2] p-[5px] w-[100px] hover:bg-[#6F4FF2] hover:text-black transition rounded-md ">Follow</button>
            </div>
             })
            }
            </div>
        </div>
    )
}
export default Recent