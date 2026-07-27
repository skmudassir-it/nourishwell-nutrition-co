import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAppleAlt,
  faBalanceScale,
  faBolt,
  faBrain,
  faCarrot,
  faCheckCircle,
  faClock,
  faComments,
  faDumbbell,
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhone,
  faSeedling,
  faShoppingBasket,
  faStar,
  faUserMd,
  faUsers,
  faUtensils,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const COMPANY = {
  name: "NourishWell Nutrition Co.",
  tagline: "Nourishing lives through personalized nutrition science.",
  description:
    "At NourishWell Nutrition Co., we believe that food is medicine. Our team of registered dietitians and certified nutritionists creates science-backed, personalized nutrition plans that empower you to achieve your health goals — whether that's managing a chronic condition, optimizing athletic performance, or simply feeling your best every day.",
  phone: "(555) 234-8765",
  email: "hello@nourishwell.co",
  address: "842 Greenway Blvd, Suite 310, Portland, OR 97201",
  founded: 2014,
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "personalized-meal-planning",
    title: "Personalized Meal Planning",
    description:
      "Custom meal plans tailored to your health goals, dietary preferences, and lifestyle — not a one-size-fits-all template.",
    icon: faUtensils,
    image: "/images/services/personalized-meal-planning.jpg",
    features: [
      "One-on-one dietary assessment",
      "Custom weekly meal plans",
      "Grocery shopping lists",
      "Recipe library access",
      "Ongoing plan adjustments",
    ],
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    description:
      "Evidence-based weight management programs that focus on sustainable habits, not fad diets or quick fixes.",
    icon: faWeight,
    image: "/images/services/weight-management.jpg",
    features: [
      "Body composition analysis",
      "Metabolic rate testing",
      "Behavioral coaching",
      "Progress tracking dashboard",
      "Maintenance phase support",
    ],
  },
  {
    slug: "sports-nutrition",
    title: "Sports Nutrition",
    description:
      "Fuel your performance with nutrition strategies designed for athletes — from weekend warriors to competitive pros.",
    icon: faDumbbell,
    image: "/images/services/sports-nutrition.jpg",
    features: [
      "Pre/post workout fueling",
      "Competition nutrition planning",
      "Hydration strategies",
      "Supplement guidance",
      "Recovery nutrition protocols",
    ],
  },
  {
    slug: "digestive-health",
    title: "Digestive Health & Gut Wellness",
    description:
      "Relieve bloating, IBS, and digestive discomfort through targeted nutritional therapy and gut-healing protocols.",
    icon: faAppleAlt,
    image: "/images/services/digestive-health.jpg",
    features: [
      "Food sensitivity testing",
      "Elimination diet guidance",
      "Probiotic & prebiotic plans",
      "Gut microbiome assessment",
      "Symptom tracking & analysis",
    ],
  },
  {
    slug: "chronic-disease-management",
    title: "Chronic Disease Nutrition",
    description:
      "Medical nutrition therapy for diabetes, heart disease, hypertension, and autoimmune conditions — in partnership with your care team.",
    icon: faHeart,
    image: "/images/services/chronic-disease-management.jpg",
    features: [
      "Diabetes meal planning",
      "Heart-healthy eating plans",
      "Blood sugar monitoring integration",
      "Physician coordination",
      "Lab result tracking",
    ],
  },
  {
    slug: "family-nutrition",
    title: "Family & Pediatric Nutrition",
    description:
      "Help your family build healthy eating habits together — from picky eaters to teen athletes, we've got you covered.",
    icon: faUsers,
    image: "/images/services/family-nutrition.jpg",
    features: [
      "Picky eating strategies",
      "Family meal planning",
      "Childhood obesity support",
      "School lunch guidance",
      "Teen nutrition education",
    ],
  },
  {
    slug: "grocery-store-tours",
    title: "Grocery Store Tours",
    description:
      "Learn to navigate grocery aisles like a pro — read labels, compare products, and shop smarter for your health.",
    icon: faShoppingBasket,
    image: "/images/services/grocery-store-tours.jpg",
    features: [
      "In-person or virtual tours",
      "Label reading workshops",
      "Budget-friendly shopping tips",
      "Pantry makeover guide",
      "Seasonal produce guides",
    ],
  },
  {
    slug: "corporate-wellness",
    title: "Corporate Wellness Programs",
    description:
      "Bring nutrition education to your workplace with lunch-and-learns, wellness challenges, and one-on-one coaching.",
    icon: faSeedling,
    image: "/images/services/corporate-wellness.jpg",
    features: [
      "Lunch-and-learn sessions",
      "Office wellness challenges",
      "Individual employee consults",
      "Healthy snack station setup",
      "Wellness program reporting",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "diabetes-reversal-cohort",
    title: "Diabetes Reversal Cohort Study",
    description:
      "A 12-month group program that helped 40 participants reduce HbA1c by an average of 2.1 points through dietary intervention alone.",
    image: "/images/projects/diabetes-reversal-cohort.jpg",
    category: "Medical Nutrition",
  },
  {
    slug: "marathon-fueling-protocol",
    title: "Marathon Fueling Protocol",
    description:
      "Developed and tested a race-day nutrition protocol for 200+ runners at the Portland Marathon, reducing GI distress by 68%.",
    image: "/images/projects/marathon-fueling-protocol.jpg",
    category: "Sports Nutrition",
  },
  {
    slug: "corporate-gut-health-program",
    title: "Corporate Gut Health Initiative",
    description:
      "A 6-month workplace wellness program reducing digestive complaints by 45% across 12 tech companies in the Pacific Northwest.",
    image: "/images/projects/corporate-gut-health-program.jpg",
    category: "Corporate Wellness",
  },
  {
    slug: "school-lunch-overhaul",
    title: "School Lunch Menu Overhaul",
    description:
      "Partnered with 8 Portland-area schools to redesign cafeteria menus, increasing vegetable consumption by 35% among K-5 students.",
    image: "/images/projects/school-lunch-overhaul.jpg",
    category: "Pediatric Nutrition",
  },
  {
    slug: "mindful-eating-pilot",
    title: "Mindful Eating Clinical Trial",
    description:
      "A randomized controlled trial demonstrating that mindful eating interventions reduced binge eating episodes by 60% over 8 weeks.",
    image: "/images/projects/mindful-eating-pilot.jpg",
    category: "Behavioral Nutrition",
  },
  {
    slug: "food-pantry-partnership",
    title: "Food Pantry Nutrition Program",
    description:
      "Designed nutrient-dense meal kits and cooking classes for local food pantries, reaching 1,200+ families facing food insecurity.",
    image: "/images/projects/food-pantry-partnership.jpg",
    category: "Community Outreach",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Chen",
    role: "Weight Management Client",
    content:
      "I've tried every diet out there over 15 years. NourishWell was the first program that didn't feel like a diet at all. I lost 45 pounds and — more importantly — I've kept it off for two years. They taught me how to eat, not what to avoid.",
    rating: 5,
    image: "/images/team/team-1.jpg",
  },
  {
    name: "Marcus Rivera",
    role: "Triathlete & Sports Nutrition Client",
    content:
      "The race-day fueling strategy NourishWell designed for me was a game changer. No more bonking at mile 18, no more GI issues. I set a PR at Ironman Coeur d'Alene and I credit the nutrition plan for at least 20 minutes of that improvement.",
    rating: 5,
    image: "/images/team/team-2.jpg",
  },
  {
    name: "Dr. Emily Park",
    role: "Referring Physician",
    content:
      "I refer my diabetic patients to NourishWell because I've seen the results firsthand. Their registered dietitians coordinate closely with our clinic, and my patients consistently show improved A1C, blood pressure, and cholesterol levels within 3 months.",
    rating: 5,
    image: "/images/team/team-3.jpg",
  },
  {
    name: "The Nguyens",
    role: "Family Nutrition Clients",
    content:
      "Our whole family sees Jackie at NourishWell — me, my husband, and our two picky eaters. She made healthy eating fun for the kids and stress-free for us parents. Dinnertime used to be a battlefield. Now it's the best part of our day.",
    rating: 5,
    image: "/images/team/team-4.jpg",
  },
  {
    name: "James Aldridge",
    role: "Digestive Health Client",
    content:
      "I suffered from IBS for a decade. Within 6 weeks of following NourishWell's elimination protocol, my symptoms were 80% better. They identified trigger foods I never would have guessed. I have my life back.",
    rating: 5,
    image: "/images/team/team-5.jpg",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Priya Mehta, RDN",
    role: "Founder & Lead Dietitian",
    image: "/images/team/dr-priya-mehta.jpg",
  },
  {
    name: "Jackson Wells, CNS",
    role: "Sports Nutrition Specialist",
    image: "/images/team/jackson-wells.jpg",
  },
  {
    name: "Lucia Fernandez, RDN",
    role: "Pediatric & Family Nutritionist",
    image: "/images/team/lucia-fernandez.jpg",
  },
  {
    name: "Kevin Park, MS, RD",
    role: "Clinical Nutrition Director",
    image: "/images/team/kevin-park.jpg",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$149",
    period: "/session",
    description: "Perfect for a one-time nutritional tune-up or specific question.",
    features: [
      "60-minute initial consultation",
      "Dietary assessment & analysis",
      "Personalized action plan",
      "One follow-up email check-in",
      "Access to recipe library",
    ],
  },
  {
    name: "Wellness Journey",
    price: "$399",
    period: "/month",
    description: "Comprehensive ongoing support — our most popular plan.",
    highlighted: true,
    features: [
      "2 sessions per month (50 min each)",
      "Custom weekly meal plans",
      "Unlimited messaging between sessions",
      "Body composition tracking",
      "Grocery store tour (1 included)",
      "Progress dashboard access",
    ],
  },
  {
    name: "Total Transformation",
    price: "$749",
    period: "/month",
    description: "Intensive, high-touch nutrition coaching for complex goals.",
    features: [
      "4 sessions per month (50 min each)",
      "Everything in Wellness Journey",
      "Metabolic testing included",
      "Food sensitivity testing",
      "24/7 priority messaging",
      "Physician coordination & reports",
      "Supplement protocol design",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Do I need a doctor's referral to book an appointment?",
    a: "No referral is needed for general nutrition counseling. However, if you're seeking medical nutrition therapy for a diagnosed condition (diabetes, heart disease, etc.), we'll coordinate with your physician to ensure aligned care. We're happy to request records on your behalf.",
  },
  {
    q: "Is NourishWell covered by health insurance?",
    a: "Many of our services are covered by insurance when prescribed as medical nutrition therapy. We're in-network with Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. We'll verify your benefits before your first appointment and handle all billing.",
  },
  {
    q: "How is this different from just Googling a diet plan?",
    a: "Generic diet plans have a 95% failure rate because they ignore your unique biology, preferences, and lifestyle. Our plans are built on your actual metabolic data, food sensitivities, health history, and goals — and we adjust them in real time based on your results and feedback.",
  },
  {
    q: "Do you offer virtual appointments?",
    a: "Yes! All of our services are available virtually via secure video conferencing. Many clients prefer virtual sessions for convenience, though we also offer in-person appointments at our Portland clinic. Grocery store tours can be done virtually or in-person.",
  },
  {
    q: "What qualifications do your nutritionists have?",
    a: "Every practitioner at NourishWell holds at minimum a Registered Dietitian Nutritionist (RDN) credential, which requires a master's degree, 1,200 hours of supervised practice, and passing a national board exam. Several team members also hold advanced certifications in sports nutrition, pediatric nutrition, and clinical dietetics.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients notice improvements in energy, digestion, and overall wellbeing within 2-3 weeks. Measurable changes in weight, lab values, or athletic performance typically appear within 6-12 weeks, depending on your starting point and goals. We track progress objectively at every session.",
  },
];
