import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 md:px-12 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">Resume</h1>

        <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
          {/* Replace this with your actual resume image */}
          <Image
            src="/Daniela-Resume-EN.png"
            alt="Daniela Bontecou Resume"
            width={900}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 flex justify-center">
          <Link
            href="/placeholder.svg?height=1200&width=900"
            download="Daniela_Bontecou_Resume.pdf"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Link>
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
