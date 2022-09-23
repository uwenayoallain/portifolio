import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import svg from "../public/vercel.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alan | Home</title>
      </Head>
      <Parallax pages={2} className='top-0 left-0'>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          className='flex justify-center items-center'>
          <Image alt='image from unsplash' src={svg} layout='fill' />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} className='bg-red-300' />
        <ParallaxLayer offset={1} speed={0.5} className='text-white bg-red-500'>
          <div className='w-full h-full flex justify-center items-center'>
            <p>Scroll up</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
