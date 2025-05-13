import Link from "next/link"
import Navbar from "@/components/navbar"
import ProjectCard from "@/components/project-card"

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="mb-8">
          <span className="work-tag">WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Product Design Case Studies</h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            I've assembled a collection of my recent Product Design ventures to illustrate my approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Kona Crumble"
            category="PRODUCT DESIGN"
            image="/kona-crumble.png"
            href="/work/kona-crumble"
          />
          <ProjectCard
            title="Promising NFT's"
            category="PRODUCT DESIGN"
            image="/placeholder.svg?height=400&width=600"
            href="/work/promising-nfts"
          />
          <ProjectCard
            title="Airbnb UI case study"
            category="CASE STUDY"
            image="/placeholder.svg?height=400&width=600"
            href="/work/airbnb"
          />
          <ProjectCard
            title="Skyscanner"
            category="PRODUCT DESIGN"
            image="/placeholder.svg?height=400&width=600"
            href="/work/skyscanner"
          />
          <ProjectCard
            title="Coco Canela"
            category="PRODUCT DESIGN"
            image="/placeholder.svg?height=400&width=600"
            href="/work/coco-canela"
          />
          <ProjectCard
            title="Hello Idioma"
            category="PRODUCT DESIGN"
            image="/placeholder.svg?height=400&width=600"
            href="/work/hello-idioma"
          />
        </div>
      </section>

      <footer className="container mx-auto px-6 md:px-12 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-500 mb-4">Work</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/work/kona-crumble" className="hover:underline">
                  Kona Crumble
                </Link>
              </li>
              <li>
                <Link href="/work/promising-nfts" className="hover:underline">
                  Promising NFTs
                </Link>
              </li>
              <li>
                <Link href="/work/airbnb" className="hover:underline">
                  Airbnb
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 mb-4">Daniela Bontecou</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="hover:underline">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:underline">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:hello@danielabontecou.com" className="hover:underline">
                  Email
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" className="hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 mb-4">Do you want to collaborate?</h3>
            <p className="text-gray-600">Send me an email and let's chat about what we can create together!</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
