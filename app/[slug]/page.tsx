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

    image: "https://i.imgur.com/3DyrToW.png",
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
          "https://i.imgur.com/JfZcH4m.png",
          "https://i.imgur.com/r0PAENW.png",
          "https://i.imgur.com/xediy6F.png",
          "https://i.imgur.com/CYfac8T.png",
          "https://i.imgur.com/Rk2rOPF.png",
        ],
      },
      {
        title: "",
        content: [],
        images: ["https://i.imgur.com/RZLXAVi.png"],
      },
      {
        title: ["Social Media"],
        content: [
          "For social media, my goal was to showcase the cookies with high-quality photos that made viewers feel like they could almost taste them.",

          "All the photos were taken by me in our makeshift home studio, which consisted of colored paper for the backgrounds and surfaces.",

          "To organize the posts, I used Adobe Illustrator to lay out the photos and visualize how I wanted the profile to look. For captions and hashtags, I utilized ChatGPT to craft engaging content.",
        ],
        images: [
          "https://i.imgur.com/4nhJluM.png",
          "https://i.imgur.com/rBNvR5s.png",
          "https://i.imgur.com/Xt7ciZC.png",
          "https://i.imgur.com/dgE8faY.pngg",
        ],
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
        images: [
          "https://i.imgur.com/dNIU9d6.png",
          "https://i.imgur.com/aJRXL2v.png",
        ],
      },
      {
        title: ["Punching Cards"],
        content: [
          "Loyalty Program: Another strategy I implemented was a punch card system. Customers received a punch card to track their cookie purchases—after buying 10 cookies, they would get the 11th one for free. This program encouraged customers to make repeat purchases while rewarding their loyalty.",
        ],
        images: [
          "https://i.imgur.com/wGw0bOk.png",
          "https://i.imgur.com/HUXdi3C.png",
        ],
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
      "Social Media Design",
      "Content Management",
      "Marketing Strategies",
      "Social Media Strategies",
    ],
    team: ["Daniela Bontecou", "Andrea Gonzalez", "Alberto Alfaro"],
    time: {
      year: "2024",
      duration: "5 months",
    },
    image: "/promising.png",
    product: "Promising NFTs",
    sections: [
      {
        title: "overview",
        content: [
          "Promising NFTs was a company founded by Alberto Alfaro, based in Mexico City. The company aimed to showcase the latest NFT projects on the market, helping users identify the best investment opportunities, as well as providing news about the NFT space.",

          "I was hired to assist with social media designs, research, and to help create and grow an NFT community.",
        ],
        images: [],
      },
      {
        title: "branding",
        content: [
          "The Inspiration Behind the Logo:",

          "NFTs represented a new and unknown space for many, full of endless opportunities—much like the Web3 space, which we are still exploring.",

          "The dark blue background was chosen to symbolize the vastness of space, while the font design was inspired by video games. Since we're talking about technology, I felt this would be a fitting addition to the brand. To add vibrancy, I used five colors to give the brand a fun and energetic feel.",
        ],
        images: [
          "https://i.imgur.com/I7BSnFw.png",
          "https://i.imgur.com/wjiQoXI.png",
        ],
      },
      {
        title: "Instagram",
        content: [
          "For the Instagram profile, I aimed for a consistent design, using the same color for the background and incorporating the logo’s color as a highlight in the posts. Our focus was to showcase each project in detail, highlighting the artwork to engage viewers, followed by information about the project.",

          "We shared posts about NFT projects, NFT art, NFT news, and giveaways.",

          "Our posting structure involved sharing a new project every day, with one day dedicated to posting a unique piece of NFT art—not necessarily from an NFT collection, but individual artworks created for the Web3 space.",

          "These posts were shared as carousels or with project details included in the caption.",
        ],
        images: [
          "https://i.imgur.com/aV7ofEv.png",
          "https://i.imgur.com/tZ1wZXp.png",
          "https://i.imgur.com/tyU2aMv.png",
          "https://i.imgur.com/yWThbqQ.png",
        ],
      },
      {
        title: "Instagram Stories",
        content: [
          "Our Instagram stories focused on the following:",

          "• New Recap: Every Sunday, we shared the most important NFT news of the week.",

          "• CryptoMonday: Each Monday, we posted updates on price changes for various cryptocurrencies.",

          "• Information: We provided general information on where to buy NFTs and explained basic concepts, like What is an NFT?",

          "• This or That: We posted fun, interactive stories to encourage our audience to engage and learn more about the projects.",

          "• Giveaways: To grow our audience, we hosted two giveaways, encouraging people to share our account with their friends for a chance to win 0.1 ETH.",
        ],
        images: [
          "https://i.imgur.com/sYDPkEE.png",
          "https://i.imgur.com/J3UsXwW.png",
          "https://i.imgur.com/WjGSIu6.png",
          "https://i.imgur.com/rlS4SsB.png",
        ],
      },
      {
        title: ["Twitter (X)"],
        content: [
          "Similar to our Instagram, our Twitter account (now X) was used to share NFT news and upcoming projects.",
        ],
        images: [
          "https://i.imgur.com/ppF33eC.png",
          "https://i.imgur.com/eLXyrUr.png",
        ],
      },
      {
        title: ["Crypto Sisters"],
        content: [
          "Primary Communications Channel: Our main platform for communication was Instagram, A few months later, we launched a new branch of our NFT project called CryptoSister.",
          "CryptoSister was created with the intention of showcasing women-made NFT projects, primarily sharing them on Twitter.",
          "Soon after, we began hosting NFT spaces where we discussed the latest projects in the Web3 space, as well as movies and topics of interest with our friends from the Web3 community.",
        ],
        images: [
          "https://i.imgur.com/yWGz3Kx.png",
          "https://i.imgur.com/go8Swjo.png",
          "https://i.imgur.com/2r5Qkwo.png",
        ],
      },
      {
        title: ["Sprout Social"],
        content: [
          "To manage and schedule both our Instagram and Twitter accounts, we used a tool called Sprout Social. While Meta has its own tool for publishing across Instagram and Facebook, Sprout Social allows you to publish across multiple platforms, including Instagram and Twitter.",

          "We would schedule content for each week, posting 1-3 times a day on Instagram and Twitter. The copy for each platform would vary slightly, as Twitter has character limits for tweets.",
        ],
        images: ["https://i.imgur.com/ikwriq0.png"],
      },
      {
        title: ["Learning"],
        content: [
          "Our team at Promising NFTs was very small, with me as the sole designer, so many responsibilities fell on my shoulders. Thankfully, I had assistance with research, which allowed me to focus on designing posts, stories, and reels, as well as managing and scheduling content across platforms.",

          "This job taught me a lot about organization while also giving me the freedom to be creative with the design and overall branding.",
        ],
        images: [],
      },
    ],
  },
  airbnb: {
    title: "Airbnb UI case study",
    category: "CASE STUDY",
    titleColor: "#E5B355",
    workflow: [
      "Wireframing",
      "Auto Layout",
      "Creating components",
      "Component interactions",
      "Prototyping",
      "Dev handoff",
      "Variables",
    ],
    team: ["Daniela Bontecou"],
    time: {
      year: "2024",
      duration: "2 months",
    },
    image: "https://i.imgur.com/regPMew.png",
    product: "Airbnb",
    sections: [
      {
        title: "overview",
        content: [
          "Airbnb is a platform that enables users to search for short- or long-term homestays and experiences worldwide.",

          "During my 8-week bootcamp with Memorisely, I learned about UI design and Figma's features by redesigning Airbnb's UI.",

          "The goal of this case study was to follow best practices for creating styles, components, patterns, and a prototype that could be handed over to engineers.",
        ],
        images: [],
      },
      {
        title: "Wireframing",
        content: [
          "For this case study, we were tasked with taking six screens from Airbnb and creating wireframes for each screen using the concept of auto-layout.",

          "My first two attempts were challenging since it was my first time working with auto-layout. However, with practice, I became more confident, and my final wireframes were fully responsive",
        ],
        images: [
          "https://i.imgur.com/jQ21ZkE.png",
          "https://i.imgur.com/UZAXtbN.png",
          "https://i.imgur.com/yTHSHyr.png",
          "https://i.imgur.com/GOJg1GS.png",
          "https://i.imgur.com/2LfWdr8.png",
          "https://i.imgur.com/6dBTjLT.png",
        ],
      },
      {
        title: "Components",
        content: [
          "After working with auto-layout, we moved on to our high-fidelity designs, where we added color to our wireframes. At this stage, we also began creating components—elements that would be used repeatedly throughout the app.",

          "For the components, my approach was to divide each piece into different sections, such as buttons, icons, cards, tabs, footers, and headers.",

          "This practice made it easier for me to locate and use the components later in the high-fidelity design.",

          "Based on Airbnb's original designs, I began by searching for icons used in the app and creating various components commonly found throughout, such as a pay button and a search bar.",

          "While working on components, we incorporated interactions like toggles, hover effects, and clickable icons to enhance usability and functionality.",
        ],
        images: ["https://i.imgur.com/KMjHEiF.png"],
      },
      {
        title: "Variables",
        content: [
          "To create a color palette, I abstracted the colors from the original design.",

          "First, I created the grayscale variables, which were used for the background, text, icons, and strokes throughout the app.",

          "Next, I worked on the primary, accent, and error colors. These were designated for buttons, specific icons, flash messages, error messages, and links.",

          "Once the color variables were established, they could be applied across the design. If a color needed to be updated, the change would automatically apply to all elements using the same variable, making the process more efficient.",
        ],
        images: ["https://i.imgur.com/kUrQR0g.png"],
      },
      {
        title: ["Text Variables, Dimensions & Breakpoints"],
        content: [
          "Text variables serve the same purpose as color variables, but they apply to the text used in the app. For example, if we wanted to change the paragraph text size from 12px to 13px, the change would apply to all text that uses the specified variable.",
          "Our dimensions are invaluable for maintaining consistency in our design. These variables can be applied to padding, margins, width, and overall sizing. Similar to our color and text variables, any change to a dimension variable will automatically apply to all design elements that use the same variable.",
          "Last but not least, we have our breakpoints. These help us define and differentiate the design for mobile, tablet, and web platforms.",

          "When creating responsive designs, breakpoints allow us to know exactly when and how the design should adapt to different screen sizes, ensuring a seamless user experience across all devices.",
        ],
        images: ["https://i.imgur.com/fD7zTWb.png"],
      },
      {
        title: ["Components"],
        content: [
          "When discussing components, we must also talk about component states. If components are crucial, component states are equally important.",

          "As the name suggests, component states allow us to transition between different appearances or functionalities of a component. For example, consider a toggle button: its two states could be on and off. In a moment, we'll delve into component interactions, which will make this concept even clearer. By incorporating states and interactions, we can create prototypes that provide a realistic sense of how the app will function.",

          "Can we have more than two states? Absolutely! You can create as many states as needed. I'll share some examples below.",
        ],
        images: ["https://i.imgur.com/8n5UECF.png"],
      },
      {
        title: ["Component interaction"],
        content: [
          "As mentioned earlier, component interactions are a key part of our design process. They help us visualize how the app will function, making it easier to run usability tests. By testing the design with users, we can observe how they interact with it, gather valuable data, and identify areas for improvement based on their feedback.",

          "With component interactions, we can explore scenarios such as what happens when a user clicks the heart button, scrolls through an image carousel, or navigates from the explore page to the wishlist page.",

          "By creating these interactions, we bring our designs to life and gain a deeper understanding of how everything works together.",
        ],
        images: ["https://i.imgur.com/dNXTbr3.png"],
      },
      {
        title: ["Hi fidelity"],
        content: [
          "Now that we have all our components, interactions, variables, icons, fonts, and colors in place, it's time to bring everything together to create our high-fidelity design and begin prototyping.",

          "Think of high-fidelity design as assembling the pieces of a puzzle to reveal the big picture. In this case, the goal is to see exactly how the entire app will look and feel in its final form.",

          "Using our wireframes as a guide, we’ll start combining the elements we’ve created to build a cohesive and polished design that truly represents the finished product.",
        ],
        images: [],
      },
      {
        title: ["Prototyping"],
        content: [
          "After completing all six screens, it's time to start prototyping. Prototyping allows us to define what happens when users interact with elements like the Where to?search bar. The goal is to ensure that interactions—whether clicking, tapping, or scrolling—are smooth and visually appealing, enhancing the user experience.",

          "For example, when a user clicks the Where to? search bar, they might be directed to a screen with three fields: destination, date, and number of guests. After filling in these fields and clicking Search, the next step is the loading process. Since internet speeds can vary, we can incorporate a skeleton loader to indicate that the page is loading. This loader provides a visual hint of where elements on the next page will appear, ensuring the user knows the app is working. Once loading is complete, the user arrives at the properties page, where they can scroll vertically to view available properties or horizontally to browse property photos.",

          "The prototype should visually map out the flow, with arrows connecting each step to show the progression from one screen to the next.",

          "When the prototype is complete, we can preview the user flow, enabling us to click through and interact with the app as though it were live on a phone. This gives a clear sense of how the app will function in real-world use.",
        ],
        images: ["https://i.imgur.com/GP7oQRR.png"],
      },
      {
        title: ["Dev hand-off"],
        content: [
          "To prepare this document for developers and signal that it’s ready to be brought to life, we need to ensure everything is clear and organized for seamless handoff.",
          "Most design tools include a feature at the top of the screen, allowing us to mark designs as Ready for Dev. By clicking this button, we can flag specific screens so developers know which ones are finalized and ready for implementation.",

          "Additionally, it's important to provide detailed annotations, style guides, and specifications for each element—such as dimensions, padding, fonts, and colors—ensuring developers have all the information they need. By marking screens as Ready for Dev and sharing these details, we create a smooth transition from design to development.",
        ],
        images: [],
      },
      {
        title: ["Learning"],
        content: [
          "I learned so much during the 8-weeks of my case study, I have played with Figma in the past but taking this bootcamp helped me solidify and expand my knowledge using the tool and also helped me a lot with my design process, really having done all the steps and stages from wireframing to prototype was very useful and I have been applying all the concepts I learned into my own designs.",
        ],
        images: [],
      },
    ],
  },
  skyscanner: {
    title: "Skyscanner Case Study",
    category: "CASE STUDY",
    titleColor: "#E5B355",
    workflow: [
      "Screening surveys",
      "Research interviews",
      "Research surveys",
      "Usability testing",
      "Competitor Benchmarking",
      "AI Analysis",
      "Synthesise Data",
      "Personas and scenarios",
    ],
    team: ["Daniela Bontecou"],
    time: {
      year: "2024",
      duration: "2 months",
    },
    image: "https://i.imgur.com/8hDFKJa.png",
    product: "Skyscanner",
    sections: [
      {
        title: ["Overview"],
        content: [
          "Skyscanner is a leading global travel search platform that enables users to compare and book flights, hotels, and rental cars.",

          "During my 8-week bootcamp with Memorisely, I learned best practices for conducting user research. As it was my first experience in this area, I gained valuable insights and mastered several tools to effectively carry out the research process.",

          "The goal of this case study was to learn how to conduct a thorough user research study and provide a solution to the problem the company aimed to address.",

          "We were provided with the following business objective: Increase Conversion Rates: Identify friction points in the user journey that prevent users from completing bookings on Skyscanner's web application.",
        ],
        images: [],
      },
      {
        title: ["Stakeholder script"],
        content: [
          "The first step in this case study was to start brainstorming for our interview script.",

          "If you're new to the world of User Experience Research (UXR), you might be wondering, just like I did, What is a stakeholder? Stakeholders are individuals within the company, such as managers, project leaders, or even the CEO. Essentially, they are people who have the authority or influence to make things happen. In the context of user research, stakeholders are the ones who will drive the execution and completion of the project.",

          "Stakeholder interviews are crucial because they help involve key decision-makers in the problem-solving process. They can provide valuable insights on what success looks like to them, how involved they want to be in the project, the best ways to contact them, and any past experiences they've had with other research initiatives.",

          "Stakeholder interviews should focus on four main topics:",

          "• Success Metrics",

          "• Experience and Insights",

          "• Key Focus Areas",

          "• Communication and Workflow",

          "Here's an example of how brainstorming for an interview script might look:",
        ],
        images: ["https://i.imgur.com/XVV39Q2.png"],
      },
      {
        title: ["Interview Script"],
        content: [
          "After the brainstorming it was time to put together all the questions we had in a way that it made sense and also trying not to make it as long, we want to really ask the most important questions and get as much information as we can.",

          "Our interview script had an introduction, the questions and a wrap up and it looked a little bit like this.",
        ],
        images: ["https://i.imgur.com/c1aHIIW.png"],
      },
      {
        title: ["Research Plan"],
        content: [
          "Having a research plan is essential for maintaining structure and organization throughout the project. It helps us align with our goals and user needs, set clear objectives and expectations, and increases our chances of gathering relevant and targeted data.",

          "The key components that our research plan must include are:",

          "• Research Objectives",

          "• Research Questions",

          "• Methodology",

          "• Participants",

          "• Timeline",

          "• Resources",

          "• Data Analysis",

          "• Reporting",

          "Here's an example of how our research plan looked:",
        ],
        images: ["https://i.imgur.com/IIklZH0.png"],
      },
      {
        title: ["Screening Survey"],
        content: [
          "After conducting stakeholder interviews and creating our research plan, the next step is to conduct screening surveys.",

          "Screening surveys are essential for filtering potential participants for our user research. We aim to identify participants who are a good fit for the research objectives.",

          "In our case, the ideal candidates are users who have used Skyscanner for booking flights.",

          "To create an effective screening survey, we ask both demographic questions to gather background information about participants and qualification questions to ensure they meet the criteria we're looking for. Examples of qualification questions include:",

          "• Have you ever used Skyscanner?",

          "• How often do you travel?",

          "• Have you encountered any challenges when using Skyscanner to book a flight?",

          "For our screening survey, we used Google Forms to structure the survey and send it to potential participants.",

          "Since this was a case study, I ended up sending the survey to family and friends. Unfortunately, I wasn't able to gather a large amount of data, but I still collected enough to work with.",

          "Here's an example of how our screening survey looked:",
        ],
        images: ["https://i.imgur.com/lzpEXpA.png"],
      },
      {
        title: ["Survey results"],
        content: ["Here are the Survery Results"],
        images: [
          "https://i.imgur.com/Qd2ktJK.png",
          "https://i.imgur.com/WpqDhTy.png",
        ],
      },
      {
        title: ["Research Interviews"],
        content: [
          "Once we have our participants for the case study, it’s time to dig deeper into their experiences using Skyscanner. We want to understand how users think and feel while using the app, identify their pain points, explore features they would like to see, and gather feedback on how we can improve their experience.",

          "Two effective methods for gathering more data are research interviews and research surveys. These methods serve different purposes, and here’s a list of the benefits of each:",

          "• Research Interviews:",

          "• Allow for in-depth, qualitative insights into user experiences.",

          "• Provide an opportunity to ask follow-up questions and explore responses in more detail.",

          "• Enable the interviewer to observe body language and tone, adding context to the feedback.",

          "• Help build rapport and establish trust with participants.",

          "• Research Surveys:",

          "• Can gather data from a larger sample size quickly and efficiently.",

          "• Are cost-effective and less time-consuming compared to interviews.",

          "• Allow for both quantitative and qualitative data collection.",

          "• Enable participants to provide feedback at their convenience, which can result in more honest responses.",

          "Both methods are valuable for understanding users and improving the apps design.",

          "Let's start we our research interviews.",

          "For our research interviews we followed the next structure: Introduction, demographic questions, problem-space questions and wrap up.",

          "Like we mention before with our research interviews we want to gather qualitative information, meaning we want to gather how the user feels and interacts with our product, and we can hear their feedback and know their emotions they go through.",

          "Our research interview script looks a little bit like this:",

          "We started with our demographic questions to get some background of our participants, after that we moved on to problem space questions, where we want to ask questions that will help us understand the process that the user goes to when using SkyScanner, this way we can identify pain points and understand how a user interacts with the product.",
        ],
        images: [
          "https://i.imgur.com/5T6XRzo.png",
          "https://i.imgur.com/cvGEGkQ.png",
        ],
      },
      {
        title: ["Research Surveys"],
        content: [
          "For our research surveys I wanted to come up with different questions, if we're doing both interviews and surveys we don't want to ask the same questions to the same people but gather more information and ask about other steps of their booking process.",

          "These are the questions for our research survey:",

          "These questions were more focused on specific features, like the pricing comparison, the filters, hidden fees, how clear are the prices and if it's clear what the air fare includes.",
        ],
        images: ["https://i.imgur.com/VBlYTsR.png"],
      },
      {
        title: ["Usability Tests"],
        content: [
          "Another valuable method for gathering data is conducting usability tests.",

          "Usability tests allow us to observe how users interact with the interface and how easy it is for them to navigate through the app.",

          "To ensure we cover all aspects of the user experience, we can focus on the following categories:",

          "• Learnability – How easy is it for users to learn how to use the app for the first time?",

          "• Efficiency – How quickly and easily can users complete tasks once they’ve learned how to use the app?",

          "• Errors – How often do users make mistakes, and how easily can they recover from them?",

          "• Satisfaction – How satisfied are users with the app’s functionality and overall experience?",

          "• Memorability – How easy is it for users to remember how to use the app after a period of not using it?",

          "Focusing on these categories helps us gather insights into the usability of the app and identify areas for improvement.",

          "Now, how do we conduct a usability test? For our usability tests we had to write a script, this script not only consisted in questions but also in scenarios, or tasks you want the user to complete, for example: open the SkyScanner and accept the cookie policy.",

          "To start we asked a couple of demographic questions, followed by questions such as: In what platform do you usually use the app, how often do you use it and what is the purpose.",

          "Our questions were:",
          "How often do you use platforms like Skyscanner",
          "Which device do you primarily use to access this platform?",
          "What is your primary reason for using this platform?",

          "Our usability testing consisted in 4 scenarios or tasks:",

          "• Accept the cookie policy",
          "• Go to the booking screen",
          "• Select the best flight option",
          "• View flight details",
        ],
        images: [
          "https://i.imgur.com/r7M13lL.png",
          "https://i.imgur.com/ht0tNWt.png",
        ],
      },
      {
        title: ["Analyzing data"],
        content: [
          "After conducting our research and surveys, it was time to gather all the information and analyze the data to extract more concrete insights. To do this, we used Dovetail.",

          "Dovetail is a tool that allows us to import interview responses and survey data, organizing the information in a way that makes it easier to identify recurring themes and the most important insights from our research. This helped us efficiently analyze the data and draw meaningful conclusions for improving the app.",

          "In our case, we discovered that most users are frustrated by hidden fees, which often cause them to abandon the booking process early. Many users also use Skyscanner as a price comparison tool, and some have found that booking directly through the airline can sometimes be cheaper.",

          "Overall, most users expressed a desire for more transparency in pricing and wanted clearer information about what is included in the price. This insight was crucial for identifying friction points in the user journey and understanding areas where the app could be improved.",
        ],
        images: ["https://i.imgur.com/BRYFo4f.jpeg"],
      },
      {
        title: ["Personas/Scenarios"],
        content: [
          "Personas are essential tools that help designers and researchers understand and empathize with the users they are designing for.",

          "For our case study, we created personas to represent our ideal users—individuals who use Skyscanner for booking flights. These personas helped us better understand the needs, pain points, and behaviors of our target users, guiding our design decisions and making the user research more actionable.",

          "Some key aspects to include in a persona are:",

          "• Demographics",

          "• Values, Attitudes, Interests, and Lifestyle Choices",

          "• Personal and Professional Goals",

          "• Motivations",

          "• Needs and Pain Points",

          "• Behavior & Preferences",

          "• Contextual Information",

          "• For this scenario, we also wrote a day-in-the-life narrative for our persona. This involved describing their daily routine, what they do when they wake up, and how their life looks both at work and at home. This detailed context helped us make the persona more relatable and informed the design decisions based on their real-world needs.",
        ],
        images: [
          "https://i.imgur.com/T75Js6O.jpeg",
          "https://i.imgur.com/7IBjagm.jpeg",
        ],
      },
      {
        title: ["Empathy Map"],
        content: [
          "Empathy maps help us dive deeper into what a user says, thinks, does, and feels.",

          "An Empathy maps looks a little bit like this:",
        ],
        images: ["https://i.imgur.com/VwvCL6Y.png"],
      },
      {
        title: ["Learning"],
        content: [
          "This case study was my first time diving into UXR, and it was quite challenging to grasp all the nuances of conducting proper research for a specific case. However, this bootcamp helped me gain a deeper understanding of what goes into user research and the best practices for utilizing various methods to achieve research goals.",

          "This won’t be my last experience with user research, and I’m excited to continue growing as a UX designer.",
        ],
        images: [],
      },
    ],
  },
  "coco-canela": {
    title: "Social Media Graphic Design at Coco Canela",
    category: "GRAHIC DESIGN",
    titleColor: "#2950cf",
    workflow: [
      "Graphic Design",
      "Monthly reports",
      "Adjustments for proposals",
      "Content grid",
      "Research for Instagram",
    ],
    team: ["Daniela Bontecou"],
    time: {
      year: "2022",
      duration: "6 months",
    },
    image: "https://i.imgur.com/ducp8gQ.png",
    product: "Coco Canela",
    sections: [
      {
        title: ["Overview"],
        content: [
          "Coco Canela is a marketing agency based in Mexico City.",

          "I was hired as a social media graphic designer for Coco Canela in 2021.",

          "One of the agency's main clients was a natural fertilizer company, also based in Mexico City. Every week, with the help of the community manager, we would meet to discuss the content we were going to share on social media, such as plant trivia, this or that stories, plant care, and product information.",
        ],
        images: [],
      },
      {
        title: ["Grid Content"],
        content: [
          "Each week, we would organize our content ideas in a grid. The way we organized it looked like this:",

          "• Day and time",

          "• Copy of the post",

          "• Main image (and clarification if it was a reel or carousel)",

          "• Hashtags",

          "• Status (whether it had been posted or not)",

          "• Content pillar (indicating which category the post fell into, such as trivia, testimony, etc.)",

          "• Comments",

          "The content schedule was as follows: Monday, Wednesday, Friday, and Sunday posts on Instagram; Tuesday and Thursday for stories; and Saturday for reels.",

          "After brainstorming and coming up with content for the whole month, it was time to get to work. For me, this meant researching the topics we discussed and designing all the carousels, posts, stories, and reels. Once the grid was ready, we would share it with the client to get their feedback in the comments section and to receive approval for what was ready to be posted.",

          "I would then share all the designs on a drive and make any necessary changes before they were posted on Instagram.",
        ],
        images: ["https://i.imgur.com/7wotqSX.png"],
      },
      {
        title: ["AliBio Home IG"],
        content: [
          "After the content grid was finished and approved by the brand, the community manager schedule all the post for the whole month.",

          "We tried posting about different topics every month, but always related to the brand, which in this case was a fertilizer brand. We featured their products each month and came up with strategies like discounts and giveaways to grow our audience and boost engagement.",
        ],
        images: [
          "https://i.imgur.com/xMxZmKO.png",
          "https://i.imgur.com/sYeKE7S.png",
        ],
      },
      {
        title: ["After Posting"],
        content: [
          "Every month, after all the posts are made, we create a report that highlights the posts with the most reach, likes, comments, shares, and engagement. We include data not only from Instagram but also from Facebook, Google Ads, and SEO. Additionally, we outline the next steps. This report is very beneficial because we can compare the results with the previous month, allowing us to see if there's been any growth and identify areas that need improvement.",
        ],
        images: [
          "https://i.imgur.com/7E2lm2X.jpeg",
          "https://i.imgur.com/jKWdrZN.jpeg",
        ],
      },
      {
        title: ["Re-designing proposals"],
        content: [
          "Another of my tasks as a designer was to re-design marketing proposals for future clients, aligning design with brand's design system.",

          "Here's a before and after:",
        ],
        images: [
          "https://i.imgur.com/on2wK3Q.jpeg",
          "https://i.imgur.com/eWzWXRP.jpeg",
        ],
      },
      {
        title: ["Coco Canela Instagram"],
        content: [
          "Similar to what we did for AliBio Home, we had to also manage and keep posting on the agencies social media, mainly we would post on Instagram.",

          "We would organize the work the same way we did for AliBio Home, making a content grid for each month and doing some research about marketing trends, SEO and things related to digital marketing, phrases, and success with our clients.",
        ],
        images: [
          "https://i.imgur.com/fiLZKH2.png",
          "https://i.imgur.com/GggHeXv.png",
        ],
      },
      {
        title: ["Learning"],
        content: [
          "Before joining Coco Canela I had no idea the work that went into having a marketing agency and working not only with your own brand but with clients can be intimidating, but once you get into the flow of things, the designs start to flow.",

          "It is very important to stay organized and have a system in place where you can visualize what are the things that you're going to post on social media each month that also align with your brand.",

          "Social media design was so fulfilling and that motivated me to continue doing it.",
        ],
        images: [],
      },
    ],
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
            src={project.image || "/"}
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
