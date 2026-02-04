import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projectsData: Record<string, {
  name: string
  mainImage: string
  images?: string[]
  role: string
  year: string
  link: string
  status?: string
  description: string
  what: string
  focus: string[]
  tags: string[]
  features: string[]
  isPortrait?: boolean
}> = {
  "1": {
    name: "SUSclothing",
    mainImage: "/images/susclothinghome.png",
    images: [
      "/images/susclothinghome.png",
      "/images/susclothingcart.png",
      "/images/susclothingfav1.png",
      "/images/susclothingfav2.png",
    ],
    role: "Solo Product Designer and Developer",
    year: "2025",
    link: "https://www.figma.com/proto/3KXHZ3CWdTA0SLbnMqtwsU/Sustainable-App?node-id=2069-3&p=f&t=ZrAY8PsHs5sq964e-1&scaling=scale-down&content-scaling=fixed&page-id=2069%3A2&starting-point-node-id=2069%3A3",
    description:
      "SUSClothing is a high-fidelity (hi-fi) wireframe prototype of a sustainable fashion discovery app that designed and developed to address a common challenge in the fashion industry—confusing eco-labels, unclear sustainability claims, and time-consuming research for eco-conscious consumers.",
    what: "As a hi-fi wireframe, the app demonstrates interactive navigation, a cart system, and a favourites page, showcasing how a near fully-developed version could curate verified, eco-friendly clothing from responsible brands. While it is not a fully functional e-commerce platform, it effectively communicates the user journey through visual and interactive prototypes.",
    focus: [
      "Creating a clean and intuitive UI for effortless browsing and discovery",
      "Designing clear product pages that highlight verified sustainability information",
    ],
    tags: ["HI-FI", "PROTOTYPING", "UI/UX", "DESIGN", "FIGMA"],
    features: [
      "Interactive hi-fi wireframe e-commerce webpage for both desktop and mobile",
      "Favourite/Unfavourite button for easy product tracking",
      "Fully functional navigation buttons for smooth browsing",
      "Price calculation system",
      "Responsive design optimized for both mobile and desktop",
    ],
  },
  "2": {
    name: "Portfolio Website",
    mainImage: "/images/pdhome1.png",
    images: [
      "/images/pdhome1.png",
      "/images/pdhome2.png",
      "/images/pdprojects.png",
      "/images/pdproject1.png",
      "images/pdproject2.png",
    ],
    role: "UI/UX Designer and Developer",
    year: "2025",
    link: "",
    description:
      "A personal portfolio website showcasing my work as a UI/UX and webapp developer. The site demonstrates minimalism and functionality to create impactful digital experiences. Built with modern web technologies and designed with a focus on clean aesthetics and user experience.",
    what: "This portfolio serves as both a design showcase and a functional web application. It features a clean, dark-themed interface with geometric network patterns as the hero background, smooth scrolling navigation, and an organized project showcase. The design emphasizes minimalism while maintaining visual interest through subtle animations and thoughtful typography.",
    focus: [
      "Creating a clean and intuitive portfolio interface that showcases projects effectively",
      "Implementing smooth interactions and animations for a polished user experience",
    ],
    tags: ["UI/UX", "WEB DESIGN", "DEVELOPMENT", "NEXT.JS", "TAILWIND CSS"],
    features: [
      "Dark-themed portfolio with geometric network background",
      "Smooth scroll navigation and page transitions",
      "Interactive project cards with hover animations",
      "Contact integration for easy communication",
    ],
  },
  "3": {
    name: "Travel List App",
    mainImage: "/images/travellist.png",
    role: "UI/UX Designer and Developer",
    year: "2025",
    link: "https://travel-list-app-tau-three.vercel.app/",
    status: "in-development",
    description:
      "The Travel List App is a simple and intuitive web application that helps users plan and organize their travel items. It allows users to create, edit, and manage packing lists for different trips, with a focus on ease of use and dynamic updates. The app updates lists in real time without page reloads, making trip planning seamless.",
    what: "A user-friendly web application designed to simplify travel preparation by providing an organized way to track packing items. The app features dynamic interactions and real-time updates, allowing travelers to efficiently manage multiple trip categories and monitor their packing progress with visual feedback.",
    focus: [
      "Developed a user-friendly interface for creating and managing travel lists",
      "Implemented dynamic interactions for a smooth user experience",
    ],
    tags: ["DEVELOPMENT", "JAVASCRIPT", "CSS", "WEB APP", "UI/UX DESIGN"],
    features: [
      "Add, edit, and delete travel items for multiple trips",
      "Toggle items as packed or unpacked",
      "Sort items by category",
      "Minimalist and clean interface for easy navigation",
      "Real-time list updates without refreshing the page",
    ],
  },
  "4": {
    name: "The EscapeDream",
    mainImage: "/images/escapedream-vr.png",
    images: [
      "/images/escapedream-room1.png",
      "/images/escapedream-room2.png",
      "/images/escapedream-room3.png",
      "/images/escapedream-room4.png",
    ],
    role: "VR Game Designer and Developer",
    year: "2025",
    link: "",
    status: "concept / vertical-slice",
    description:
      "The EscapeDream is a surreal VR escape room experience inspired by a recurring dream and atmospheric puzzle games. Players navigate through a sequence of four symbolic rooms, solving environmental puzzles that blur the line between reality and illusion.",
    what:
      "Designed as a vertical slice, the game demonstrates core VR mechanics, immersive puzzle design, and narrative progression through dream logic rather than explicit storytelling. Each room introduces a distinct puzzle that builds upon symbols and knowledge discovered earlier, encouraging intuition, observation, and experimentation.",
    focus: [
      "Designing immersive VR escape room puzzles driven by environmental storytelling",
      "Creating a cohesive game loop that blends illusion, exploration, and logic",
      "Applying dream-inspired narrative concepts to interactive gameplay",
    ],
    tags: ["VR", "GAME DESIGN", "PUZZLE DESIGN", "IMMERSIVE EXPERIENCE", "VERTICAL SLICE"],
    features: [
      "Four-room VR escape experience with interconnected puzzles",
      "Torch sequence puzzle using order-based logic",
      "Illusion-based endless staircase mechanic",
      "Environmental interaction using physics-based items",
      "Symbol-driven final puzzle combining clues from all previous rooms",
      "Minimal diegetic UI to maintain immersion",
    ],
  },
  "5": {
    name: "GeoHelp – City in Nature",
    mainImage: "/images/ghhome.png",
    images: [
      "/images/ghhome.png",
      "/images/ghmap.png",
      "/images/ghlist.png",
      "/images/ghrequest.png",
    ],
    isPortrait: true,
    role: "UI/UX Designer and Frontend Developer",
    year: "2025",
    link: "",
    description:
      "GeoHelp is a location-based mobile application concept designed to support Singapore’s Green Plan 2030 – City in Nature vision. Positioned as a civic and government-adjacent platform, the app prioritizes clarity, accessibility, and trust by presenting environmental help requests through a simple, map-driven interface.",
    what:
      "The UI/UX was intentionally kept clean, restrained, and non-ornamental to reflect the tone of a formal public-service application. Rather than focusing on visual flair, the design emphasizes clear information hierarchy, ease of navigation, and functional interactions. I led the UI/UX and visual design, while also implementing core add, update, and delete flows to support real-world usage scenarios.",
    focus: [
      "Designing a straightforward and accessible UI suitable for a government-style civic application",
      "Creating clear map-based interactions that prioritize usability over visual complexity",
      "Ensuring request creation and management flows are simple, predictable, and reliable",
    ],
    tags: ["UI/UX DESIGN", "CIVIC TECH", "MOBILE APP", "MAP-BASED UX", "FRONTEND"],
    features: [
      "Interactive map displaying location-based environmental requests",
      "Minimal, functional UI designed for clarity and ease of use",
      "Sliding request detail panel with subtle, non-distracting animations",
      "Create, update, and delete request flows with form validation",
      "Join and leave community initiatives with real-time status updates",
      "Backend integration via RESTful APIs for persistent data storage",
    ],
  },
}

export const projectsByCategory = {
  Design: [
    { id: 1, name: "SUSclothing", image: "/images/susclothinghome.png" },
    { id: 5, name: "GeoHelp – City in Nature", image: "/images/ghhome.png" },
  ],
  Development: [
    { id: 2, name: "Portfolio Website", image: "/images/portfolio-website.png" },
    { id: 3, name: "Travel List App", image: "/images/travellist.png" },
    { id: 4, name: "The EscapeDream", image: "/images/escapedream-vr.png" },
  ],
}
