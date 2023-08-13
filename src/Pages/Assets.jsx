import React from "react";

import { dummyAssets } from "../data/dummyData";
import AssetCard from "../Components/AssetCard";
const data = dummyAssets;
export default function Assets() {
  return (
    <div className="assets-page-container">
      <div className="assets-title text-gray-400 text-center">
        AllCoin Assets
      </div>

      {data.map((item) => (
        <div className="mt-4" key={item.id}>
          <AssetCard
            id={item.id}
            img={item.img}
            name={item.name}
            desc={item.desc}
            apr={item.apr}
            amtStaked={item.amtStaked}
            learnMoreInfo={item.learnMoreInfo}
          />
        </div>
      ))}
    </div>
  );
}
