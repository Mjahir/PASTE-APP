import React, { useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { use } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParam, setSearchParam] = useSearchParams('');
    const pasteId = searchParam.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.value);

        }
    }, [pasteId]);

    function createPaste() { 
        const paste = {
            title: title,
            value: value,
            _id: pasteId || 
                Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

   
        

        if (pasteId) {
            // update
            dispatch(updateToPastes(paste));
        }
        else {
            // create
            dispatch(addToPastes(paste));
        }

        // after creation or updation
        setTitle('');
        setValue('');
        setSearchParam({});

    }


  return (
      <div className='p-4 bg-gray-100 rounded-2xl'>
           <div className='flex flex-row gap-7 place-content-between mb-4'>
          <input 
              className='p-2 rounded-2xl mt-2 w-full '
              type="text"
              placeholder='Enter title here'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
              <button onClick={createPaste}
                  className='p-2 rounded-2xl mt-2 bg-blue-500 text-white hover:bg-blue-600 w-40'>
              {
                  pasteId ? 'Update My Paste' : 'Create My Paste'
              }
    </button>

          </div>
          <div className="mt-8">
              <textarea
                  className='p-2 rounded-2xl mt-2 w-full'
                  value={value}
                  placeholder="Enter Content here"
                  onChange={(e) => setValue(e.target.value)}
                  rows={20}
              
              
              
              
              />
          </div>
   </div>
  )
}

export default Home
