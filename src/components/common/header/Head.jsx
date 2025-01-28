import '@fortawesome/fontawesome-free/css/all.min.css';

const Head = () => {
  return (
    <>
      <section className='py-5 px-[10%] 2xl:px-[8%] text-white'>
        <div className='flex w-full justify-between items-center'>
          <div className='logo flex flex-col'>
            <img src="/images/blog/quicklogo.png" className="w-40" alt="Logo" />
          </div>

          <div className=' space-x-3 md:flex hidden'>
            <a href='' target='blank' className='fab fa-facebook-f icon w-10 h-10  bg-white/30 text-white flex justify-center items-center rounded-full transition duration-500 hover:bg-[#71B543] hover:text-white cursor-pointer'></a>
            <a href='' className='fab fa-instagram icon w-10 h-10  bg-white/30 text-white flex justify-center items-center rounded-full transition duration-500 hover:bg-[#71B543] hover:text-white cursor-pointer'></a>
            <a href='' className='fab fa-twitter icon w-10 h-10  bg-white/30 text-white flex justify-center items-center rounded-full transition duration-500 hover:bg-[#71B543] hover:text-white cursor-pointer'></a>
            <a href='' className='fab fa-youtube icon w-10 h-10  bg-white/30 text-white flex justify-center items-center rounded-full transition duration-500 hover:bg-[#71B543] hover:text-white cursor-pointer'></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;
