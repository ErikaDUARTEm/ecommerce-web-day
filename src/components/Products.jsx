import { Product } from './Product'

export function Products () {
  return (
    <div className='flex flex-col justify-center items-center'>
      <section className='max-w-[1024px] w-[100%] flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center flex-wrap'>
        <Product />
      </section>
    </div>
  )
}
