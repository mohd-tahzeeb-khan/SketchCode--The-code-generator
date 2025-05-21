'use client'
// import boxicons from "boxicons";
import boxicons from "boxicons";
import Image from "next/image";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CreateFrame = () => {
    const [description, setDescription] = useState("")
    const [previewUrl, setPreviewUrl] = useState(null)
    const [aiModel, setAiModel] = useState("AI Model")
    const onImageSelect = (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        if (url) {
            setPreviewUrl(url)
        }
    }

    const ailist = [
        { icon: "/logos/gemini.png", title: "Google Gemini" },
        { icon: "/logos/grok.png", title: " X Grok" },
        { icon: "/logos/deepseek.png", title: "DeepSeek" },
        { icon: "/logos/gpt-35.webp", title: "GPT 3.0" },
       
    ]
    return (
        <>
            <div className="flex flex-col  sm:flex-col md:flex-col lg:flex-row w-full gap-24 justify-center">

                {!previewUrl ? (<div id="upload" className="m-2  border-2 border-dashed border-black max-w-[100%] min-w-[90%] lg:max-w-[50%] lg:min-w-[40%] flex flex-col items-center justify-center py-10">
                    <i className='bx bxs-cloud-upload bx-tada text-9xl text-black'  ></i>
                    <h3 className="text-black">Select your wireframe Image.</h3>
                    {/* <button className="text-black bg-slate-200 border border-black px-5 py-2 mt-10">Select Image</button> */}
                    <label htmlFor="selectdesign" className="text-black bg-slate-200 border rounded-md border-black px-5 py-2 mt-10 hover:bg-slate-300 hover:scale-105" >Select Design</label>
                    <input id="selectdesign" multiple="false" type="file" className="hidden" onChange={onImageSelect}></input>
                </div>) : (<div id="upload" className="m-2  border-2 border-black max-w-[100%] min-w-[90%] lg:max-w-[50%] lg:min-w-[40%] flex flex-col items-center justify-center py-10">
                    <Image src={previewUrl} width={300} height={230} />
                    <label htmlFor="selectdesign" className="text-black bg-slate-200 border rounded-md border-black px-5 py-2 mt-10 hover:bg-slate-300 hover:scale-105" >{!previewUrl ? "Select Design" : "Change Design"}</label>
                    <input id="selectdesign" multiple="false" type="file" className="hidden" onChange={onImageSelect}></input>
                </div>)}






                <div id="textbar" className="m-2 border-2  border-black max-w-[100%] min-w-[90%] lg:max-w-[50%] lg:min-w-[40%] p-2 sm:p-3 md:p-5 lg:px-10 lg:py-10">
                    <div>
                        <h2 className="font-bold">Select AI Model</h2>
                        <div className="py-4 px-2 border shadow-md my-2  rounded-md">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="text-[20px]"> <i className='bx bxs-magic-wand text-[24px]'></i> {aiModel}<i class='bx bx-chevron-down'></i></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>List of Models</DropdownMenuLabel>
                                    {ailist.map((models, index)=>(
                                        <DropdownMenuItem onSelect={() => { setAiModel(models.title);}}><Image src={models.icon} width={20} height={20} />{models.title}</DropdownMenuItem>
   
                                    ))}                                    
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <h2 className="font-bold">Enter Description about your Design.</h2>
                        <textarea
                            id="description"
                            rows={8}
                            cols={50}
                            placeholder="Prompt(Optional)"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            className="border rounded shadow-md px-4 py-2 w-[100%] h-[100%]"
                        ></textarea>
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center items-center mt-10">
                <button className=" bg-[#DFD0B8] text-[#222831] border-[#393E46] border border-dashed py-2 px-4 flex justify-center items-center gap-5 ">
                    <i className='bx bx-cog bx-spin bx-flip-horizontal text-3xl' ></i> Build Code
                </button>
            </div>
        </>
    )
}

export default CreateFrame;