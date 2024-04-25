import React from "react";

type Props = {
  useCase: string;
  title: string;
  description: string;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TopicForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-3" onSubmit={props.onSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        value={props.title}
        onChange={props.onTitleChange}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        value={props.description}
        onChange={props.onDescriptionChange}
      />
      <button type="submit" className="bg-slate-800 text-white px-8 py-2">
        {props.useCase} Topic
      </button>
    </form>
  );
};

export default TopicForm;
