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
        <Layout className="pt-16 p-32 ">
          <AnimatedText
            text={apiData.user.about.quote}
            className="inline-block text-dark dark:text-light text-8xl font-bold w-full capitalize mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xl:text-6xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 w-[80%] mx-auto mt-10">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Description
              </h2>

              <p className="font-medium dark:text-light">
                {apiData.user.about.description}
              </p>
              <p className="my-4 font-medium dark:text-light">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
            </div>


            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={14} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={apiData.user.about.some_total} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  github repositories
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={apiData.user.about.exp_year} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
