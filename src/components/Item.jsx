// eslint-disable-next-line react/prop-types
function Item({ item }) {
  // eslint-disable-next-line react/prop-types
  const { name, description, price, image_url } = item;
  return (
    <li className="flex w-[600px]">
      <img className="w-48 rounded-lg my-auto" src={image_url} />
      <div className="info mx-6 my-12">
        <p className="text-2xl font-semibold uppercase font-poppins">{name}</p>
        <p className="text-sm mt-2 font-montserrat font-medium">
          {description}
        </p>
        <p className="mt-3 font-semibold text-green-400">{price} $</p>
      </div>
      <hr />
    </li>
  );
}

export default Item;
