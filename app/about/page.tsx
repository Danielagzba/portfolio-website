import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center md:items-start">
          <div className="w-full sm:w-2/3 md:w-1/3 max-w-[300px] md:max-w-full">
            <Image
              src="/dany.png"
              alt="Daniela Bontecou"
              width={400}
              height={400}
              className="rounded-full w-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Hey</h2>
            <div className="w-16 h-1 bg-gray-300 mb-4 sm:mb-6"></div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              I am a Designer and Photographer based all around the world.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              My main focuses are in Graphic Design, UI Design, Product
              Photography and Fashion Photography.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              Away from the desk, I enjoy surfing, learning new languages and
              travel the world with my husband.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              With over 8 years of experience in the design industry, I've had
              the opportunity to work with clients from various sectors, helping
              them create meaningful and impactful visual experiences.
            </p>
          </div>
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
