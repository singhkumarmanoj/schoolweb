import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-black w-full">
      <div className="bg-blue-600 w-full flex justify-center">
        <Image className="rounded-full mr-1"
          src="/school/image1.png"
          alt="logo of school"
          width={60}
          height={20} />
        <h1 className="text-2xl text-gray-50 font-serif  max-w-70 flex-1 self-center justify-center pl-2 pr-2">Janta Higher Secondary Shool Shree Nager</h1>
      </div>

      <div className="border-2 border-amber-200 rounded-2xl m-1">
        <Image 
          className="w-full rounded-2xl "
        
          src="/school/group.jpg"
          alt="group image of our teachers"
          width={300}
          height={200}
          
          
          />
      </div>
  
    </div>
  );
}
