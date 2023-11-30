import React from 'react'
import "./nightlife.css"
import Collection from '../common/collection';
import { nightOut } from '../../data/nightOut';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';

const nightFilter = [
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
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];


const collectionList = [
  {
    id:1,
    title:"9 Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623336.png",
    places: "6 Places"

  },
  {
    id:2,
    title:"9 Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/eb98e6031b99817fc6a82712b99067f0_1696925154.png",
    places: "6 Places"

  },
]


const nightList = nightOut;



function NightLife() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilter} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Chandigarh Road"
      />
    </div>
  )
}

export default NightLife