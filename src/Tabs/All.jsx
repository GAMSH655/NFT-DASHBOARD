import React from 'react'
import Wave from "../assets/Wave.png"
import Tbids from "../Components/Tbids";
const All = () => {
  const NftData = [
    { nftImg : Wave , nftName:"Liquid Wave" , time :"auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auction time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
    { nftImg : Wave , nftName:"Liquid Wave" , time :"Auc tion time", bid:"Current bid" , price1:"005.ETH", timing:"3h 1m 50s",price2:"005.ETH" },
  ]
  return (
    <div className="">
    {/* <div className=' block md:grid md:grid-cols-4'>
      {
        NftData.map(({nftImg ,nftName ,time ,bid ,timing, price1 , price2} , index)=>{
        return <div className='bg-[#1D1932] shadow-md m-3 p-2 text-white rounded-md' key={index}>
             <img src={nftImg} alt="" className='w-full' />
             <h4 className="capitalize font-semibold text-sm mt-3 ">{nftName}</h4>
             <table className="">
                 <thead>
                      <tr>
                          <th className=' text-center text-sm font-normal'>{time}</th>
                          <th className=' py-3 px-6 text-left  text-sm font-normal'>{bid}</th>
                      </tr>
                 </thead>
                 <tbody>
                      <tr>
                          <td>{timing}</td>
                          <td className=' className="py-3 px-6 text-[#6F4FF2]'>{price2}</td>
                      </tr>
                  <tr>
                    <td className=' className="py-3 '>{price1}</td>
                    <td className=' className="py-3 px-6 text-left '>{price1}</td>
                  </tr>
                 </tbody>
             </table>
             <button className="w-full p-2 bg-[#6F4FF2] text-white  rounded-md hover:bg-"> Placea a bid </button>
          </div>
        })
      }
   
    </div>
    <Tbids/> */}
    </div>
  )
}

export default All



// <div className="overflow-x-auto p-4">
// <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
//   <thead>
//     <tr className="bg-gray-200 text-gray-700">
//       <th className="py-3 px-6 text-left">Name</th>
//       <th className="py-3 px-6 text-left">Email</th>
//       <th className="py-3 px-6 text-left">Role</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr className="border-t
//       <td className="py-3 px-6">john@exam border-gray-300 hover:bg-gray-100">
//       <td>John Doe</td>ple.com</td>
//       <td className="py-3 px-6">Admin</td>
//     </tr>
//     <tr className="border-t border-gray-300 hover:bg-gray-100">
//       <td className="py-3 px-6">Jane Smith</td>
//       <td className="py-3 px-6">jane@example.com</td>
//       <td className="py-3 px-6">User</td>
//     </tr>
//   </tbody>
// </table>
// </div>
