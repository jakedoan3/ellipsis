import React from "react";
import Image from "next/image";
import { checkout } from "../checkout";

const Shop = () => {
  return (
    <div className="shop, main">
      <title>ell!psis | Shop</title>
      <h1>Shop</h1>

      <div className="shop-item">
        <Image
          src="/images/archoncover.jpg"
          alt="archon usb"
          width={250}
          height={250}
        />
        <br></br>
        <div className="shop-item">
        <h3 class>Archon USB</h3>
        <p>
        LIMITED QUANTITY: Contains "archon" EP, Sample Packs 1-3, full "archon" stems, and visuals by jersea
        </p>
        <p>(Limit 1 per order)</p>
        <br></br>
        <h4 className="price">$40</h4>
        <button
        className="checkoutbutton"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1MEQHuJEOsoohAF8rLKqC4J6",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buy
        </button>
        </div>
      </div>
      <br></br>

      <div className="shop-item">
        <Image
          src="/images/pack1-3bundle.jpg"
          alt="sample pack bundle"
          width={250}
          height={250}
        />
        <br></br>
        <div className="shop-item">
        <h3 class>Sample Pack Vol 1-3 Bundle</h3>
        <p>
          all 3 of my packs to date, bundled together from my 3 sample packs to date
        </p>
        <br></br>
        <h4 className="price">$35 (22% off!)</h4>
        <button
        className="checkoutbutton"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1MjsjQJEOsoohAF8mEeZ3Sgn",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buy
        </button>
        </div>
      </div>
      <br></br>

      <div className="shop-item">
        <Image
          src="/images/pack1cover.jpg"
          alt="sample pack vol 1"
          width={250}
          height={250}
        />
        <br></br>
        <div className="shop-item">
        <h3 class>Sample Pack Vol 1</h3>
        <p>
        contains 2 kicks, 13 percs, 5 snares, 27 loops, 25 fx, and 3 subs

        </p>
        <br></br>
        <h4 className="price">$15</h4>
        <button
        className="checkoutbutton"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1Mjt1cJEOsoohAF8oJN4bCk4",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buy
        </button>
        </div>
      </div>
      <br></br>

      <div className="shop-item">
        <Image
          src="/images/pack2cover.jpg"
          alt="sample pack vol 2"
          width={250}
          height={250}
        />
        <br></br>
        <div className="shop-item">
        <h3 class>Sample Pack Vol 2</h3>
        <p>
        contains 4 kicks, 16 percs, 6 snares, 5 hats, 11 loops, 13 fx, and 9 subs

        </p>
        <br></br>
        <h4 className="price">$15</h4>
        <button
        className="checkoutbutton"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1Mjt1cJEOsoohAF8oJN4bCk4",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buy
        </button>
        </div>
      </div>
      <br></br>

      <div className="shop-item">
        <Image
          src="/images/pack3cover.png"
          alt="sample pack vol 3"
          width={250}
          height={250}
        />
        <br></br>
        <div className="shop-item">
        <h3 class>Sample Pack Vol 3</h3>
        <p>
        contains 5 kicks, 17 percs, 7 snares, 4 hats, 15 loops, 12 fx, and 7 subs

        </p>
        <br></br>
        <h4 className="price">$15</h4>
        <button
        className="checkoutbutton"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1MjtepJEOsoohAF8cYXKgC85",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buy
        </button>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Shop;
