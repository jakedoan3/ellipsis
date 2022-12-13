import React from 'react'
import Image from 'next/image'

const Shop = () => {
  return (
    <div>
      <title>ell!psis | Shop</title>
      <h1>Shop</h1>
      
      <a href='https://www.google.com' className='storeItem'>
        <Image src='/images/samplepackbundle.jpg' width={250} height={250}/>
        <h3>Sample packs 1-3</h3>
        <p>They're really good!</p>
      </a>
      
      <a href='https://www.google.com' className='storeItem'>
      <Image src='/images/archoncover.jpg' width={250} height={250}/>
        <h3>Archon USB</h3>
        <p>LIMITED QUANTITY: Contains "archon" EP, Sample Packs 1-3, full "archon" stems, and visuals by jersea</p>
      </a>
      
    </div>
  )
}

export default Shop