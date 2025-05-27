"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { aiCreateContext } from "@/context/createContext";
// import codeEditor from "../codeEditor/[id]/page";

// ----------------------------------------------------------

const CreateFrame = () => {
  const route=useRouter();
  const [description, setDescription] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const {user, setUser}=useContext(userContext)
  const [aiModel, setAiModel] = useState("AI Model");
  const [imageUrl, setImageUrl] = useState(""); // Cloudinary URL
  const [loading, setLoading] = useState(false)
  const [AiModel_model, setAiModel_model] = useState('')
  const {aiCreate, setaiCreate}=useContext(aiCreateContext);


  const onImageSelect = (e) => {
    const file = e.target.files[0];
    // setSelectedFile(file);
    setImageUrl(file);
    const url = URL.createObjectURL(file);
    console.log("url: ",url)
    if (url) setPreviewUrl(url);
  };

  const handleSubmit = async () => {
    setLoading(true)
    const buttonbuild=document.getElementById("buildcode")
    buttonbuild.disabled=true
    buttonbuild.style.cursor = 'not-allowed';
    if (!imageUrl) return alert("Please select an image.");
    const formData = new FormData();
    formData.append("file", imageUrl);
    formData.append("model", aiModel);
    formData.append("description", description);
    formData.append("user_id", user.id),
    formData.append("clerk_id", user.clerkId),
    formData.append("createdby", user.username);
    
    

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data) {
        const encodeUrl=encodeURIComponent(data.url);
        console.log("Before Initailize: ",aiCreate)
        setaiCreate({
          prompt:description,
          model:AiModel_model,
          url:data.url
        })
        console.log("After Initailize: ",aiCreate)
        alert("Image uploaded successfully!");
        route.push(`/codeEditor/${encodeUrl}`)
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed.");
    }
  };

  const ailist = [
    { icon: "/logos/gemini.png", title: "Qwen2.5 Coder", model:"qwen/qwen-2.5-coder-32b-instruct:free"},
    { icon: "/logos/grok.png", title: "Agentica: Deepcoder",model:"agentica-org/deepcoder-14b-preview:free" },
    { icon: "/logos/deepseek.png", title: "OlympicCoder",model:"open-r1/olympiccoder-32b:free" },
    { icon: "/logos/gpt-35.webp", title: "Meta: Llama 3.2", model:"meta-llama/llama-3.2-11b-vision-instruct:free" },
    { icon: "/logos/deepseek.png", title: "Deepseek R1 Distill Qwen", model:"deepseek/deepseek-r1-distill-qwen-14b:free" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-24 justify-center">
        {/* Upload section */}
        {!previewUrl ? (
          <div className="m-2 border-2 border-dashed border-black max-w-[100%] min-w-[90%] lg:max-w-[50%] lg:min-w-[40%] flex flex-col items-center justify-center py-10">
            <i className="bx bxs-cloud-upload bx-tada text-9xl text-black"></i>
            <h3 className="text-black">Select your wireframe Image.</h3>
            <label htmlFor="selectdesign" className="text-black bg-slate-200 border rounded-md border-black px-5 py-2 mt-10 hover:bg-slate-300 hover:scale-105">
              Select Design
            </label>
            <input id="selectdesign" type="file" className="hidden" onChange={onImageSelect} />
          </div>
        ) : (
          <div className="m-2 border-2 border-black max-w-[100%] min-w-[90%] lg:max-w-[50%] lg:min-w-[40%] flex flex-col items-center justify-center py-10">
            <Image src={previewUrl} width={300} height={230} alt="Preview" />
            <label htmlFor="selectdesign" className="text-black bg-slate-200 border rounded-md border-black px-5 py-2 mt-10 hover:bg-slate-300 hover:scale-105">
              Change Design
            </label>
            <input id="selectdesign" type="file" className="hidden" onChange={onImageSelect} />
          </div>
        )}

        {/* Text + Model Section */}
        <div className="m-2 border-2 border-black max-w-[100%] min-w-[90%] lg:max-w-[50%] lg:min-w-[40%] p-2 sm:p-3 md:p-5 lg:px-10 lg:py-10">
          <div>
            <h2 className="font-bold">Select AI Model</h2>
            <div className="py-4 px-2 border shadow-md my-2 rounded-md">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-[20px]">
                  <i className="bx bxs-magic-wand text-[24px]"></i> {aiModel} <i className="bx bx-chevron-down"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>List of Models</DropdownMenuLabel>
                  {ailist.map((model, index) => (
                    <DropdownMenuItem key={index} onSelect={() => {setAiModel(model.title); setAiModel_model(model.model)}}>
                      <Image src={model.icon} width={20} height={20} alt={model.title} className="mr-2" />
                      {model.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <h2 className="font-bold">Enter Description about your Design.</h2>
            <textarea
              id="description"
              rows={8}
              cols={50}
              placeholder="Prompt (Optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded shadow-md px-4 py-2 w-full h-full"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center items-center mt-10">
        
        <button
          onClick={handleSubmit}
          id="buildcode"
          className="bg-[#DFD0B8] text-[#222831] border-[#393E46] border border-dashed py-2 px-4 flex justify-center items-center gap-5"
        >
          {loading?<i className="bx bx-cog bx-spin bx-flip-horizontal text-3xl"></i>:<i className="bx bx-cog bx-flip-horizontal text-3xl"></i>} Build Code
        </button>
      </div>
    </>
  );
};

export default CreateFrame;
