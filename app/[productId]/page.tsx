export default function ProductPage({params}: {
  params: {productId: string}
}
) {
  return (
    <div>
      <h1>WIP {params.productId}</h1>
    </div>
  )
}
