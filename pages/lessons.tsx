
import Image from 'next/image'
import Link from 'next/link'
import LessonCard from '../components/LessonCard'
import LessonCard1 from '../components/LessonCard1'
import LessonCard2 from '../components/LessonCard2'
import Text from '../components/Text'


const Lessons = () => {
  return (
    <div  className="py-14">

<div className='pt-2 pb-10 px-32'>

<Text/>
</div>


     <div className='flex justify-around'>
    
    <LessonCard/> 
    <LessonCard1/> 
    <LessonCard2/> 
    </div>
    </div>
  )
}

export default Lessons