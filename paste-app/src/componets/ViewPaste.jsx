import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'
import { useParams } from 'react-router-dom'
import { use } from 'react'


const ViewPaste = () => {

  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("Final pastes",paste);

  return (
    <div className='p-4 bg-gray-100 rounded-2xl'>
    <div className='flex flex-row gap-7 place-content-between mb-4'>
   <input 
       className='p-2 rounded-2xl mt-2 w-full '
       type="text"
       placeholder='Enter title here'
          value={paste.title}
          disabled
       onChange={(e) => setTitle(e.target.value)}
   />
       {/* <button onClick={createPaste}
           className='p-1 rounded-2xl mt-2 w-[66%] pl-4'>
       {
           pasteId ? 'Update My Paste' : 'Create My Paste'
       }
</button> */}

   </div>
   <div className="mt-8">
       <textarea
           className="rounded-2xl mt-4 min-w-[500px] p-4 bg-white shadow-md"
           value={paste.value}
          placeholder="Enter Content here"
          disabled
           onChange={(e) => setValue(e.target.value)}
           rows={20}
       
       
       
       
       />
   </div>
</div>
  )
}

export default ViewPaste
