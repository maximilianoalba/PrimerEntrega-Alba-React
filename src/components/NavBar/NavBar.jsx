import CartWidget from "../CartWiget/CartWiget";
import ButtonComponent from "../buttons/ButtonComponent";
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <header className='flex justify-between align-baseline  '>
        <h1 className= 'text-green-600 m-3 font-mono text-xl'>InfinitiBytes PC</h1>
      <nav className=' flex gap-5 space-x-8'>
        <ButtonComponent name='PC Armadas'/>
        <ButtonComponent name='Marcas'/>
        <ButtonComponent name='Arma tu PC'/>
        <ButtonComponent name='Outlet Tecnologico'/>
        <ButtonComponent name='Servicios'/>
        <ButtonComponent name='Contacto'/>
      </nav>
        <CartWidget/>
      </header>
    </>
  );
}

