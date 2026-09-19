
import Image from "next/image";


export default function ImagePart(){
    return(
        <div className="dark:bg-green-950">
            <h1 className=" flex justify-center items-center text-2xl font-mono">Additional Images</h1>

            <div className="flex flex-col gap-2">
              
              <Image
                className=" w-full rounded-2xl border-2 border-amber-300 mb-3"
                src="/school/Screenshot 2026-09-19 103622.png"
                alt="school"
                width={300}
                height={200}
                
                />

              <Image
                className="w-full rounded-2xl border-2 border-amber-300 mb-3"
                src="/school/Screenshot 2026-09-19 101959.png"
                alt="school"
                width={300}
                height={200}
                
                />

              <Image
                className="w-full rounded-2xl border-2 border-amber-300 mb-3"
                src="/school/Screenshot 2026-09-19 102042.png"
                alt="school"
                width={300}
                height={200}
                
                />

              <Image
                className="w-full rounded-2xl border-2 border-amber-300 mb-3"
                src="/school/Screenshot 2026-09-19 102102.png"
                alt="school"
                width={300}
                height={200}
                
                />

              <Image
                className="w-full rounded-2xl border-2 border-amber-300 mb-3"
                src="/school/Screenshot 2026-09-19 102503.png"
                alt="school"
                width={300}
                height={200}
                
                />

            </div>
        </div>
    );
}