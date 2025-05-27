import { db } from '@/db';
import { ImageDetails } from '@/db/schema';
import { v2 as cloudinary } from 'cloudinary';
import { ConsoleLogWriter } from 'drizzle-orm';
import streamifier from 'streamifier';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const formdata = await req.formData();
  const description = formdata.get("description")
  const model = formdata.get("model")
  const file = formdata.get("file")
  const user_id = formdata.get("user_id")
  const clerk_id = formdata.get("clerk_id")
  const createdby = formdata.get("createdby")
  console.log("details:", model, file, description, user_id, clerk_id, createdby)
  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadFromBuffer = () =>
    new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) resolve(result);
        else reject(error);
      });

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });

  try {
    const result = await uploadFromBuffer();
    const imgurl = result.secure_url;
    const dbresult = await db.insert(ImageDetails).values({
      img_url: imgurl,
      model: model,
      description: description,
      createdby: createdby,
      user_id: user_id,
      clerk_id: clerk_id
    }).returning({ id: ImageDetails.id, url: ImageDetails.img_url });
    const [{ id, url }] = dbresult
    return Response.json({ id, url });
  } catch (error) {
    console.log(error.message)
    return new Response("Upload failed", { status: 500 });
  }
}
