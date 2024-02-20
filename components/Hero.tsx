'use client';

import { CustomButton, Loader } from "."

import React, { useState, Suspense } from "react";

const Spline = React.lazy(() => import('@splinetool/react-spline'));


const Hero = () => {

    const [isLoading, setIsLoading] = useState(true);

    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    const handleLoad = () => {
        setIsLoading(false);
    }


    return (
        <div className="hero">
            <div className="flex-1 pt-36  px-10">
                <h1 className="hero__title">
                    Robots Do It Better.
                </h1>

                <p className="hero__subtitle">
                    Rent robots for a wide range of tasks.<br />
                    Easy and effortless.
                </p>

                <CustomButton
                    title={"Explore"}
                    containerStyles="bg-primary-green text-white rounded-full mt-10 py-4 px-7 hover:bg-primary-green-200 transition-all duration-300 ease-in-out"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    {isLoading && <div className="flex items-center justify-center"><Loader /></div>}
                    <Suspense fallback={<Loader />}>
                        <Spline scene="https://prod.spline.design/Su2FhnA89Atb2RcQ/scene.splinecode" onLoad={handleLoad} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Hero