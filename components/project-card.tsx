import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  href,
}: ProjectCardProps) {
  type Category = "CASE STUDY" | "PRODUCT DESIGN" | "GRAPHIC DESIGN";

  const categoryTag = (category: Category) => {
    const tags = {
      "CASE STUDY": "case-study-tag",
      "PRODUCT DESIGN": "product-design-tag",
      "GRAPHIC DESIGN": "graphic-design-tag",
    };

    return tags[category];
  };

  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-xl mb-3 sm:mb-4 transition-all duration-300 group-hover:shadow-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <span className={`${categoryTag(category as Category)} text-xs sm:text-sm`}>{category}</span>
        <h3 className="text-base sm:text-lg md:text-xl font-medium mt-1">{title}</h3>
      </div>
    </Link>
  );
}
