import Image from 'next/image'
import Link from 'next/link'



const ShopPage = ({ products }: { products: { id: number; name: string; desc: string; price: number, image: string; }[] }) => {



  return (
   <>

    <div className="row px-4 mx-auto container-fluid">
      <div className="col-lg-3 col-sm-12">
        {products.map (product => (
          <div className="image-wrapper" key={product.id}>

          <Link href={`/${product.id}`} >
           <Image
           src={product.image}
           width={300}
           height={300}
           layout='fixed'
           alt={product.name}
           className="card-img-top"
           />
           </Link>

           </div>
        ))}
      </div>
     </div>
</>
  )
}

export default ShopPage
