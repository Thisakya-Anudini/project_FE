import "./productCard.css";

export default function ProductCard(props) {
  console.log(props);
  return (
    <div className="max-w-xs rounded-lg shadow-xl p-6 bg-white transition-transform transform hover:scale-105">
      <h1 className="text-2xl font-bold text-gray-900 truncate">{props.name}</h1>
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-56 object-cover rounded-lg mt-4 transition-transform transform hover:scale-110"
      />
      <p className="text-xl font-semibold text-gray-700 mt-3">${props.price}</p>
      <button className="mt-6 w-full py-3 px-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out transform hover:scale-105">
        Add to Cart
      </button>
    </div>
  );
}
