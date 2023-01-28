import Link from "next/link";

function about() {
  return (
    <div className="p-32">
      <div className="card w-[500px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">meow</h2>
          <div className="py-14">
            <Link href={"https://twitter.com/meowcademy"}>
              <button className="btn btn-info">Twitter</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
