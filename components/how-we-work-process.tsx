import Image from "next/image"

export default function HowWeWorkProcess() {
  const processSteps = [
    {
      image: "/images/hww1.png",
      alt: "People toasting drinks",
      title: "Connection",
      description:
        "The first step is the meeting, either in-person or virtually. Getting to know you, your style, your functional needs, budget, and timeline are just a few of the things we'll discuss initially to ensure that the end result is something we can both be proud of.",
    },
    {
      image: "/images/hww2.png",
      alt: "Fabric and material samples",
      title: "Design Presentation",
      description:
        "The second step is our official 'jump off' point into the design concept for your space. Floor plans, furniture layouts, elevations, and selections for finishes, materials, fabrics and finishes are presented to you for approval. This step generally entails multiple collaboration meetings to ensure all details are just right.",
    },
    {
      image: "/images/hww3.png",
      alt: "Cash register",
      title: "Purchasing",
      description:
        "In this step, purchase orders are created and submitted for approval before ordering. Once ordered, delivery times will be estimated and all orders will be monitored.",
    },
    {
      image: "/images/hww4.png",
      alt: "Interior design installation",
      title: "Installation",
      description:
        "This is the most exciting step! All items are delivered and installed. We will be on-site to ensure that everything is placed correctly and that the space is styled to perfection.",
    },
    // {
    //   image: "/images/hww1.png",
    //   alt: "Happy client with new interior",
    //   title: "Completion",
    //   description:
    //     "The final step is the reveal! We will walk through the space with you to ensure that you are completely satisfied with the results. We will also provide you with a comprehensive project binder for your records.",
    // },
  ]

  return (
    <section id="how-we-work-process" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-serif tracking-widest uppercase mb-4">HOW WE WORK</h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>
           <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
             {processSteps.map((step, index) => (
               <li
                 key={index}
                 className={
                   `relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-lg p-8 flex flex-col items-center md:items-start transition-transform duration-300 hover:scale-[1.025] border-l-4 ${
                     [
                       'border-blue-400',
                       'border-green-400',
                       'border-yellow-400',
                       'border-pink-400',
                     ][index % 4]
                   }`
                 }
               >
                 <div className="flex items-center mb-4">
                   <span className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white font-bold text-lg mr-4 shadow-md">
                     {index + 1}
                   </span>
                   <h3 className="text-xl md:text-2xl font-playfair font-bold tracking-wide uppercase text-gray-900">
                     {step.title}
                   </h3>
                 </div>
                 <p className="text-gray-700 font-lora text-base md:text-lg leading-relaxed text-center md:text-left">
                   {step.description}
                 </p>
               </li>
             ))}
           </ol>
      </div>
    </section>
  )
}
