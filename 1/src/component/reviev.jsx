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
    <div key={itemReview.id} className='flex mx-auto max-w-[600px] w-full m-5'>
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

export default ReviewItems;
