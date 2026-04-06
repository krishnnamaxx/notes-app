import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask=[...task];
    newTask.push({title,details});
  setTask(newTask);

    setTitle('');
    setDetails('');

    
  }
  const taskDelete=(index)=>{
    const newTask=[...task];
    newTask.splice(index,1)
    setTask(newTask);
  }
 

  return (
    <div className='h-screen bg-black  text-white lg:flex '>
  
    <form onSubmit={(e)=>{
        handleSubmit(e)
      }}
      className='flex  flex-col  p-10 gap-4 lg:w-1/2 items-start  '>
         <h1 className='text-3xl font-bold '>Add Notes</h1>
       
         <input 
        type="text" 
        placeholder='Notes Heading' 
        className='px-5  w-full py-2 border-2 font-medium rounded outline-none '
        value={title}
        onChange={(e)=>{
         setTitle(e.target.value)
        }}
        />
        <textarea  type='text' 
        placeholder='Notes here'
        className='px-5 w-full h-30 py-2  flex flex-row items-start border-2 rounded outline-none  font-medium'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button className='bg-white  active:scale-95 w-full text-black px-5 py-2 rounded  outline-none  font-medium'>Add</button>
    
      </form>
<div className='  lg:w-1/2 p-10 lg:border-l-2 '>
<h1 className='text-2xl font-bold'>Recent Notes </h1>
  <div className='flex flex-wrap gap-4 mt-4  h-[90%] overflow-auto items-start justify-start  '>
        {task.map((elem,index)=>{
          return <div  key={index}className=" flex justify-between flex-col items-start relative h-52 w-40 rounded-xl  px-10 pt-10 pb-4 text-black bg-cover  bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
            
          <div>
              <h1 className='leading-tight text-xl font-bold '>{elem.title}</h1>
            <p className='mt-4 leading-tight font-medium text-gray-700'> {elem.details}</p>
            </div>
            <button  onClick={()=>{
              taskDelete(index)
            }}className='w-full cursor-pointer active:scale-95 bg-pink-600 text-white py-1  rounded font-bold text-xs'>delete</button>
            
          </div>
        })

        }
  
  
  </div>
</div>
    </div>
  )
}

export default App
