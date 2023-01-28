import Image from "next/image";
import Link from "next/link";

function devguide() {
  return (
    <div className="p-32">
      <div className="card w-[500px] bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.imgur.com/GPuiGdI.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Web3 FrontEnd Development Guide</h2>
          <p>
            A step by step guide to get started and to get the general idea of
            the tooling.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-disabled">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default devguide;
