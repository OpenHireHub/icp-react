import React from "react"
import icpImage from "../components/image/icp-illustration.jpg"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import useScrollToTop from "@/hooks/useScrollToTop"

export default function ProjectPage() {
  useScrollToTop()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-500 object-cover"
              src={icpImage}
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-gray-600">
              OPENHIREHUB
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Project Details
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              OpenHireHub is an open-source job management platform exclusively
              tailored for software developer recruitments built on ICP chain.
              Through this app, users can publish projects that are seeking to
              hire software developers and likewise, software developers seeking
              for jobs can apply for the respective projects published.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                OpenHireHub is an exclusive app specifically built for the
                software developers. It is a platform that matches developers to
                the projects that are seeking for their specialized skills and
                expertise. Moreover, since the ICP chain has a growing community
                of developers and tech enthusiast, OpenHireHub seeks to play the
                next natural step in matching the communities needs and
                requirements.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Project Roadmap & Milestones
              </h2>
              <p className="mt-6">
                Presently, the framework development of OpenHireHub has been
                completed can be viewed in the provided GitHub repository.{" "}
                <br />
                <br />
                Inthe first month, the development of the project directory will
                take place. More specifically, the UI development of where the
                details of the projects including job requirements, period,
                vacancy and etc can be created and published by the user.
                Published projects can be viewed in the project directory. Users
                can browse through various categories of the project and apply
                to the jobs that is related to their preferences and
                requirements.
                <br />
                <br />
                The completion of the project directory will signify the
                half-way point. In the second month, the form for job seeker
                profiles will be developed. The UI development of where software
                developers will fill-up the form on information such as
                qualifications, and experiences. This profile will be available
                to for the projects when accessing the compatibility of the
                applications to the respective jobs.
                <br />
                <br />
                The forms for the two types of users (projects and software
                developers) and the respective directory display of the projects
                are the final deliverables of the OpenHireHub. These two main
                components make up the job recruitment platform. Testing of the
                app functionality will be conducted in the third month. Any
                additional features will be developed during this phase as well
                after receiving feedback from the testers.
              </p>
            </div>
            <Button className="mt-10" onClick={handleBack}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
