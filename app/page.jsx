"use client"
import { useEffect, useRef } from "react";
import styles from './page.module.css';
import Navbar from "./components/section/Navbar";
import { SparklesCore } from "./components/ui/sparkles";

export default function Home() {
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;

  useEffect(() => {
    setPath(initialCurve)
  }, [])

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  const setPath = (curve) => {
    const width = window.innerWidth
    const height = loaderHeight();
    path.current.setAttributeNS(null, "d",
      `M0 0
      L${width} 0
      L${width} ${height}
      Q${width/2} ${height - curve} 0 ${height}
      L0 0`
      )
  }
  
  return (
    <>
    <main className={styles.main}>
      <div className={styles.body}>
          {/* <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="#00010e"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
          </div> */}
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
              JOHN FRANCIS <br /> ABSALON
          </h1>
      </div>
      <div ref={loader} className={styles.loader}>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
    </main>
    </>
  );
}
