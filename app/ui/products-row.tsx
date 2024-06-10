

import Image from 'next/image'

export default function ProductRow(){

  return (
    <div className='pLine row d-flex justify-content-center'>
      <div className="col-3 d-flex justify-content-center">
        <Image
          src="/assets/tshirt.png"
            width={300}
            height={300}
            layout='responsive'
          alt='tee simple'
        />
      </div>
    </div>
  )
}
