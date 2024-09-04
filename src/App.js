import { useRef } from 'react'

export default function VideoPlayer() {
  const ref = useRef()

  console.log(ref.current)

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 ref={ref} className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
        <button className='text-orange-500 font-semibold'>Duraklat</button>
        <div>Duraklatıldı</div>
        <button className='text-indigo-500 font-semibold'>Oynat</button>
      </div>
    </div>
  )
}
