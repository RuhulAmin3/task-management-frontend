import React from "react";
import Form from "./Form";
import TextInput from "../ui/TextInput";
import SelectInput from "../ui/SelectInput";
import { Button, DialogFooter } from "@material-tailwind/react";
import { priorityOptions, statusOptions } from "@/constants";
import { useAddTaskMutation } from "@/redux/feature/task/taskApi";
import { toast } from "react-toastify";
import { getUserInfo } from "@/utils";
import { IUser } from "@/types";
import LoadingSpinner from "../ui/Loading";

const TaskAddForm = ({ handleOpen }: { handleOpen: () => void }) => {
  const [addTask, taskOptions] = useAddTaskMutation();
  const onSubmit = async (data: any) => {
    try {
      const userData: IUser | undefined = getUserInfo();
      let taskdata = data;
      if (userData) {
        taskdata = { ...data, userId: userData?.id };
      }
      const res = await addTask(taskdata).unwrap();
      console.log(res?.data);
      if (res?.success) {
        handleOpen();
        toast.success("task added successfully", { autoClose: 1000 });
      } else {
        handleOpen();
        toast.error("failed to add task", { autoClose: 1000 });
      }
    } catch (err) {
      handleOpen();
      toast.error("failed to add task", { autoClose: 1000 });
    }
  };

  return (
    <Form submitHandler={onSubmit} className="flex flex-col gap-4">
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
        <Button type="submit" variant="gradient" color="green">
          {taskOptions?.isLoading ? (
            <div className="flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <span>Add Task</span>
          )}
        </Button>
      </DialogFooter>
    </Form>
  );
};

export default TaskAddForm;
