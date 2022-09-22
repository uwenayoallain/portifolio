import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alan | Home</title>
      </Head>
      <div>
        <div className='bg-green-500'>
          <div className='m-4 w-max h-max'>
            <div>Alain</div>
            <div>Alain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
