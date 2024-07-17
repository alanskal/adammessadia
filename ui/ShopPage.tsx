import Image from 'next/image'

export default function ShopPage () {

  return (
   <>

   {/* test row */}
   <div className="container-fluid">

    <div className="product-grid">


      <Image
      className='image-grid'
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"

      />
      <Image
      className='image-grid'
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"

      />
      <Image
      className='image-grid'
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"

      />
      <Image
      className='image-grid'
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"

      />
      <Image
      className='image-grid'
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"

      />

      </div>

    </div>
   </>
  )
}
