import Item from "./Item";
import { useCoffee } from "../context/CoffeeContext";

function ItemsList() {
  const { coffee } = useCoffee();
  return (
    <main className="text-slate-300">
      <h2 className="text-2xl font-bold text-center tracking-[4px] uppercase my-8 font-roboto">
        Menu
      </h2>
      <ul className="flex justify-center flex-wrap overflow-y-auto h-[460px] ">
        {coffee.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}

export default ItemsList;
