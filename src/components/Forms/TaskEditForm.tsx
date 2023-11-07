import React from "react";
import Form from "./Form";
import TextInput from "../ui/TextInput";
import SelectInput from "../ui/SelectInput";
import { Button, DialogFooter } from "@material-tailwind/react";
import { priorityOptions, statusOptions } from "@/constants";

type TaskEditFormType = {
  handleOpen: () => void;
  task: {
    title: string;
    priority: string;
    status: string;
  };
};

const TaskEditForm = ({ handleOpen, task }: TaskEditFormType) => {
  const onSubmit = (data: any) => {
    console.log(data);
    handleOpen();
  };

  return (
    <Form
      submitHandler={onSubmit}
      className="flex flex-col gap-4"
      defaultValues={task}
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
        <Button type="submit" variant="gradient" color="green">
          <span>Update Task</span>
        </Button>
      </DialogFooter>
    </Form>
  );
};

export default TaskEditForm;
