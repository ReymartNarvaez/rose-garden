export const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;

  return (
    <div className="flex items-center shadow-lg rounded-lg p-4 rounded-2xl m-30 mt-8">
      <img
        className="w-[200px] rounded-lg"
        src={productImage}
        alt="Product Image"
      />
      <div className="w-[100%] text-[30px] m-10">
        <p className="font-bold">{productName}</p>
        <p className="text-gray-600">{price} kr</p>
      </div>
    </div>
  );
};
