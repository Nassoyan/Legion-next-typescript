import React from "react";

function NFT() {
  return (
    <div className="container nft">
      <div className="nft-collection">
        <p className="collection-title">NFT COLLECTION</p>
        <p className="collection-text">
          We created this collection to reward our community and welcome the
          world to the Legion Universe.
        </p>
        <div className="nft-purchase">
          <p>
            By purchasing a Legion Universe NFT you become a member of the
            worldwide Legion Universe Community and get VIP privileges.
          </p>
        </div>
      </div>

      <div className="nft-details">
        <div className="details">
          <p className="details-p">Details</p>
          <ul>
            <li>Number of NFTs:</li>
            <li>Blockchains:</li>
            <li>Price of Legion Universe NFTs:</li>
            <li>Price of Legion Posters Ordinals:</li>
            <li>Marketplaces:</li>
          </ul>
        </div>
        <div className="details-text">
            <p>10,000 Legion Universe NFTs and a collection of 100 Legion Ordinals</p>
            <p>Polygon and Bitcoin Ordinals!</p>
            <p>80 Polygon (MATIC)</p>
            <p>0.2 Bitcoin (or FREE if you purchase 100 or more Legion Universe NFTs</p>
            <p>Legion Universe NFTs will be on Opensea and Legion Ordinals are on Gamma.io</p>
        </div>
      </div>
    </div>
  );
}

export default NFT;
