import connectDB from "@/libs/mongoDB.js";
import Topic from "@/models/topicModel.js";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: `Todo with id ${id} has been updated` },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const topic = await Topic.findById(id);
  return NextResponse.json(topic, { status: 200 });
}
