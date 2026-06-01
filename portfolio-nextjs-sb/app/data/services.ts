import { IconType } from 'react-icons';
import { GiConcreteBag, GiChart, GiCalendar, GiTalk, GiCakeSlice, GiChefToque, GiCookingPot, GiKnifeFork, GiMeal, GiWoodPile } from 'react-icons/gi';

export interface Service {
    icon: IconType;
    title: string;
    desc: string;
}

export const services: Service[] = [
    // {
    //     icon: GiConcreteBag,
    //     title: "Front Office Operations",
    //     desc: "Check-in/out workflows, guest profiling, upselling, and handling requests.",
    // },
    // {
    //     icon: GiChart,
    //     title: "Guest Experience Analytics",
    //     desc: "Collecting and acting on feedback (surveys, reviews) to boost satisfaction and loyalty.",
    // },
    // {
    //     icon: GiCalendar,
    //     title: "Event Coordination",
    //     desc: "Planning banquets, conferences, and social events – logistics, budgeting, and vendor liaison.",
    // },
    // {
    //     icon: GiTalk,
    //     title: "Multilingual Service",
    //     desc: "Fluent in Nepali, English & Hindi – delivering warm, personalized communication.",
    // },
    {
        icon: GiChefToque,
        title: "Multi‑Cuisine Culinary Studio",
        desc: "Authentic Nepali, Continental, Asian & Indian dishes – crafted by a chef trained in global flavours.",
    },
    {
        icon: GiCookingPot,
        title: "Live Cooking & Themed Buffets",
        desc: "Interactive stations, seasonal food festivals, and themed dinners (Italian night, Momo fest, etc.).",
    },
    {
        icon: GiMeal,
        title: "Personalised Menu Engineering",
        desc: "Tailored meal plans for dietary needs (vegan, gluten‑free, keto) and special requests.",
    },
    {
        icon: GiKnifeFork,
        title: "Plated Fine Dining & Room Service",
        desc: "Elegant in‑restaurant service and 24/7 in‑room dining with a constantly rotating seasonal menu.",
    },
    {
        icon: GiCakeSlice,
        title: "Pastry & Dessert Innovation",
        desc: "House‑made patisserie, plated desserts, and celebration cakes with modern techniques.",
    },
    {
        icon: GiWoodPile,
        title: "Cooking Workshops & Team Building",
        desc: "Hands‑on classes for guests – learn momo rolling, curry blending, or bread baking.",
    },
];