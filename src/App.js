import { useRef, useState } from 'react'

export default function VideoPlayer() {
  const ref = useRef()
  const [isPlaying,setIsPlaying]=useState(false)

  console.log(ref.current)

  const handlePlay=()=>{
    if(ref.current && ref.current.paused){
      ref.current.play()
      setIsPlaying(true)  
  }
  
  }
  const handlePause=()=>{
    if(ref.current && !ref.current.paused){
      ref.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 ref={ref} className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        ref={ref}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
        <button onClick={handlePause} className='text-orange-500 font-semibold' >Duraklat</button>
        <div>{isPlaying?'oynatılıyor':'duraklatıldı'}</div>
        <button onClick={handlePlay} className='text-indigo-500 font-semibold'>Oynat</button>
      </div>
    </div>
  )
}
