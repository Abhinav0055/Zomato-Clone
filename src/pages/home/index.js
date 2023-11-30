import React, {useState } from 'react'
import Header from '../../components/header'
import TabOptions from '../../components/common/TabOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningout';
import NightLife from '../../components/nightlife';

function HomePage() {
    const [activeTab,setActiveTab] = useState("Delivery");



  return (
    <div>
    <Header/>
    <TabOptions activeTab={activeTab} setActiveTab = {setActiveTab}/>
    {/* Diff Screen */}
    {getCorrectScreen(activeTab)}
    <Footer/>
    </div>
  )
}

const getCorrectScreen =(tab)=>{
    switch(tab){
        case ("Delivery"):
        return <Delivery/>
        case ("Dining Out"):
        return <DiningOut/>
        case ("NightLife"):
        return <NightLife/>
        default:
        return <Delivery/>
    }
};

export default HomePage