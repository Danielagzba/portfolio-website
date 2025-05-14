import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

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
            <h2 className="text-4xl font-bold mb-4">Hey</h2>
            <div className="w-16 h-1 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              I am a Designer and Photographer based all around the world.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              My main focuses are in Graphic Design, UI Design, Product
              Photography and Fashion Photography.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Away from the desk, I enjoy surfing, learning new languages and
              travel the world with my husband.
            </p>
            <p className="text-gray-600 text-lg">
              With over 8 years of experience in the design industry, I've had
              the opportunity to work with clients from various sectors, helping
              them create meaningful and impactful visual experiences.
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
