import './itemListContainer.css';

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <main className='justify-center'>
        <section className='bg-slate-200  font-mono text-xl'>
          <h2 className=' text-center text-slate-600'>{greeting}</h2>
        </section>
      </main>
    </>
  );
}
