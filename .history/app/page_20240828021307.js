import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-white h-[44vh]">
      <div className="text-3xl font-bold">Buy Me a Chai</div>
      <p>
        A crowdfunding paltform. Get funded by your fans and followers. Start now!
      </p>
       <div>
       <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button>
       <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button>
       </div>
    </div>
    
  );
}