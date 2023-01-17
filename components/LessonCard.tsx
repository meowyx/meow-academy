
import Image from 'next/image'
import Link from 'next/link'

const LessonCard = () => {
  return (
    <div className="card w-96 border-4 border-yellow-500/100 bg-base-100 px-4 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-green-400">Solidity : Introduction</h2>
    <p>In this module we will go over what Solidity is and the basic syntax of Solidity.</p>
    <div className="card-actions justify-end">
    <Link href={'https://hackmd.io/@meowy/B1G3jVyoj'}>
    <button className="btn btn-primary">Start</button>
          </Link>
    </div>
  </div>
</div>
  )
}

export default LessonCard