import React, { useEffect, useState } from 'react'

function NewsApi() {
 const apikey='b70ca7e235cb44eb95838d45f245d85b';
 const apiurl=`https://newsapi.org/v2/everything?q=tesla&from=2023-01-24&sortBy=publishedAt&apiKey=${apikey}`;
 const [jsonarray,Setjsonarray]=useState([]);

useEffect(()=>{
  fetchdata();
},[])
 async function fetchdata(){
    const response = await fetch(apiurl);
    const jsondata=await response.json();
    Setjsonarray(jsondata.articles);
 }
  return (
    <div>
 
        {
        jsonarray.map((note)=>{
           return <p>{note.title}</p>
        })
        }
    </div>
  )
}

export default NewsApi