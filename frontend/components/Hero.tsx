import React from "react"
import mainLogo from "./image/logo.svg"

const Hero = () => {
  return (
    <section id="hero" className="px-6 pt-10 md:pt-16 mb-48 md:px-10 md:mb-60">
      <img src={mainLogo} alt="" className="mb-16" width={300} />
      <h1 className="text-xl text-clr-black font-bold max-w-md md:text-3xl lg:text-4xl lg:max-w-3xl xl:max-w-4xl mb-5 md:mb-7 lg:mb-10">
        We make developer connect with projects.
      </h1>
      <p className="text-clr-black text-sm max-w-md md:max-w-lg lg:max-w-3xl md:text-base  lg:text-md">
        OpenHireHub is an open-source job management platform exclusively
        tailored for software developer recruitments built on ICP chain. Through
        this app, users can publish projects that are seeking to hire software
        developers and likewise, software developers seeking for jobs can apply
        for the respective projects published.
      </p>
    </section>
  )
}

export default Hero
