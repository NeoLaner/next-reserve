import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
     
      return Response.json("hi");
   
    } catch (error) {
     
    }
  }