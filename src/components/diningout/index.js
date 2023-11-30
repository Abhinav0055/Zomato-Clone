import React from "react";
import "./diningout.css";
import Collection from "../common/collection";
import { diningOut } from "../../data/diningOut";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: 1,
    title: "7 Must-visit Legendary Places",
    cover:
      "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120584.jpg?output-format=webp",
    places: "7 Places",
  },
  {
    id: 2,
    title: "8 Best-Insta Worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/1dedf8663e048ac43b27f2441cb81068_1696925008.png?output-format=webp",
    places: "8 Places",
  },
  {
    id: 3,
    title: "6 Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/fb1144ca87880b111530eb2dbae9e489_1696925078.png?output-format=webp",
    places: "6 Places",
  },
  {
    id: 4,
    title: "9 Finest Microbreweris",
    cover:
      "https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623336.png?output-format=webp",
    places: "6 Places",
  },
  {
    id: 5,
    title: "9 Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/eb98e6031b99817fc6a82712b99067f0_1696925154.png?output-format=webp",
    places: "6 Places",
  },
  {
    id: 6,
    title: "5 Best Luzury Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1675244655.jpg?output-format=webp",
    places: "5 Places",
  },
  {
    id: 7,
    title: "7 Premium Coffee Shops",
    cover:
      "https://b.zmtcdn.com/data/collections/988b48889bffd88263bc2b6b4144873d_1695896617.png?output-format=webp",
    places: "6 Places",
  },
  {
    id: 8,
    title: "7 Blissfull Breakfast Places",
    cover:
      "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054402.jpg?output-format=webp",
    places: "6 Places",
  },
];

const diningFilter = [
  {
    id: 1,
    icon: <i className="fa-solid fa-filter absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Outdoor Seating",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 5,
    title: "Open Now",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const diningList = diningOut;

function DiningOut() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilter} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Trending dining restaurants in Chandigarh Road"
      />
    </div>
  );
}

export default DiningOut;
