import React, {useState} from 'react'
import { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import sendIcon from '../assets/images/send-icon.png';
import copyIcon from '../assets/images/copy.png';
import deleteIcon from '../assets/images/trash-bin.png';
import editIcon from '../assets/images/pencil.png';
import viewIcon from '../assets/images/view-point.png';
import dateIcon from '../assets/images/calendar.png';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch(); 

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.value,
        url: window.location.href,
      })
      .then(() => toast.success('Paste shared successfully'))
      .catch((error) => toast.error('Error sharing paste: ' + error))
    } else {
      toast.error('Web Share API is not supported in your browser')
    }
  }


  return (
    <div className='p-4 bg-gray-100 rounded-2xl'>
      <input
        className='p-2 rounded-2xl mt-5 min-w-[600px]'
        type='search'
        placeholder='Search Paste'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>

    {  filteredData.length > 0 &&
        filteredData.map(
          (paste) => {
            return (
              <div className='p-4 rounded-2xl bg-white shadow-md' key={paste?._id}>
                <div className='text-lg font-semibold'>
                {paste.title}
                </div >
                <div className='mt-2'>
                {paste.value}
                </div>
                <div className='flex flex-row gap-4 place-content-evenly bg-gray-900 p-2 rounded-2xl mt-4'>
                  <button className='flex items-center gap-2 bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600'>
                    <Link to={`/?pasteId=${paste._id}`}>
                      <img src={editIcon} alt='Edit' className='w-5 h-5' />
                      
                    </Link>
                  </button>

                  <button className='flex items-center gap-2 bg-blue-400 text-white p-2 rounded-2xl hover:bg-blue-600'>
                    <Link to={`/paste/${paste._id}`} >
                      <img src={viewIcon} alt='View' className='w-5 h-5' />
                      
                    </Link>
                  </button>

                  <button className='flex items-center gap-2 bg-red-400 text-white p-2 rounded-2xl hover:bg-blue-600'
                    onClick={() => handleDelete(paste?._id)}>
                    <img src={deleteIcon} alt="Delete" className='w-5 h-5' />
                    
                  </button>

                  <button className='flex items-center gap-2 bg-green-400 text-white p-2 rounded-2xl hover:bg-blue-600'
                    onClick={() => {
                    navigator.clipboard.writeText(paste.value)
                    toast.success ('Copied to clipboard')
                  }}>

                    <img src={copyIcon} alt='Copy' className='w-5 h-5' />
                    
                  </button>

                  <button className='flex items-center gap-2 bg-yellow-400 text-white p-2 rounded-2xl hover:bg-blue-600'
                    onClick={handleShare}>
                    <img src={sendIcon} alt='Share' className='w-5 h-5' />
                    
                  </button>

                </div>
                <div className='mt-2 text-sm text-gray-500 flex items-center gap-2'>
                  {new Date(paste.createdAt).toLocaleDateString()}
                  <img src={dateIcon} alt="Date"  className='w-4 h-4' />
                </div>
            </div>
          )
        }
   
        )}
      </div>
    </div>
  )
}

export default Paste
