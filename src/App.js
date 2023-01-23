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
        <select
          id="sort"
          class="bg-[#FFFBAC] p-2.5 font-semibold text-[#473C33] rounded-lg"
        >
          <option selected value="all">
            All
          </option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </select>
      </div>
      <div className="bg-[#FFFBAC] w-full p-4 mt-2 grid  gap-y-2 rounded-lg">
        {/* <div className="badge badge-lg bg-[#473c33] w-max mx-auto  rounded-lg py-4">
          No Things TODO
        </div> */}
        <div className="bg-[#473C33] text-white flex items-center rounded-lg p-3">
          <input
            type="checkbox"
            className="accent-lime-300 rounded-lg checkbox-md mr-3"
          />
          <div className="flex w-full justify-between items-center">
            <div className="">
              <h1 className="text-md">Task NAme</h1>
              <h1 className="text-sm">3.30pm 12/12/12</h1>
            </div>
            <div className="flex">
              <div className="mr-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
