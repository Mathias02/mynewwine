
"use client"

import Hero from "./_components/Hero";
import Section from "./_components/Section";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import { useEffect, useState } from "react";

export default  function Home() {

const [data,setData]= useState([]);

 const data1 = async () => {
  const dataBox= await GlobalApi.getCategories().then((resp) =>{
    console.log(resp);
    setData(dataBox);
  });
 }

 useEffect(() =>{
  data1();
 },[]);
  
  return (
    <div>
      {/*hero section */}
       <Hero />

       {/*section area*/}
       <Section />

       {/* categories */}

      <CategoryList lists={data}  />

    </div>
  );
}
