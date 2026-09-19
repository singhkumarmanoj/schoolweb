import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-black flex w-full">
      <div className="bg-blue-600 w-full flex justify-center">
        <Image className="rounded-full mr-1"
          src="/image1.png"
          alt="logo of school"
          width={60}
          height={20} />
        <h1 className="text-2xl font-serif bg-amber-500 max-w-70 flex-1 self-center justify-center pl-2 pr-2">Janta Higher Secondary Shool Shree Nager</h1>
      </div>
      
  
    </div>
  );
}
