import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";

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
    gallery: {
      image1: "konacrumble1.jpg",
      image2: "konacrumble2.png",
    },
    product: "Kona Crumble",
    sections: [
      {
        title: "overview",
        content: [
          "Kona Crumble was a New York-style cookie company based on the island of Hawai’i, founded and managed by Daniela Bontecou.",
          "I have always loved baking, and after much consideration, I decided to start a cookie business specializing in New York-style cookies—really BIG cookies!",
        ],
        images: [],
      },
      {
        title: "branding",
        content: [
          'Behind the Logo: The Kona Crumble logo features a chocolate chip cookie adorned with brown chips and crumbs. The name "Kona Crumble" is displayed above in our chosen font, Homie Lullaby. This playful, handwritten-style font adds a fun and personal touch to the brand\'s identity.',

          "The color palette below showcases the primary colors of the brand, which also became the colors used for the packaging.",
        ],
        images: ["konacrumble1.jpg", "konacrumble2.png"],
      },
      {
        title: "From design to paper",
        content: [
          "For the packaging, I designed three individual boxes, each featuring one of our signature colors. Each box represents a different flavor from our three main signature offerings: chocolate chip with walnuts, white chocolate chip with macadamias, and double chocolate with Nutella.",
          "Our larger box was kept simple with a white base, complemented by a colorful sleeve to add a vibrant and fun touch to the overall packaging.",
        ],
        images: [
          "pack1.png",
          "pack2.png",
          "pack3.png",
          "pack4.png",
          "Packaging.png",
        ],
      },
      {
        title: "",
        content: [],
        images: ["Packaging1.png"],
      },
      {
        title: ["Social Media"],
        content: [
          "For social media, my goal was to showcase the cookies with high-quality photos that made viewers feel like they could almost taste them.",

          "All the photos were taken by me in our makeshift home studio, which consisted of colored paper for the backgrounds and surfaces.",

          "To organize the posts, I used Adobe Illustrator to lay out the photos and visualize how I wanted the profile to look. For captions and hashtags, I utilized ChatGPT to craft engaging content.",
        ],
        images: ["social1.png", "social2.png", "social3.png", "social4.png"],
      },
      {
        title: ["Marketing"],
        content: [
          "Primary Communications Channel: Our main platform for communication was Instagram, where we focused on sharing product photos, stories, and reels to engage with our audience.",
          "Interactive Stories: Our Instagram stories were designed to be both interactive and informative, offering insights into our brand, pricing, upcoming pop-ups, cookie trivia, this or that polls, and holiday celebrations.",
          "These strategies boosted engagement, helped grow our audience, and familiarized people with our brand.",
          "Instagram and TikTok: Both our Instagram and TikTok accounts featured videos showcasing our cookie flavors, packaging materials, upcoming pop-ups, and mouthwatering shots of our cookies.",
          "Our most-viewed video on TikTok reached 771 views, while our top-performing video on Instagram garnered 81 views.",
        ],
        images: ["marketing1.png", "marketing2.png"],
      },
      {
        title: ["Punching Cards"],
        content: [
          "Loyalty Program: Another strategy I implemented was a punch card system. Customers received a punch card to track their cookie purchases—after buying 10 cookies, they would get the 11th one for free. This program encouraged customers to make repeat purchases while rewarding their loyalty.",
        ],
        images: ["punchcard1.png", "punchcard2.png"],
      },
      {
        title: ["Learning"],
        content: [
          "Kona Crumble was the second business I fully branded and founded. Although it was a successful business and people loved the product, we faced several challenges:",
          "1. Production: Since we were baking the cookies at home, our production was limited to how many we could make at once.",
          "2. Unpredictability: Our primary sales location was farmer's markets, which can be unpredictable due to factors like attendance and weather conditions.",
          "3. Day-Old Sale: After a market, we sometimes had a lot of leftover product. We would announce a day-old sale on Instagram, offering cookies at a 50% discount. Even with the price reduction, we often still had a significant amount of leftover product, which proved challenging to manage.",
          "Overall, Kona Crumble was an invaluable learning experience. Not only did it enhance my graphic design skills, but it also taught me packaging design, social media strategies, sales techniques, and money management.",
        ],
        images: [],
      },
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

      <div className="container mx-auto px-6 md:px-12 pt-16">
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

        <div className="flex flex-col gap-24 mb-24 px-6 max-w-7xl mx-auto">
          {project.sections.map((section, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24 mb-16">
                <div className="md:w-1/4 mb-8 md:mb-0">
                  <h2 className="text-xl font-medium capitalize text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="md:w-3/4">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-md mb-6 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
                  {section.images.map((image, i) => {
                    const isLast = i === section.images.length - 1;
                    const isOdd = section.images.length % 2 !== 0;
                    const spanFull = isLast && isOdd;

                    return (
                      <div
                        key={i}
                        className={`w-full ${spanFull ? "md:col-span-2" : ""}`}
                      >
                        <div className="aspect-w-1 aspect-h-1 relative">
                          <img
                            src={image}
                            alt={`${section.title} detail ${i + 1}`}
                            className="w-full mx-auto rounded-none"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="container mx-auto px-6 md:px-12 pb-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Explor my other projects
          </h2>
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
