import "./App.css";

function App() {
  return (
    <div className="text-[#FFFBAC] md:px-40 lg:px-72 px-5">
      <h1 className="text-5xl text-center font-bold mt-20 mb-10">
        THINGS <span className="text-[#473C33]">TODO</span>
      </h1>
      <div className="flex justify-between items-center">
        <button className="btn bg-[#473c33] hover:bg-[#473c33]">
          Add Task
        </button>
        <div className="dropdown dropdown-bottom dropdown-end ">
          <label
            tabIndex={0}
            className="btn m-1 bg-[#FFFBAC] text-[#473c33] hover:bg-[#FFFBAC]"
          >
            <div className="flex">
              <h1 className="mr-3">All</h1>
              <h1>></h1>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-[#FFFBAC] text-[#473c33] rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
