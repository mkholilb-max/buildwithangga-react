import { useState } from 'react'
import logoSepatu from './assets/GV9095-1.jpg'
import './App.css'
import ReviewItems from './component/reviev.jsx'
import PropTypes, { checkPropTypes } from 'prop-types'

function App() {
  return (
    <>
    <div className="App flex flex-col justify-center w-full min-h-screen">
    <div className='Background flex justify-center w-[80%] mx-auto text-center mt-10 p-10 rounded-lg overflow-hidden'>
          <Foto />
          <ProductInfo category="Sepatu Running" name="Adidas Adizero" IsDiscount="coming" />
    </div>
    <ReviewItems />
    </div>
    </>
  )
}



function Foto() {
  return(
  <div className='Logo w-[50%] h-[500px] bg-white overflow-hidden'>
        <img src={logoSepatu} className="w-full" alt="React logo" />
      </div>
)
}

function CheckDiscount(props) {
  const { IsDiscount, Discount } = props;
  if(IsDiscount == "yes"){
    return (<p>Diskon {Discount}% off</p>)
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
    <li key={listBenefits} className=''>{itemBenefits}</li>
  );
  return (
      <div className='Deskripsi m-4 space-y-2 text-left'>
        <p className='bg-gray-400 mb-6 p-2 py-1 rounded'>{category}</p>
        <h1 className='font-bold text-[30px]'>{name}</h1>
        <p>IDR 1.200.000</p>
        <p>sepatu running khas anak muda buatan adidas</p>
        <CheckDiscount IsDiscount={IsDiscount} Discount="50"/>

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

CheckDiscount.PropTypes = {
  Discount : PropTypes.number.isRequired,
}

export default App
