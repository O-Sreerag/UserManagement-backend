// services/uploadthing.ts
import { createUploadthing, type FileRouter } from "uploadthing/express";
 
const f = createUploadthing();
 
export const uploadRouter = {
  videoAndImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
    video: {
      maxFileSize: "16MB",
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("its worked...");
    
    return {
      success: true,
      file,
    };
  }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof uploadRouter;