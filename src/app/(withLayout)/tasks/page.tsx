"use client";
import TaskAddForm from "@/components/Forms/TaskAddForm";
import Modal from "@/components/ui/Modal";
import TaskItem from "@/components/ui/TaskItem";

import React, { useState } from "react";
import { DialogBody } from "@material-tailwind/react";

const AllTaskPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={handleOpen}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2"
        >
          Add Task
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TaskItem
          task={{
            priority: "High",
            status: "InProgress",
            title: "Complete task management website",
          }}
        />
        <TaskItem
          task={{
            priority: "High",
            status: "InProgress",
            title: "Complete task management website",
          }}
        />
        <TaskItem
          task={{
            priority: "High",
            status: "InProgress",
            title: "Complete task management website",
          }}
        />
        <TaskItem
          task={{
            priority: "Medium",
            status: "Completed",
            title: "Complete task management website",
          }}
        />
        <TaskItem
          task={{
            priority: "Low",
            status: "Pending",
            title: "Complete task management website",
          }}
        />
      </div>
      <Modal handleOpen={handleOpen} header="Task Add Form" open={open}>
        <DialogBody>
          <TaskAddForm handleOpen={handleOpen} />
        </DialogBody>
      </Modal>
    </>
  );
};

export default AllTaskPage;
