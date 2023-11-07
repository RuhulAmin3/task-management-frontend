"use client";
import TaskAddForm from "@/components/Forms/TaskAddForm";
import Modal from "@/components/ui/Modal";
import TaskItem from "@/components/ui/TaskItem";

import React, { useState } from "react";
import { DialogBody } from "@material-tailwind/react";
import { useGetTasksQuery } from "@/redux/feature/task/taskApi";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

const AllTaskPage = () => {
  const { data, isLoading, isSuccess, isError } = useGetTasksQuery({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <ErrorPage />;
  } else if (!isLoading && !isError && isSuccess) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
        {data?.data?.map((task: any) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
    );
    if (data?.meta?.total == 0) {
      content = (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg mb-6 text-red">No Task Added yet</p>
        </div>
      );
    }
  }

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
      {content}
      <Modal handleOpen={handleOpen} header="Task Add Form" open={open}>
        <DialogBody>
          <TaskAddForm handleOpen={handleOpen} />
        </DialogBody>
      </Modal>
    </>
  );
};

export default AllTaskPage;
