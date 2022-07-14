import React from "react";

import { client } from "../lib/client";
import { FooterBanner, HeroBanner, Product } from "../components/index";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
};

export default Home;
