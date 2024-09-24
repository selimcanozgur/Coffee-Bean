import { useCoffee } from "../context/CoffeeContext";

function Header() {
  const { coffee } = useCoffee();
  return (
    <header className="flex justify-around  items-center h-12 mt-6">
      <h1 className="text-3xl font-semibold text-slate-300 font-poppins">
        ☕ Coffee Bean
      </h1>
      <p className="text-md hidden md:block font-medium  text-green-200">
        Quantity: {coffee.length}
      </p>
    </header>
  );
}

export default Header;
