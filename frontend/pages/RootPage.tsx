import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import React from "react"
import { Link } from "react-router-dom"
import imageIconGithub from "../components/image/icon-github.svg"
import imageLogo from "../components/image/logo.svg"
import "./rootpage.css"

const RootPage = () => {
  return (
    <>
      <main id="root-page">
        <Hero />
        <Pricing />
      </main>
      <footer id="footer" className="mx-auto mb-28 px-6  max-w-6xl md:px-10">
        {/* footer flex container */}
        <div className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:justify-between">
          {/* footer logo & copyright container */}
          <div className="flex flex-col space-y-8 lg:w-2/3 lg:flex-row lg:space-y-0 lg:justify-between">
            <img src={imageLogo} alt="logo" className="w-44" />
            <p className="text-sm text-clr-black leading-7 max-w-sm">
              All rights reserved © openhirehub 2024 Have any problems? Contact us
              via email at{" "}
              <Link to="mailto:openhirehub@gmail.com" className="font-bold">
                openhirehub@gmail.com
              </Link>
            </p>
          </div>

          {/* social icons */}
          <div className="flex space-x-5 items-center">
            <Link to="https://github.com/OpenHireHub/icp-react">
              <img
                width={40}
                height={20}
                src={imageIconGithub}
                alt="facebook icon"
                className="ficon"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default RootPage
