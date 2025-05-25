import ProjectCard from "./cards";

export default function ProjectGrid() {
    
const projects = [
    {
      title: "AI Chatbot",
      model: "GPT-4",
      description: "A smart chatbot that answers questions based on a knowledge base.",
      image: "https://res.cloudinary.com/dmhvprcui/image/upload/v1748168476/k4si2onwusi134kpz3hd.png",
    },
    {
      title: "Image Generator",
      model: "Stable Diffusion",
      description: "Generate stunning images based on text input using AI.",
      image: "https://res.cloudinary.com/dmhvprcui/image/upload/v1747995097/xelnhxw4sawokwvk2416.jpg",
    },
    {
        title: "AI Chatbot",
        model: "GPT-4",
        description: "A smart chatbot that answers questions based on a knowledge base.",
        image: "https://res.cloudinary.com/dmhvprcui/image/upload/v1748168476/k4si2onwusi134kpz3hd.png",
      },
      {
        title: "Image Generator",
        model: "Stable Diffusion",
        description: "Generate stunning images based on text input using AI.",
        image: "https://res.cloudinary.com/dmhvprcui/image/upload/v1747995097/xelnhxw4sawokwvk2416.jpg",
      },
    // Add more projects here...
  ];

  return (
    <section className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}