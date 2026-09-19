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


      <div>
        <a className="text-blue-600" href="/ImagePart">Click for more Images</a>
      </div>


      <div className="mt-5">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <a className="ml-3 text-sm text-blue-200 hover:text-blue-500 hover:underline decoration-dotted" href="https://www.google.com/maps/place/Janta+Higher+Secondary+School+Shree+Nagar/@27.4384984,84.8520901,291351m/data=!3m1!1e3!4m6!3m5!1s0x39ec7b3a29876849:0xa4674e25cfd386b1!8m2!3d26.9686548!4d85.7094581!16s%2Fg%2F11rcwxhdt5?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D">Visit in map</a>
      </div>

      <div className="bg-gray-500 max-w-60 rounded-2xl p-1 flex flex-col items-center justify-center mt-10 mb-5 ml-3">
        <p className="text-lg">Add more info then mail me
        </p>
        <p className="text-sm">sm6361098@gmail.com</p>

      </div>

  
    </div>
  );
}
