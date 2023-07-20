import React from 'react'
import {Grid} from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center w-full h-full'>
      <div className='flex justify-center m-5'>
      <Grid
  height="50"
  width="50"
  color="#00BFFF"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  
/>
</div>
<p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner