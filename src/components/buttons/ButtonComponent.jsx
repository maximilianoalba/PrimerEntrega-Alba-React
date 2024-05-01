import './ButtonComponent.css';

export default function ButtonComponent({name,color}) {
    return (
      <>
        <button className='text-xs text-green-500 rounded-full hover:text-sky-500'  >{name}</button>
      </>
    );
  }
  