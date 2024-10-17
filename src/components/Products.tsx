import CafeChair1 from "../assets/images/cafe.jpg";
import CafeChair2 from "../assets/images/cafe-chair-2.jpg";
import Sofe from '../assets/images/sofa.jpg';

const Products = () => {
  const dataProduct = [
    {
      id: 1,
      name: "Syltherine",
      image: CafeChair1,
      discount: 2500000,
      price: 2500000,
      desc: "Stylish cafe chair",
    },
    {
      id: 2,
      name: "Syltherine",
      image: CafeChair2,
      discount: 2500000,
      price: 2500000,
      desc: "Stylish cafe chair",
    },
    {
      id: 3,
      name: "Syltherine",
      image: Sofe,
      discount: 2500000,
      price: 2500000,
      desc: "Stylish sofa",
    },
    {
      id: 4,
      name: "Syltherine",
      image: CafeChair2,
      discount: 2500000,
      price: 2500000,
      desc: "Stylish cafe chair",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-10 ">
      <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>

      <div className="grid sm:grid-cols-2 grid-cols-1 justify-center flex-col md:flex-row items-center gap-8 px-4">
        {dataProduct.map((product) => (
          <div className="">
            <img
              src={product.image}
              alt=""
              className="w-[300px] h-[300px] rounded-t-2xl"
            />
            <div className="bg-gray-200 px-2 py-4 flex flex-col justify-center items-center">
              <div className="ml-2 flex flex-col gap-y-2">
                <h3 className="text-2xl font-bold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">{product.desc}r</p>
                <div className="flex justify-between gap-x-2">
                  <span className="text-gray-800 font-bold text-sm">
                    $ {product.price}
                  </span>
                  <span className="line-through text-sm">
                    $ {product.discount}
                  </span>
                </div>
              </div>

              <button
                className="w-[90%] h-[50px] bg-gray-700 
            text-white text-semibold 
            text-[16px] mt-2 rounded-[10px]
            hover:bg-gray-800 transition active:scale-110"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
