import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import useUserData from "@/components/hooks/useUserData";
import apiData from "@/pages/api/api_data.json";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const { userData, loading, error } = useUserData();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Gaurav | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-16 p-4 sm:p-8 ">
          <AnimatedText
            text={apiData.user.about.quote}
            className="inline-block text-dark dark:text-light text-4xl md:text-5xl lg:text-6xl font-bold w-full capitalize mb-8 !leading-tight sm:mb-10 xl:mb-16"
          />
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 xl:gap-16 w-[80%] mx-auto">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Description
              </h2>

              <p className="font-medium dark:text-light">
                {apiData.user.about.description}
              </p>

            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="mb-8 md:mb-12">
                <span className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold dark:text-light">
                  <AnimatedNumbers value={14} />+
                </span>
                <h2 className="text-base md:text-lg font-medium capitalize text-dark/75 dark:text-light/75 mt-2">
                  projects completed
                </h2>
              </div>
              <div className="mb-8 md:mb-12">
                <span className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold dark:text-light">
                  <AnimatedNumbers value={apiData.user.about.some_total} />+
                </span>
                <h2 className="text-base md:text-lg font-medium capitalize text-dark/75 dark:text-light/75 mt-2">
                  github repositories
                </h2>
              </div>
              <div className="mb-8 md:mb-12">
                <span className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold dark:text-light">
                  <AnimatedNumbers value={apiData.user.about.exp_year} />+
                </span>
                <h2 className="text-base md:text-lg font-medium capitalize text-dark/75 dark:text-light/75 mt-2">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <hr /> 
          <br />
          
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
