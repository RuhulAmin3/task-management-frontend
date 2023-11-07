"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { DialogBody } from "@material-tailwind/react";
import TaskEditForm from "../Forms/TaskEditForm";

type TaskItemProps = {
  title: string;
  priority: string;
  status: string;
};
type PropsType = {
  task: TaskItemProps;
};

const TaskItem = ({ task }: PropsType) => {
  const { title, priority, status } = task;
  console.log(task);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  // Define CSS classes for task priority and status
  const priorityClasses: { [key: string]: string } = {
    Low: "text-green-600",
    Medium: "text-yellow-600",
    High: "text-red-600",
    Normal: "text-orange-600",
  };

  const statusClasses: { [key: string]: string } = {
    Todo: "bg-yellow-200 text-yellow-800",
    Inprogress: "bg-blue-200 text-blue-800",
    Completed: "bg-green-200 text-green-800",
  };

  return (
    <div className={`p-4 border border-gray-300 rounded-md shadow-md mb-4`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="mb-2 flex justify-between">
        <span className={`mr-2 ${priorityClasses[priority]}`}>{priority}</span>
        <span className={`mr-2 ${statusClasses[status]}`}>{status}</span>
      </div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Edit
      </button>
      <Modal handleOpen={handleOpen} header="Task Edit Form" open={open}>
        <DialogBody>
          {/* <TaskAddForm handleOpen={handleOpen} /> */}
          <TaskEditForm handleOpen={handleOpen} task={task} />
        </DialogBody>
      </Modal>
    </div>
  );
};

export default TaskItem;
