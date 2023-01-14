
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://i.imgur.com/fXv9uGJ.jpg" className="max-w-3xl rounded-lg shadow-2xl" />
      <div>
        <p className="py-6 text-5xl font-serif"> <b className='underline decoration-wavy decoration-yellow-400'>🐱🌱</b> is my garden that will keep growing..</p>
        <Link href={'https://academy-lessons.vercel.app/'}>
      <button className="btn btn-block btn-primary">Get Started</button>
      </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero