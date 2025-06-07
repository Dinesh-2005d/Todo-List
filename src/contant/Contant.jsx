import React, { useState } from 'react'
import { FcFullTrash } from "react-icons/fc";
import { MdOutlineAlarmAdd } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const Contant = () => {
let [items, setItems] = useState([{ id : 1, lable : "HTML and CSS", Checked : true },
                                 { id : 2, lable : "JavaScript", Checked : true },
                                 { id : 3, lable : "React Jsx", Checked : false }]);

let [newItem, setNewItem] = useState("");
let [isediting, setIsEditing] = useState(false);
let[currentId, setCurrentId] = useState(null);



let handleChecked = (id) => { 
    let newListItems =  items.map((item)=>{
        return item.id === id ? {...item, Checked : !item.Checked} : item; }
);
    setItems(newListItems);
}

let handleUpdate = (id) => {
    setIsEditing(true);
    setCurrentId(id);
    let itemToEdit = items.find((item) => item.id === id)
    setNewItem(itemToEdit.lable);

}

let handleDelet = (id) => {
    let newListItems = items.filter((item) => item.id !== id).map((item, index) => {
        return { ...item, id: index + 1 };
    });
    setItems(newListItems);
    
}

let handleAddorSaveItem = () => {
if(isediting){
    let updatedItems = items.map((item) => {
        return item.id === currentId ? { ...item, lable: newItem } : item;
    });
    setItems(updatedItems);
    setNewItem("");
}
    else{
    setItems([...items, { id: items.length + 1, lable: newItem, Checked: false }]);
    setNewItem("");
   }
    setIsEditing(false);
    setCurrentId(null);
}

  return (
    <div className='contant'>
        <div>
            <input type="text" value={newItem} placeholder="Add New Items" onChange={ (e)=>{ setNewItem(e.target.value) } } />
            
            <MdOutlineAlarmAdd  role="button" tabIndex={0} onClick={handleAddorSaveItem}/>
        </div>
      <ul>
        {
            items.map((item) => {
              return (
                <li key={item.id}>
                  <input type="checkbox" checked={item.Checked} onChange={()=>{handleChecked(item.id)}}/>
                  <label>{item.lable}</label>
                  <BiEdit role="button" tabIndex={0} onClick={ ()=>{handleUpdate(item.id)} } />
                  <FcFullTrash role="button" tabIndex={0} onClick={()=>{handleDelet(item.id)}} />
                </li>
              )
            })
        }
      </ul>
    </div>
  );
};

export default Contant
