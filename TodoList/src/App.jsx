import Add from './components/ADD/Add';
import './App.css'
import { useEffect, useRef, useState } from 'react';

function App() {
   // state functions
  const[additem,setAdditem]=useState('');
  const [addlocal,setAddlocal]=useState([])
   const inputref=useRef('')
   
   // handling functions
     // function to handle adding items
     function localstore(){
      const updateaddlocal={ id: new Date().getTime(),item:additem,index:addlocal.length,checked:false};
      const updateall=[...addlocal,updateaddlocal];
      setAddlocal(updateall)
      // setCheckbox([...checkbox,{checked:false}])
      localStorage.setItem('rounding',JSON.stringify(updateall))
      inputref.current.value='';
     
     }
     
     // function to handle checked box
     const handlecheckbox=(index)=>{
        const listitems=addlocal.map((item) =>(
        item.index===index?{...item,checked:!item.checked}:item
        ))
        setAddlocal(listitems)
        localStorage.setItem('rounding',JSON.stringify(listitems))
     }
     // function handle delete items
     const handledeleteitem = (id) =>{
      const deleteitem = addlocal.filter((item) => item.id !== id);
  setAddlocal(deleteitem);
  localStorage.setItem('rounding', JSON.stringify(deleteitem))
     }
   
     // useeffect hook to handle set and get items of local storage
  
  const updateLocalState = () => {
    const storedata = JSON.parse(localStorage.getItem('rounding')) || [];
    console.log('storedata before setAddlocal', storedata);
    // const checkboxdata=storedata.map(() =>({checked:false}))
    // setCheckbox(checkboxdata)
    setAddlocal(storedata);
   
  };
  useEffect(() => {
    // Call updateLocalState inside useEffect
    updateLocalState();
  }, []);
  
  return (
    <div className="App">
      <h1 className="heading">ToDo List</h1>
      <Add

      additem={additem}
      setAdditem={setAdditem}
      localstore={localstore}
      inputref={inputref}
      addlocal={addlocal}
      handledeleteitem={handledeleteitem}
      handlecheckbox={handlecheckbox}
      
      />
      <h2 className='footer'>{addlocal.length}&nbsp;&nbsp;{addlocal.length>1?'List Items':'List Item'}</h2>
    </div>
  );
}

export default App;
