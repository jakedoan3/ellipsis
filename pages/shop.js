import React from "react";
import Image from "next/image";
import {checkout} from "../checkout"

const Shop = () => {
  return (
    <div>
      <title>ell!psis | Shop</title>
      <h1>Shop</h1>

      <div>
        <Image src="/images/samplepackbundle.jpg" alt="sample pack bundle" width={250} height={250} />
        <h3>Sample Pack Vol 1-3 Bundle</h3>
        <p>
          Hundreds of original drums, fx, glitches, loops, and more, all bundled
          together from my 3 sample packs to date
        </p>
        {/* <Checkout/> */}
        <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: 'price_1MjS1qJEOsoohAF8gADO3hFt',
                    quantity: 1
                  }
                ]
              })
            })}>Buy</button>
      </div>

      <div>
        <Image src="/images/archoncover.jpg" alt="archon cover" width={250} height={250} />
        <h3>Archon USB</h3>
        <p>
          LIMITED QUANTITY: Contains "archon" EP, Sample Packs 1-3, full
          "archon" stems, and visuals by jersea
        </p>
        {/* <Checkout /> */}
        <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: 'price_1MOt7rJEOsoohAF8s0tAbPGH',                   
                    quantity: 1
                  }
                ]
              })
            })}>Buy</button>
      </div>
    </div>
  );
};

export default Shop;

