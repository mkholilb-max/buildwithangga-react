import { useState } from 'react'
import logoSepatu from './assets/GV9095-1.jpg'
import './App.css'

function App() {
  return (
    <>
    <div className="App flex flex-col justify-center w-full min-h-screen">
    <div className='Background flex justify-center w-[80%] mx-auto text-center mt-10 p-10 rounded-lg overflow-hidden'>
          <Foto />
          <ProductInfo category="Sepatu Running" name="Adidas Adizero" IsDiscount="coming"/>
    </div>
    <ReviewItems />
    </div>
    </>
  )
}

function ReviewItems() {
  //mempersiapkan data dummy JSON
  const user = [{
    id : 1,
    name: "Masayoshi Setiawan",
    review : "Sepatunya keren banget, nyaman dipakai lari pagi!",
    img : "https://images.pexels.com/photos/1251247/pexels-photo-1251247.jpeg"
  },{
   id : 2,
    name: "Setiawan",
    review : "Waw sepatunya keren banget, nyaman dipakai lari",
    img : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },{
    id : 3,
    name: "Oshi Awan",
    review : "Nyaman dipakai lari pagi!",
    img : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];
const listReview = user.map((itemReview) => 
    <div className='flex mx-auto max-w-[600px] w-full m-5'>
          <img className='w-20 h-20 bg-[#b1b1b1] rounded-[11px] mr-4 float-left' src={itemReview.img} alt="" />
          <div className=''>
          <h3 className='text-[20px] mb-3 font-semibold'>{itemReview.name}</h3>
          <p className='text-[16px]'>{itemReview.review}</p>
          </div>
        </div>
)
    return(
      <div className='flex flex-col justify-center w-full overflow-hidden pb-[100px]'>
        <h2 className='text-2xl font-bold mt-[50px] mb-6 text-center'>Reviews</h2>
        {listReview}
    </div>
    );
};


function Foto() {
  return(
  <div className='Logo w-[50%] h-[500px] bg-white overflow-hidden'>
        <img src={logoSepatu} className="w-full" alt="React logo" />
      </div>
)
}

function CheckDiscount(props) {
  const { IsDiscount } = props;
  if(IsDiscount == "yes"){
    return (<p>Diskon 50% off</p>)
  } else if(IsDiscount == "coming"){
    return (<p>Akan Ada Diskon</p>)
  } else {
    return (<p>Tidak Ada Diskon</p>)
  }
}
function ProductInfo(props) {
  const { category,name, IsDiscount  } = props;
  const benefits = ["Tidak kusut kena air","Ringan dipakai","Desain keren dan modern, Tidak kusut kena air","Ringan dipakai","Desain keren dan modernm"];
  const listBenefits = benefits.map((itemBenefits) =>
    <li className=''>{itemBenefits}</li>
  );
  return (
      <div className='Deskripsi m-4 space-y-2 text-left'>
        <p className='bg-gray-400 mb-6 p-2 py-1 rounded'>{category}</p>
        <h1 className='font-bold text-[30px]'>{name}</h1>
        <p>IDR 1.200.000</p>
        <p>sepatu running khas anak muda buatan adidas</p>
        <CheckDiscount IsDiscount={IsDiscount}/>

        <ul className='text-[14px] m-4 list-disc list-inside'>
          {listBenefits}
        </ul>
        
        <a href="#" onClick={(e) => AddCart(name, e)} className='w-[30px] mt-5 text-white bg-red-400 py-2.5 px-5 rounded-[5px] transition-all duration-[0.8s] hover:bg-blue-100 hover:text-black cursor-pointer'>Add to Cart</a>

      </div>
  )
}

function AddCart(e) {
  return console.log(e + " added to cart")
}

export default App
