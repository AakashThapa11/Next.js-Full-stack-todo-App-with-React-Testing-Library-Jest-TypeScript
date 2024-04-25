"use client";
import TopicForm from "@/components/TopicForm";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <TopicForm
      useCase="Add"
      title={title}
      description={description}
      onTitleChange={handleTitleChange}
      onDescriptionChange={handleDescriptionChange}
      onSubmit={handleSubmit}
    />
  );
};

export default page;
