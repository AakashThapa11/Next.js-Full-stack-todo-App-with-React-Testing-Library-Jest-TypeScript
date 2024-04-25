"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const RemoveBtn = (props: Props) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmMsg = confirm("Are you sure you want to delete this topic?");

    if (confirmMsg) {
      const res = await fetch(
        `http://localhost:3001/api/topics?id=${props.id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
