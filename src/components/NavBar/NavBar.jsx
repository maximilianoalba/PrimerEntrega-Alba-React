import {Link } from "react-router-dom";
import CartWidget from "../CartWiget/CartWiget";
import "./NavBar.css";
import ButtonComponent from "../buttons/ButtonComponent";

export default function NavBar() {
  return (
    <>
      <header className="flex justify-around  bg-slate-600 bg-gradient-to-r from-emerald-100 to-cyan-400">
        <Link to="/">
          <h1 className=" text-cyan-700 m-3 font-mono text-xl font-semibold  hover:text-sky-500 ">
            InfinitiBytes PC
          </h1>
        </Link>
        <nav className=" flex gap-5 p-3 justify-between  space-x-20 ">
        <Link to={'/'}><ButtonComponent name={'Home'}/></Link>
        <Link to={'/ItemListContainer/Pc Escritorior'}><ButtonComponent name={'Pc Escritorio'}/></Link>
        <Link to={'/ItemListContainer/Notebook'}><ButtonComponent name={'Notebook'}/></Link>
        </nav>
        <CartWidget />
      </header>
    </>
  );
}
