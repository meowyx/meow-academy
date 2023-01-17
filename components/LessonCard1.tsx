
import Image from 'next/image'
import Link from 'next/link'

const LessonCard1 = () => {
  return (
    <div className="card w-96 border-4 border-yellow-500/100 bg-base-100 px-4 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-green-400">Solidity : Advanced Concepts</h2>
    <p>In this module we will go over advanced solidity concepts and syntax.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-disabled">Coming Soon</button>
    </div>
  </div>
</div>
  )
}

export default LessonCard1