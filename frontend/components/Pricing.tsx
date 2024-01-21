import React from "react"
import { Button } from "./ui/button"
import imageIllustration from "./image/illustration-app.png"
import imageDoc from "./image/icon-doc.png"
import imageIconGithub from "./image/icon-github.svg"
import { Link, useNavigate } from "react-router-dom"

const Pricing = () => {
  const navigate = useNavigate()
  const onClickButtonHandler = (path) => {
    // Check if the path starts with "http" to determine if it's an external link
    if (path.startsWith("http")) {
      window.location.href = path
    } else {
      // Use the navigate function for internal navigation
      // (assuming you have the necessary routes set up in your React Router)
      navigate(path)
    }
  }

  return (
    <section
      id="pricing"
      className="relative mx-auto mb-24 max-w-6xl items-center flex md:justify-evenly flex-col md:flex-row md:mb-40 lg:mb-64 "
    >
      {/* image */}

      <div className="px-20 md:px-0 md:ml-20 z-20 -translate-y-28  md:max-w-sm mx-auto ">
        <img
          src={imageIllustration}
          alt="app illustration"
          width={500}
          height={500}
        />
      </div>

      {/* pricing container */}
      <div className="py-12 px-9 bg-orange-400 md:mr-20 text-clr-white z-50 rounded-lg w-full translate-y-2 md:absolute md:right-10 md:top-72 md:w-fit   md:px-12 lg:px-14 lg:py-16 md:-translate-y-0 ">
        <h2 className="font-bold text-lg mb-3 lg:mb-6 lg:text-xl">
          Project Objective
        </h2>
        <p className="text-base mb-9 max-w-xs lg:max-w-sm lg:text-md lg:mb-12 ">
          OpenHireHub is built for the open source community specifically for
          contributors. It is a platform that matches developers to the projects
          that are seeking for their specialized skills and expertise. Moreover,
          since the ICP chain has a growing community of developers and tech
          enthusiast, OpenHireHub seeks to play the next natural step in
          matching the communities needs and requirements.
        </p>
        {/* price container */}
        {/* <div className="flex items-center mb-10 lg:mb-12">
          <strong className="text-price font-bold mr-4">$4</strong>
          <p className="text-md font-normal self"> / month</p>
        </div> */}
        {/* button container */}
        <div className="flex flex-col space-y-4 ">
          <Button
            className="py-8 rounded-2xl flex space-x-3 items-center justify-center hover:bg-clr-cyan"
            onClick={() => onClickButtonHandler("/project")}
          >
            <img src={imageDoc} alt="" className="w-6" />

            <p className="text-btn font-bold tracking-tight">
              View Project Details
            </p>
          </Button>
          <Button
            variant="secondary"
            className="flex py-8 rounded-2xl space-x-3 items-center justify-center hover:bg-clr-yellow"
            onClick={() =>
              onClickButtonHandler("https://github.com/OpenHireHub/icp-react")
            }
          >
            <img src={imageIconGithub} alt="" className="w-6" />
            <p className="text-btn font-bold tracking-tight">
              View Open Source Code
            </p>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
