export default function ProductCard(props) {
  console.log(props);
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="w-full h-64 object-cover transition-transform transform hover:scale-105"
        src={props.image}
        alt={props.name}
      />
      
      <div className="p-6">
        {/* Product Name */}
        <h1 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200">
          {props.name}
        </h1>
        
        {/* Product Price */}
        <p className="text-lg text-gray-600 mt-2">Price: ${props.price}</p>
        
        {/* View Details Button */}
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          View details
        </button>
      </div>
    </div>
  );
}
