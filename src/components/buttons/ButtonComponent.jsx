
import './ButtonComponent.css';

export default function ButtonComponent({name}) {
    return (
      <>
        <button className=' text-lg text-white hover:text-sky-500 ' >{name}</button>
      </>
    );
  }


  