import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";

// This would typically come from a CMS or database
const projects = {
  "kona-crumble": {
    title: "Kona Crumble Cookies",
    category: "PRODUCT DESIGN",
    titleColor: "#6e56cf",
    workflow: [
      "Branding",
      "Graphic Design",
      "Packaging Design",
      "Social Media Marketing",
    ],
    team: ["Daniela Bontecou"],
    time: {
      year: "2024",
      duration: "4 months",
    },
    image: "/thumbnail copy.png",
    product: "Kona Crumble",

    overview: [
      "Kona Crumble was a New York-style cookie company based on the island of Hawai’i, founded and managed by Daniela Bontecou.",
      "I have always loved baking, and after much consideration, I decided to start a cookie business specializing in New York-style cookies—really BIG cookies!",
    ],
    branding: [
      'Behind the Logo: The Kona Crumble logo features a chocolate chip cookie adorned with brown chips and crumbs. The name "Kona Crumble" is displayed above in our chosen font, Homie Lullaby. This playful, handwritten-style font adds a fun and personal touch to the brand\'s identity.',

      "The color palette below showcases the primary colors of the brand, which also became the colors used for the packaging.",
    ],
  },
  "promising-nfts": {
    title: "Promising NFTs",
    category: "PRODUCT DESIGN",
    titleColor: "#6E56CF",
    workflow: [
      "Branding",
      "Content Management",
      "Marketing Strategies",
      "Social Media Strategies",
    ],
    team: ["Daniela Bontecou", "Andrea Gonzalez", "Alberto Alfaro"],
    time: {
      year: "2024",
      duration: "5 months",
    },
    product: "Promising NFTs",
    overview: [
      "Promising NFTs was a company founded by Alberto Alfaro, based in Mexico City.",
      "The company aimed to showcase the latest NFT projects on the market, helping users identify the best investment opportunities, as well as providing news about the NFT space.",
      "I was hired to assist with social media designs, research, and to help create and grow an NFT community.",
    ],
    image: "/placeholder.svg?height=600&width=1200",
  },
  airbnb: {
    title: "Airbnb UI case study",
    category: "CASE STUDY",
    titleColor: "#E5B355",
    workflow: ["UI Design", "UX Research", "Prototyping", "User Testing"],
    team: ["Daniela Bontecou", "Andrea Gonzalez", "Alberto Alfaro"],
    time: {
      year: "2023",
      duration: "3 months",
    },
    product: "Airbnb",
    overview: [
      "This case study focused on analyzing and improving the Airbnb user interface.",
      "The project aimed to identify pain points in the current user experience and propose solutions to enhance usability and engagement.",
      "I conducted user research, created wireframes and prototypes, and performed usability testing to validate the proposed improvements.",
    ],
    image: "/placeholder.svg?height=600&width=1200",
  },
  skyscanner: {
    title: "Skyscanner",
    category: "PRODUCT DESIGN",
    titleColor: "#000000",
    workflow: ["UI Design", "UX Research", "Prototyping", "User Testing"],
    team: ["Daniela Bontecou", "Andrea Gonzalez", "Alberto Alfaro"],
    time: {
      year: "2023",
      duration: "4 months",
    },
    product: "Skyscanner",
    overview: [
      "Skyscanner approached me to help redesign their flight search experience.",
      "The goal was to simplify the search process while providing all necessary information for users to make informed decisions.",
      "I conducted user research, created wireframes and prototypes, and worked closely with the development team to implement the new design.",
    ],
    image: "/placeholder.svg?height=600&width=1200",
  },
  "coco-canela": {
    title: "Coco Canela",
    category: "PRODUCT DESIGN",
    titleColor: "#000000",
    workflow: [
      "Brand Design",
      "Packaging Design",
      "Social Media Strategy",
      "Marketing Materials",
    ],
    team: ["Daniela Bontecou", "Andrea Gonzalez", "Alberto Alfaro"],
    time: {
      year: "2023",
      duration: "3 months",
    },
    product: "Coco Canela",
    overview: [
      "Coco Canela is a luxury candle brand that needed a complete brand identity.",
      "The brand wanted to position itself as a premium product while emphasizing sustainability and natural ingredients.",
      "I developed a comprehensive brand identity including logo, packaging, and marketing materials that reflected the brand's values and appealed to their target audience.",
    ],
    image: "/placeholder.svg?height=600&width=1200",
  },
  "hello-idioma": {
    title: "Hello Idioma",
    category: "PRODUCT DESIGN",
    titleColor: "#000000",
    workflow: ["UI Design", "UX Research", "Prototyping", "User Testing"],
    team: ["Daniela Bontecou", "Andrea Gonzalez", "Alberto Alfaro"],
    time: {
      year: "2022",
      duration: "6 months",
    },
    product: "Hello Idioma",
    overview: [
      "Hello Idioma is a language learning app focused on conversational practice.",
      "The app needed an interface that would facilitate natural language learning and reduce the anxiety often associated with speaking a new language.",
      "I designed an intuitive interface with interactive dialogues, speech recognition, and personalized feedback to create an engaging learning experience.",
    ],
    image: "/placeholder.svg?height=600&width=1200",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="mb-8">
          <span
            className={
              project.category === "CASE STUDY"
                ? "case-study-tag"
                : "product-design-tag"
            }
          >
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            <span style={{ color: project.titleColor }}>
              {project.title.split(" ")[0]}
            </span>{" "}
            {project.title.split(" ").slice(1).join(" ")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h2 className="text-gray-400 text-sm mb-2">WORKFLOW</h2>
            <ul className="space-y-1">
              {project.workflow.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-gray-400 text-sm mb-2">TEAM</h2>
            <ul className="space-y-1">
              {project.team.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-gray-400 text-sm mb-2">TIME</h2>
            <p>{project.time.year}</p>
            <p>{project.time.duration}</p>
          </div>
          <div>
            <h2 className="text-gray-400 text-sm mb-2">PRODUCT</h2>
            <p>{project.product}</p>
          </div>
        </div>

        <hr className="border-gray-200 mb-16" />
        <div className="mb-16">
          <Image
            src={project.image || "/thumbnail copy.png"}
            alt={project.title}
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
          </div>

          <div className="md:col-span-2">
            {project.overview.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {project.branding && project.branding.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Branding</h2>

              <div className="md:col-span-2">
                {project.branding.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt={`${project.title} detail 1`}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt={`${project.title} detail 2`}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

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
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
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
