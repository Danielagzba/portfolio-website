import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight md:leading-tight max-w-5xl">
          Hi, I'm Daniela,{" "}
          <p>
            a <span className="accent-text">Graphic Designer</span>{" "}
          </p>
          located all around the world
        </h1>
      </div>

      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="mb-6 sm:mb-8">
          <span className="work-tag text-xs sm:text-sm">WORK</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Projects</h2>
          <p className="text-gray-500 mt-2 max-w-full sm:max-w-xl text-sm sm:text-base">
            I've assembled a collection of my recent Product Design ventures to
            illustrate my approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ProjectCard
            title="Talasofilia Pilates"
            category="PRODUCT DESIGN"
            image="https://i.imgur.com/bxDCfyA.png"
            href="/talasofilia-pilates"
          />
          <ProjectCard
            title="Kona Crumble"
            category="PRODUCT DESIGN"
            image="thumbnail copy.png"
            href="/kona-crumble"
          />
          <ProjectCard
            title="Promising NFT's"
            category="PRODUCT DESIGN"
            image="/promising.png?height=400&width=600"
            href="/promising-nfts"
          />
          <ProjectCard
            title="Airbnb UI case study"
            category="CASE STUDY"
            image="/bnb.jpg"
            href="/airbnb"
          />
          <ProjectCard
            title="Skyscanner"
            category="CASE STUDY"
            image="/sky.webp"
            href="/skyscanner"
          />
          <ProjectCard
            title="Coco Canela"
            category="GRAPHIC DESIGN"
            image="/coco.jpg"
            href="/coco-canela"
          />
          <ProjectCard
            title="Hello Idioma"
            category="PRODUCT DESIGN"
            image="/hello.png"
            href="/hello-idioma"
          />
          <ProjectCard
            title="Servigrafic Solutions"
            category="GRAPHIC DESIGN"
            image="https://i.imgur.com/C68oKiA.png"
            href="/servigrafic-solutions"
          />
        </div>
      </section>


      <footer className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 border-t border-gray-200">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Work</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/kona-crumble" className="hover:underline">
                  Kona Crumble
                </Link>
              </li>
              <li>
                <Link href="/promising-nfts" className="hover:underline">
                  Promising NFTs
                </Link>
              </li>
              <li>
                <Link href="/airbnb" className="hover:underline">
                  Airbnb
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Daniela Bontecou</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <Link href="" className="hover:underline">
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
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="mailto:hello@danielabontecou.com"
                  className="hover:underline break-words"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Do you want to collaborate?</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Send me an email and let's chat about what we can create together!
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
