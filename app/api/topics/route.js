import connectDB from "@/libs/mongoDB.js";
import Topic from "@/models/topicModel.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: `${title} has been added to the database` },
    { status: 201 }
  );
}

export async function GET() {
  await connectDB();
  const todos = await Topic.find();
  return NextResponse.json(todos, { status: 200 });
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: `Todo with id ${id} has been deleted` },
    { status: 200 }
  );
}
