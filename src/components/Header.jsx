import { useCoffee } from "../context/CoffeeContext";

function Header() {
  const { coffee } = useCoffee();
  return (
    <header className="flex justify-around  items-center h-12 mt-6">
      <h1 className="text-3xl font-semibold text-slate-300 font-poppins">
        ☕ Coffee Bean
      </h1>
      <p className="text-xl font-medium  text-green-400">
        Quantity: {coffee.length}
      </p>
    </header>
  );
}

export default Header;
