import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {



    let [map,setMap] = useState(new Map());
    let [text,setText] = useState("");
    let [bool,setBool] = useState(false)
    
    const populateInMap = (text)=>{
      text = text.replace(/[^a-zA-Z ]/g,"")
      let arr = text.split(/\s+/);
      for(let tag of arr){
        map.set(tag, map.get(tag) ?  map.get(tag)+1 : 1);
      }
      
      setMap(map);
      setBool(!bool)
    }

   const disPlayTag = ()=>{
    
        
       
        let sum = Array.from(map.values()).reduce((sum,val)=>{

            sum = sum+val;
            return sum;
        },0)
        
        let array = Array.from(map, ([name, value]) => ({ name, value ,frequency : (value/sum)*100}))
        if(array.length){
       
        array.sort((a,b)=>{
              if(a.value > b.value){
                return -1
              } else if(a.value < b.value){
                return 1
              }
              return 0;
        });

        
        
        let max = array[array.length-1]["frequency"];
        
       let finalArray = array.map((obj,index)=>{
        let fontSize = parseInt(obj.frequency);
       

        if(max < 10){
          fontSize = fontSize*10;
        }

        if(fontSize < 10){
          fontSize = 10;
        }

        

         return ( <div key={obj.frequency} style={{margin:"10px"}}>
            <span style={{fontSize:fontSize+"px"}}>{obj.name}</span>
           
          </div>
         )
       })

       

       return finalArray;
      } else {
        return null
      }
   }


   const textHandler = ()=>{
     
    populateInMap(text)
   }


  return (
    <div className="App" style={{margin:"20px"}}>
        <h2>Tag : </h2>
        <form style={{padding:"20px"}}> 
          <div style={{display:"flex",alignItems:"center",justifyContent: "center",marginTop:"20px"}}>
        <label>Text : </label>
        <textarea id="tag" name="tag" name="tag" cols="100" rows="20"  defaultValue="" onChange={(e)=>{setText(e.target.value)}}/> 
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent: "center",marginTop:"20px"}}>
        <div></div>
        <input type="button" name="add" value="Add" onClick={(e)=>{textHandler()}} style={{minWidth:"100px",padding:"20px",background:"blue",color:"#fff"}}/>
        </div>
        </form>
        <div style={{display:"flex",justifyContent: "center",marginBottom:"20px"}}>
        <div id="display" style={{display:"flex",alignItems:"strech",justifyContent: "center",marginTop:"20px",flexWrap:"wrap",width:"500px",height:"300px"}}>
              {disPlayTag()}
        </div>
        </div>
        </div>
  );
}

export default App;
