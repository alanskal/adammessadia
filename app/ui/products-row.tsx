

import Image from 'next/image'

export default function ProductRow(){

  return (
    <div className='pLine row d-flex justify-content-center align-items-center'>
      <div className="col-3 d-flex justify-content-center">
        <Image
          src="/assets/kanyehoodie.png"
            width={300}
            height={300}

          alt='kanye hoodie'
        />
      </div>
    </div>
  )
}
