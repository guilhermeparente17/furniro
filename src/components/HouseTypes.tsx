import Bedroom from '../assets/images/bedrooms.jpg';
import Living from '../assets/images/bathrooms.jpg';
import Dining from '../assets/images/dinner.jpg';

const HouseTypes = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 py-10 '>
      <h1 className='text-4xl font-bold text-gray-800'>Browse The Range</h1>

      <p className='text-lg text-gray-600 text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      
      <div className='flex justify-center flex-col md:flex-row items-center gap-8 px-4'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src={Dining} alt="" className='w-[320px] h-[400px] rounded-tl-[50px] shadow-sm' />
          <span className='font-semibold text-gray-600'>Dining</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src={Living} alt="" className='w-[320px] h-[400px] rounded-tl-[50px] shadow-sm' />
          <span className='font-semibold text-gray-600'>Living</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src={Bedroom} alt="" className='w-[320px] h-[400px] rounded-tl-[50px] shadow-sm' />
          <span className='font-semibold text-gray-600'>Bedroom</span>
        </div>
      </div>
    </div>
  );
};

export default HouseTypes;
