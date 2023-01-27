import "./App.css";
import Task from "./componenets/Task";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/Action";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.newtodotitle.value;
    const status = form.newtodostatus.value;
    dispatch(addTodo(title, status));
    form.reset();
    const modal = document.getElementById("add-task");
    modal.checked = false; // will remove the modal
  }
  return (
    <div className="text-[#FFFBAC] md:px-40 lg:px-72 px-5">
      <h1 className="text-5xl animate__animated animate__jackInTheBox text-center font-bold mt-20 mb-10">
        THINGS <span className="text-[#473C33]">TODO</span>
      </h1>
      <div className="flex justify-between items-center">
        <label
          htmlFor="add-task"
          className="btn bg-[#473c33] hover:bg-[#473c33]"
        >
          Add Task
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="add-task" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative bg-[#FFFBAC] text-[#473C33]">
            <label
              htmlFor="add-task"
              className="btn btn-sm btn-circle bg-[#473C33] absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mb-4">ADD THINGS TODO</h3>
            <form onSubmit={handleAddTodo} className="form-control w-full">
              <label className="label">
                <span className="text-md font-medium">Title</span>
              </label>
              <input
                type="text"
                name="newtodotitle"
                required
                placeholder="Type here"
                className="input input-bordered bg-transparent border-0 border-[#473C33] border-b-2 rounded-none placeholder:text-[#473C33] placeholder:text-xs  focus:outline-none"
              />
              <label className="label mt-4">
                <span className="text-md font-medium">Status</span>
                <select
                  defaultValue="incomplete"
                  name="newtodostatus"
                  className="bg-[#FFFBAC] p-2.5 font-semibold text-[#473C33] rounded-lg"
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>
              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  className="btn bg-[#473c33] hover:bg-[#473c33] mr-1"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
        <select
          onChange={handleChange}
          defaultValue={selectedStatus}
          className="bg-[#FFFBAC] p-2.5 font-semibold text-[#473C33] rounded-lg"
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </select>
      </div>
      <div className="bg-[#FFFBAC] w-full p-4 mt-2 grid  gap-y-2 rounded-lg">
        {todos.filter(
          (todo) => todo.status === selectedStatus || selectedStatus === "all"
        ).length === 0 ? (
          <div className="badge badge-lg bg-[#473c33] w-max mx-auto  rounded-lg py-4">
            No Todos
          </div>
        ) : (
          todos
            .filter(
              (todo) =>
                todo.status === selectedStatus || selectedStatus === "all"
            )
            .map((todo) => <Task todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
}

export default App;
