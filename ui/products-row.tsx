

import Image from 'next/image'
import Link from 'next/link'

export default function ProductRow(){

  return (
    <div className='row d-flex justify-content-center'>
      <div className="col-3 d-flex justify-content-center pPosition">
        <Link href="/1">
          <Image
            src="/assets/kanyehoodie.png"
              width={300}
              height={300}

            alt='kanye hoodie'
          />
        </Link>
      </div>
    </div>
  )
}
