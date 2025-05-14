import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-32">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight max-w-5xl">
          Hi, I'm Daniela,{" "}
          <p>
            a <span className="accent-text">Graphic Designer</span>{" "}
          </p>
          located all around the world
        </h1>
      </div>

      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="mb-8">
          <span className="work-tag">WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
          <p className="text-gray-500 mt-2 max-w-xl">
            I've assembled a collection of my recent Product Design ventures to
            illustrate my approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
            image="/servigrafic.png"
            href="/hello-idioma"
          />
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full md:w-1/3">
            <Image
              src="/dany.png"
              alt="Daniela Bontecou"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-4">Hey!</h2>
            <div className="w-16 h-1 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              My name is Daniela and I am a Designer and Photographer somewhere
              between Hawaii, California and Mexico.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              My main focuses are in Graphic Design, UI Design, Product
              Photography and Fashion Photography.
            </p>
            <p className="text-gray-600 text-lg">
              Away from the desk, I enjoy surfing, learning new languages and
              traveling the world with my husband.
            </p>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 md:px-12 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-500 mb-4">Work</h3>
            <ul className="space-y-2">
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
            <h3 className="text-gray-500 mb-4">Daniela Bontecou</h3>
            <ul className="space-y-2">
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
          <div>
            <h3 className="text-gray-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:hello@danielabontecou.com"
                  className="hover:underline"
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
          <div>
            <h3 className="text-gray-500 mb-4">Do you want to collaborate?</h3>
            <p className="text-gray-600">
              Send me an email and let's chat about what we can create together!
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
