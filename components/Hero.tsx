
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">gm🌱</h1>
      <p className="py-6"> <b className='underline decoration-wavy decoration-yellow-400'>🐱 Academy</b> is an open source web3 learning resource with easy to understand content.</p>
      
      <Link href={'https://academy-lessons.vercel.app/'}>
      <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Hero