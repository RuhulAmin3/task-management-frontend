import React from "react";
import Form from "./Form";
import TextInput from "../ui/TextInput";
import SelectInput from "../ui/SelectInput";
import { Button, DialogFooter } from "@material-tailwind/react";
import { priorityOptions, statusOptions } from "@/constants";
import { useUpdateTaskMutation } from "@/redux/feature/task/taskApi";
import { toast } from "react-toastify";
import LoadingSpinner from "../ui/Loading";

type TaskEditFormType = {
  handleOpen: () => void;
  task: {
    id: string;
    title: string;
    priority: string;
    status: string;
  };
};

const TaskEditForm = ({ handleOpen, task }: TaskEditFormType) => {
  const [updateTask, taskOptions] = useUpdateTaskMutation();

  const defaultValues = {
    title: task?.title,
    priority: task?.priority,
    status: task?.status,
  };

  const onSubmit = async (data: any) => {
    try {
      const res = await updateTask({ id: task?.id, body: data }).unwrap();
      if (res?.success) {
        handleOpen();
        toast.success("task updated successfully", { autoClose: 1000 });
      }
    } catch (err) {
      toast.error("failed to update task", { autoClose: 1000 });
    }
  };

  return (
    <Form
      submitHandler={onSubmit}
      className="flex flex-col gap-4"
      defaultValues={defaultValues}
    >
      <TextInput
        name="title"
        label="Task Title"
        size="lg"
        type="text"
        required
      />
      <SelectInput
        name="status"
        label="Task status"
        size="lg"
        options={statusOptions}
        required
      />
      <SelectInput
        required
        name="priority"
        label="Task priority"
        size="lg"
        options={priorityOptions}
      />
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          type="submit"
          variant="gradient"
          color="green"
          disabled={taskOptions.isLoading}
        >
          {taskOptions.isLoading ? (
            <div className="flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <span>Update Task</span>
          )}
        </Button>
      </DialogFooter>
    </Form>
  );
};

export default TaskEditForm;
