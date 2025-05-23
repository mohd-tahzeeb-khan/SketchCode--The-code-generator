import { db } from '@/db';
import { ImageDetails } from '@/db/schema';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const formdata = await req.formData();
  const description=formdata.get("description")
  const model=formdata.get("model")
  const file=formdata.get("file")

//   const file = formData.get('file'); // Assuming you're sending a field named "file"
    console.log("details:", model, file, description)
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
    const imgurl=result.secure_url;
    const dbresult=await db.insert(ImageDetails).values({
        img_url:imgurl,
        model:model,
       description:description,
       
       
       
        // descriptio
        // code:varch
        // createdby:
        // user_id:in
        // clerk_id:v
    })
    return Response.json({ url: result.secure_url });
  } catch (error) {
    return new Response("Upload failed", { status: 500 });
  }
}
