import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-green-950 w-full">
      <div className="bg-blue-600 w-full flex justify-center h-20 items-center">
        <a href="/">
          <Image className="rounded-full mr-1 flex items-center h-auto"
            src="/school/image1.png"
            alt="logo of school"
            width={60}
            height={60} 
          />
        </a>
        <a href="/">

        <h1 className="text-2xl text-white font-serif  max-w-70 flex-1 self-center justify-center pl-2 pr-2">Janta Higher Secondary Shool Shree Nager</h1>
        </a>
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


      <div className="mt-2 ml-3">
        <a className=" text-blue-300 hover:text-blue-500  font-serif hover:underline decoration-dotted" href="/ImagePart">Click for more Images</a>
      </div>


      <div className="mt-5">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <a className="font-serif ml-3 text-sm text-blue-300 hover:text-blue-500 hover:underline decoration-dotted" href="https://www.google.com/maps/place/Janta+Higher+Secondary+School+Shree+Nagar/@27.4384984,84.8520901,291351m/data=!3m1!1e3!4m6!3m5!1s0x39ec7b3a29876849:0xa4674e25cfd386b1!8m2!3d26.9686548!4d85.7094581!16s%2Fg%2F11rcwxhdt5?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D">Visit in map</a>
      </div>


      <div className="mt-10 flex justify-between bg-yellow-500">
        <div className=" max-w-[70%] rounded-2xl p-2 flex flex-col items-center justify-center ml-3">
          <h6 className="text-black">Copy right  © 2026. Janta Secondary School,Ishorpur-14,Sarlahi</h6>
        </div>

        <div className="flex items-center mr-3">
          <a href="https://www.facebook.com/singhkumarmanoj10/">
            
          <Image
            src="/school/f.png"
            alt="facebook icon"
            width={20}
            height={20}
            className="rounded-2xl size-8"
            />
            </a>

        </div>
        

      </div>

        <div className="mt-5 bg-gray-600 max-w-60 rounded-2xl p-2 flex flex-col items-center justify-center ml-3">
          <p className="text-lg text-black">Add more info then mail me        </p>
          <p className="text-sm text-black">sm6361098@gmail.com</p>
        </div>

  
    </div>
  );
}
