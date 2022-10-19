import React from 'react';
  
const Home = () => {
    const floors=["sports","language learning","world","board games","game development","music","mythology","architecture","Engineering","economics","law"]
  
  return (
    <div style={{height:"100vh"}}>
      <div className="w-full bg-blue-100">The Irregulars</div>
  <div className='flex flex-col w-1/4 h-full bg-purple-400'>
    {
      floors.map((floor)=>{
        return (
          <div className=' text-white border-1 rounded-lg bg-indigo-400 my-1 py-2 hover:bg-purple-500 cursor-pointer'>{floor}</div>
        )
      })
    }
    </div>
  </div>
    
  );
};
  
export default Home;