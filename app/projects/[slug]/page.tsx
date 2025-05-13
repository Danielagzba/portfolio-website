import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

// This would typically come from a CMS or database
const projects = {
  "wellness-app": {
    title: "Wellness App Redesign",
    description: "A complete overhaul of a wellness application focusing on user engagement and accessibility",
    fullDescription:
      "This project involved redesigning a wellness application to improve user engagement and accessibility. The client wanted to create a more intuitive experience that would encourage users to engage with the app daily and make wellness a part of their routine.",
    challenge:
      "The existing app had low retention rates and users found it difficult to navigate. The challenge was to create a more intuitive interface while maintaining all the functionality users needed.",
    solution:
      "I conducted user research to understand pain points and created a new information architecture that prioritized the most used features. The redesign focused on simplifying the user journey and creating visual cues to guide users through the app.",
    outcome:
      "After the redesign, the app saw a 45% increase in daily active users and a 30% increase in session duration. User feedback was overwhelmingly positive, with many users noting the improved ease of use.",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  ecommerce: {
    title: "E-commerce Platform",
    description: "A modern shopping experience with intuitive navigation and seamless checkout flow",
    fullDescription:
      "This e-commerce platform was designed to provide a modern shopping experience with intuitive navigation and a seamless checkout flow. The goal was to increase conversion rates and average order value.",
    challenge:
      "The client was experiencing high cart abandonment rates and users were struggling to find products they were interested in. The site also needed to be optimized for mobile devices.",
    solution:
      "I redesigned the product browsing experience with improved filters and search functionality. The checkout process was streamlined to reduce friction and increase conversions.",
    outcome:
      "The new design resulted in a 25% decrease in cart abandonment and a 15% increase in average order value. Mobile conversions increased by 35%.",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  "finance-dashboard": {
    title: "Financial Dashboard",
    description: "An intuitive interface for tracking investments and managing personal finances",
    fullDescription:
      "This financial dashboard provides an intuitive interface for tracking investments and managing personal finances. The design focuses on presenting complex financial data in an accessible way.",
    challenge:
      "Financial data can be overwhelming and difficult to interpret. The challenge was to create a dashboard that would make this information accessible to users with varying levels of financial literacy.",
    solution:
      "I designed a dashboard with customizable widgets that allow users to focus on the metrics most important to them. Data visualizations were created to help users understand trends and patterns in their financial data.",
    outcome:
      "Users reported feeling more confident in their financial decision-making and spent 40% more time engaging with their financial data compared to the previous solution.",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  "travel-app": {
    title: "Travel Companion App",
    description: "A mobile application helping travelers discover local experiences and plan their trips",
    fullDescription:
      "This travel companion app helps travelers discover local experiences and plan their trips. It provides personalized recommendations based on user preferences and travel history.",
    challenge:
      "The travel market is saturated with apps that offer similar functionality. The challenge was to create a unique experience that would stand out and provide real value to travelers.",
    solution:
      "I focused on creating a highly personalized experience that would connect travelers with authentic local experiences. The app uses machine learning to improve recommendations over time.",
    outcome:
      "The app has been downloaded over 100,000 times and has a 4.8-star rating in the App Store. Users particularly appreciate the personalized recommendations and ease of trip planning.",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  healthcare: {
    title: "Healthcare Portal",
    description: "A patient-centered platform improving access to healthcare services and information",
    fullDescription:
      "This healthcare portal is a patient-centered platform that improves access to healthcare services and information. It allows patients to schedule appointments, access medical records, and communicate with healthcare providers.",
    challenge:
      "Healthcare systems are often complex and difficult to navigate. The challenge was to create a portal that would simplify the patient experience while meeting strict security and compliance requirements.",
    solution:
      "I designed a portal with a clear information hierarchy and intuitive navigation. The design prioritizes the most common patient tasks and provides clear guidance for more complex processes.",
    outcome:
      "The portal has reduced call center volume by 30% and increased patient satisfaction scores by 25%. Healthcare providers have also reported improved efficiency in patient communication.",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  "smart-home": {
    title: "Smart Home Interface",
    description: "A unified control system for connected home devices with voice and touch controls",
    fullDescription:
      "This smart home interface provides a unified control system for connected home devices with both voice and touch controls. It allows users to manage all their smart home devices from a single interface.",
    challenge:
      "Smart home ecosystems often include devices from multiple manufacturers with different control systems. The challenge was to create a unified interface that would work seamlessly with all these devices.",
    solution:
      "I designed an interface that abstracts away the complexity of the underlying systems and presents a consistent control experience regardless of the device manufacturer.",
    outcome:
      "Users reported a significant improvement in their smart home experience, with 90% saying they found it easier to control their devices with the new interface.",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <Link href="/" className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="mb-6 text-3xl font-bold md:text-5xl">{project.title}</h1>
              <p className="mb-8 text-xl text-gray-600">{project.fullDescription}</p>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
                  <p className="text-lg text-gray-700">{project.challenge}</p>
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold">The Solution</h2>
                  <p className="text-lg text-gray-700">{project.solution}</p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="mb-6 text-2xl font-bold">The Outcome</h2>
                <p className="text-lg text-gray-700">{project.outcome}</p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Project Gallery</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t border-gray-200 py-16 md:py-24">
          <div className="container px-4 text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Ready to see more?</h2>
            <p className="mb-8 text-lg text-gray-600">
              Check out my other projects or get in touch to discuss your next project.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="rounded-full px-8 py-6 text-lg">
                <Link href="/#projects">View More Projects</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-gray-300 px-8 py-6 text-lg">
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-600">© {new Date().getFullYear()} Daniel Abontecou. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Dribbble
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
