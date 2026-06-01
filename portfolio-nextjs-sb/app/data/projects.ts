export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured?: boolean;
}

const allProjects: Project[] = [
    {
        id: "popup-cuisine-series",
        title: "Annual Function Food Stall Series",
        description: "Designed and executed 3 themed stalls (Nepali street food, Asian wok, Indian chaat) over 2 annual events. Managed menu costing, mise en place, and live cooking for 200+ guests.",
        image: "/images/projects/popup-stall.jpg",
        tags: ["Event Catering", "Menu Engineering", "Live Cooking", "Cost Control"],
        link: "/portfolio/projects/popup-series",
        featured: true,
    },
    {
        id: "cloud-kitchen-menu",
        title: "Cloud Kitchen Concept – ‘Fusion Junction’",
        description: "Developed a 24‑item hybrid menu (Nepali‑Mexican, Indo‑Italian). Includes recipe standardisation, portion costing, packaging design, and delivery logistics plan.",
        image: "/images/projects/cloud-kitchen.jpg",
        tags: ["Product Development", "Food Costing", "Branding", "Operations"],
        link: "/portfolio/projects/cloud-kitchen",
        featured: true,
    },
    {
        id: "recipe-scaling",
        title: "From Home Kitchen to 100 Covers",
        description: "Documented the process of scaling 5 signature recipes (momo, dal bhat, biryani, pasta, stir‑fry) from small batch to banquet volume – with yield tests and waste reduction tips.",
        image: "/images/projects/recipe-scaling.jpg",
        tags: ["Recipe Development", "Kitchen Math", "Quality Control"],
        link: "/portfolio/projects/recipe-scaling",
        featured: false,
    },
    {
        id: "themed-buffet-plan",
        title: "‘Flavours of the Himalayas’ Buffet",
        description: "Full proposal for a hotel weekend buffet featuring Thakali, Newari, and Tibetan dishes. Includes menu cycle, plating mock‑ups, staffing plan, and cost/profit analysis.",
        image: "/images/projects/buffet-plan.jpg",
        tags: ["Buffet Design", "Food Styling", "Event Menu", "Profitability"],
        link: "/portfolio/projects/buffet-plan",
        featured: false,
    },
    {
        id: "culinary-dashboard",
        title: "Chef’s Inventory & Recipe Manager",
        description: "Built a React app that tracks ingredient stock, suggests recipes based on leftovers, and calculates food cost per plate – tailored for small hotel kitchens.",
        image: "/images/projects/chef-dashboard.jpg",
        tags: ["React", "Inventory Management", "Food Tech"],
        link: "/portfolio/projects/chef-dashboard",
        featured: true,
    }
];

export function getFeaturedProjects(): Project[] {
    return allProjects.filter(p => p.featured === true);
}

export function getAllProjects(): Project[] {
    return allProjects;
}