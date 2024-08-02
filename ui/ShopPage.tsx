import Image from 'next/image'



export default function ShopPage () {



  return (
   <>

   {/* test row */}
    <div className="row px-4 mx-auto container-fluid">
      <div className="col-lg-3 col-sm-auto">

      <Image
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"

      />
      </div>
      <div className="col-lg-3 col-sm-auto ">

      <Image
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"
      />
      </div>
      <div className="col-lg-3 col-sm-auto ">

      <Image
      src={'/assets/kanyehoodie.png'}
      width={300}
      height={300}
      alt="tee"
      />
      </div>
      <div className="col-lg-3 col-sm-auto ">

      <Image
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
