import { useEffect, useState } from "react";

function Item({name,isPacked = false}){
    return(<li key={name}>
            {isPacked ? name + ' ✓' : name}
        </li>);
}
export default function ItemsList(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this component is loaded!");

        return ()=>{
            alert("component unloaded!")
        }
    })
    const items=[{name:"Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Pokky",isPacked:false},
        {name:"Powerbank",isPacked:false},
        {name:"Towel",isPacked:true}];
    
    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase())) 
    const itemList=filterList.map(i=><Item key ={i.name} 
        name={i.name} isPacked={i.isPacked}/>);

    return(<>
    <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
    <ui>
            {itemList}
        </ui></>);
}