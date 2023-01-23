import React from "react";

const Task = () => {
  return (
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
          <button className="mr-2">
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
          </button>
          <label htmlFor="edit-task">
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
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="edit-task" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative bg-[#FFFBAC] text-[#473C33]">
              <label
                htmlFor="edit-task"
                className="btn btn-sm btn-circle bg-[#473C33] absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold mb-4">EDIT THINGS TODO</h3>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-md font-medium">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered bg-transparent border-0 border-[#473C33] border-b-2 rounded-none placeholder:text-[#473C33] placeholder:text-xs  focus:outline-none"
                />
                <label className="label mt-4">
                  <span className="text-md font-medium">Status</span>
                </label>
                <select
                  id="sort"
                  class="bg-[#FFFBAC] p-2.5 font-semibold text-[#473C33] rounded-lg"
                >
                  <option selected value="incomplete">
                    Incomplete
                  </option>
                  <option value="complete">Completed</option>
                </select>
                <div className="flex justify-end mt-3">
                  <button className="btn bg-[#473c33] hover:bg-[#473c33] mr-1">
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;