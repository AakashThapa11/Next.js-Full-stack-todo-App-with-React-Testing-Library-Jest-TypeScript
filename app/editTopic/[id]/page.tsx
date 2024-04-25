"use client";
import TopicForm from "@/components/TopicForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "mongoose";

const page = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/topics/${id}`);
        if (res.ok) {
          const data = await res.json();
          setTitle(data.title);
          setDescription(data.description);
        } else {
          throw new Error("Failed to fetch topic details");
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    };

    fetchData();
  }, [id]);

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
      const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle: title, newDescription: description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <TopicForm
      useCase="Edit"
      title={title}
      description={description}
      onTitleChange={handleTitleChange}
      onDescriptionChange={handleDescriptionChange}
      onSubmit={handleSubmit}
    />
  );
};

export default page;
