"use client"
import { SparklesCore } from "./components/ui/sparkles";

export default function Home() {
  return (
    <div className="h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
            {/* <SparklesCore
              id="tsparticlesfullpage"
              background="#00010e"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#FFFFFF"
            /> */}
        </div>
        {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Build great products
        </h1> */}
    </div>
  );
}
