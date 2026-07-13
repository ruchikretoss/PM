import { useState, useEffect, useRef } from "react";
import { Sparkles, Ban, Coffee, Droplet } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

/* ─── SERVICE DATA extracted from thepermanentmakeupstudios.com/services/ ─── */

const SERVICES = [
  {
    id: "classicextensions",
    category: "Eyelash Extensions",
    name: "CLASSIC EYELASH EXTENSIONS",
    image: "/classic_eyelash_extensions.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Discover timeless elegance with our Classic Eyelash Extensions. In this meticulously crafted service, individual lash extensions are delicately applied to enhance your natural beauty. The result is a classic, sophisticated look that amplifies the allure of your eyes, leaving you with lashes that are seamlessly blended, fuller, and enduring.",
    items: [
      { name: "Classic Full Set (2 Hrs)", price: "$175", desc: "Indulge in luxury with our Classic Full Set, a 2.5-hour experience where our skilled artisans meticulously apply individual lash extensions to create a timeless and voluminous look." },
      { name: "Classic Fill (1 Hour)", price: "$60", desc: "Maintain your lash perfection effortlessly with our Classic Fill, a quick 1-hour touch-up session designed to refresh and extend the life of your lash extensions." },
    ],
  },
  {
    id: "hybridextensions",
    category: "Eyelash Extensions",
    name: "HYBRID EYELASH EXTENSIONS",
    image: "/hybrid_eyelash_extensions.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Experience the perfect fusion of volume and texture with our Hybrid Eyelash Extensions. This dynamic service combines classic and volume lash techniques, resulting in a harmonious blend of fullness and definition. Our Hybrid Extensions provide a unique balance, ensuring your lashes are both dynamic and elegantly refined.",
    items: [
      { name: "Hybrid Full Set (1½ Hours)", price: "$200", desc: "Immerse yourself in the perfect blend of volume and texture with our Hybrid Full Set. In just 2½ hours, our skilled technicians combine the best of classic and volume lash techniques." },
      { name: "Hybrid Fill (1 Hour)", price: "$75", desc: "Keep your lashes in peak condition with our Hybrid Fill, a swift 1-hour touch-up to maintain the impeccable beauty of your extensions." },
    ],
  },
  {
    id: "volumeextensions",
    category: "Eyelash Extensions",
    name: "VOLUME EYELASH EXTENSIONS",
    image: "/volume_eyelash_extensions.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Experience the epitome of lash luxury with our Volume Eyelash Extensions. This advanced technique involves the meticulous application of multiple lightweight extensions per natural lash, creating a plush, voluminous effect. Our Volume Extensions provide a glamorous and full-bodied finish.",
    items: [
      { name: "Volume Full Set (2 Hours)", price: "$250", desc: "Elevate your lashes to new dimensions with our Volume Full Set Eyelash Extensions. In just 2 hours, our skilled technicians artfully apply multiple lightweight extensions, creating a voluminous and dramatic look." },
      { name: "Volume Fill (1½ Hours)", price: "$90", desc: "Maintain the bold and beautiful allure of your volume lashes with our Volume Fill service. Our expert technicians refresh and revitalize your lashes." },
    ],
  },
  {
    id: "lashliftandtint",
    category: "Lash Lift & Tint",
    name: "LASH LIFT & TINT",
    image: "/service_lashes.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Reveal the natural beauty of your lashes with our Lash Lift and Tint service. This transformative treatment lifts and curls your natural lashes, adding length, definition, and a rich tint that darkens and enhances for a wide-eyed, mascara-free look that lasts.",
    items: [
      { name: "Lash Lift (1 Hour)", price: "$95", desc: "Our Lash Lift lifts and curls your natural lashes for a longer, more elegant look — no extensions needed." },
      { name: "Lash Lift & Tint (1½ Hours)", price: "$120", desc: "Combines a full lash lift with a rich, darkening tint for maximum impact." },
      { name: "Lash Tint (30 Mins)", price: "$35", desc: "A targeted tint to deepen and define your natural lashes for a mascara-free effect." },
    ],
  },
  {
    id: "powderbrows",
    category: "Brow Services",
    name: "POWDER BROWS",
    image: "/powder_brows_before.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "Achieve soft, defined brows with our Powder Brows service. Using a gentle shading technique, we create a filled-in, powdered effect that enhances your natural brow shape and adds depth and dimension. Perfect, flawless brows every morning.",
    items: [
      { name: "Powder Brows (2½ Hours)", price: "$500", desc: "A soft, gradient powdered brow effect using a machine technique for a long-lasting polished look." },
      { name: "Brow Touch Up (Must be done within 8 weeks)", price: "$99", desc: "Second session touch up for all brow techniques. Must be done within 8 weeks of your initial session." },
    ],
  },
  {
    id: "microblading",
    category: "Brow Services",
    name: "MICROBLADING",
    image: "/powder_brows_after.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "Experience the precision of our Microblading service. Meticulously crafting semi-permanent hair-like strokes, we define and enhance your brows to look natural and full. Say goodbye to daily brow pencils and enjoy perfectly shaped brows.",
    items: [
      { name: "Microblading (1½ Hours)", price: "$400", desc: "Semi-permanent makeup technique using fine strokes to mimic natural brow hairs." },
      { name: "Brow Touch Up (Must be done within 8 weeks)", price: "$99", desc: "Second session touch up for all brow techniques. Must be done within 8 weeks of your initial session." },
    ],
  },
  {
    id: "combinationbrows",
    category: "Brow Services",
    name: "COMBINATION BROWS",
    image: "/service_brows.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "Experience the best of both worlds with our Combination Brows service. Combining the precision of microblading with the softness of shading, we create meticulously crafted brows that mimic the appearance of natural hair strokes, enhanced with subtle shading for added depth and fullness.",
    items: [
      { name: "Combination Brows (2 Hours)", price: "$450", desc: "A custom blend of hair-stroke microblading and soft powder shading for the ultimate textured, defined look." },
      { name: "Brow Touch Up (Must be done within 8 weeks)", price: "$99", desc: "Second session touch up for all brow techniques. Must be done within 8 weeks of your initial session." },
    ],
  },
  {
    id: "nanobrows",
    category: "Brow Services",
    name: "NANO BROWS",
    image: "/service_brows.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Nano Brows is a cosmetic tattoo technique that uses a single needle to create super-fine, realistic hair strokes. It is the most precise brow tattooing option available, suitable for all skin types.",
    items: [
      { name: "Nano Brows", price: "$699", desc: "Precision nano needle technique for ultra-realistic, hair-stroke brows that last." },
    ],
  },
  {
    id: "eyebrowlamination",
    category: "Brow Services",
    name: "EYEBROW LAMINATION",
    image: "/service_brows.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Revel in the ultimate brow transformation with our Eyebrow Lamination service. In this meticulous process, your brows are expertly shape-corrected, set in place, and tinted to create a beautifully full, defined, and feathered look that lasts.",
    items: [
      { name: "Brow Lamination (1 Hour)", price: "$110", desc: "Transform your brows with our Brow Lamination service. In just one hour, our skilled technicians expertly shape and set your brows, creating a defined and lifted look." },
      { name: "Brow Tint (½ Hour)", price: "$35", desc: "In a quick 30-minute session, our expert technicians apply a tint to deepen and accentuate your brows, providing a natural yet bold look." },
    ],
  },
  {
    id: "lipblush",
    category: "Lip Blush",
    name: "LIP BLUSHING",
    image: "/service_lipblush.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "At Permanent Makeup Studio we create the best lip blush tattoos in NYC. Lip Blush Tattoo is a great way to enhance your natural lips. Lip Blush is a cosmetic tattoo that can be used to balance symmetry, increase the appearance of the lip size, camouflage scars on the lip tissue, change the color of the lips, and create a more youthful lip appearance. Lip Blush is a natural looking enhancement.",
    items: [
      { name: "Lip Blushing (1½ Hour)", price: "$550", desc: "A soft, semi-permanent lip color enhancement that adds definition and a natural tint." },
      { name: "4-6 week touch up for all permanent makeup", price: "$99", desc: "Second session touch up for lip blush tattoo — must be done within 8 weeks of initial session." },
      { name: "Lip Correction + Follow up (3 Hours)", price: "$675", desc: "Expert correction to balance symmetry, adjust previous color, and improve definition." },
      { name: "Dark Lip Neutralization (3 Hours)(2+ visits)", price: "$800", desc: "Neutralization process specifically designed to lift dark cool tones in the lips." }
    ],
    note: "If you have had permanent makeup done with us in the past, your touch-ups will be half of our menu pricing for future appointments.",
  },
  {
    id: "facials",
    category: "SMP & Facials",
    name: "FACIALS",
    image: "/service_lashes.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "Indulge in a rejuvenating journey for your skin with our meticulously curated facial services. Reveal clear, healthy skin and neck tightening treatments custom-tailored to your unique skincare needs.",
    items: [
      { name: "Hydro Jelly Facial with Massage", price: "$45", desc: "Experience the epitome of skincare luxury with our Hydro Jelly Facial. Immerse your skin in a soothing and hydrating treatment that revitalizes and nourishes, complemented by a relaxing massage." },
      { name: "Facial with Extraction", price: "$75", desc: "Cleanse and extract impurities, promoting clear and healthy skin. Includes a dream-like pampering component leaving you refreshed and glowing." },
      { name: "Face and Neck Tightening Package (3 sessions)", price: "$299", desc: "A targeted package of three sessions focusing on skin elasticity and firmness around the face and neck." },
      { name: "Face and Neck Tightening Package (5 sessions)", price: "$599", desc: "A comprehensive five-session package for maximum face and neck tightening results." }
    ],
  },
  {
    id: "smp",
    category: "SMP & Facials",
    name: "SMP — SCALP MICROPIGMENTATION",
    image: "/smp_before.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "For those with male-pattern baldness who decide to shave their head and don't want the typical balding horseshoe pattern visible, SMP can create the appearance of a full head of hair. SMP is also a valuable tool to complete the appearance of hair transplant procedures.",
    items: [
      { name: "Male Pattern Baldness", price: "$5,000 – $6,000", desc: "Creates the appearance of a full head of hair for those with full-head male pattern baldness." },
      { name: "Receding Hairlines (3+ Hrs, 2 visits)", price: "$900 – $2,500", desc: "Restore your natural youthful hairline with precision pigment placement." },
      { name: "SMP For Women", price: "$800 – $1,200", desc: "Great cosmetic option for women with general thinning and adding density." },
      { name: "Small–Medium Spot on Top (2 visits)", price: "$800 – $2,300", desc: "Target small or medium thinning spots on the crown." },
      { name: "Hair Part (3+ Hrs, 2 visits)", price: "$1,200 – $2,200", desc: "Define and restore your hair part for a natural, full-hair appearance." },
      { name: "Hair Surgery Scar (2 visits)", price: "$1,200 – $1,800", desc: "Camouflage scars from hair transplant surgery." },
      { name: "Hair Half Head (2 visits)", price: "$2,500 – $4,000", desc: "Half head SMP treatment — price may vary based on coverage area." },
      { name: "Hair Bald Head (3 visits)", price: "$5,999", desc: "Full head SMP for complete coverage — pricing may vary." },
    ],
  },
  {
    id: "spraytans",
    category: "Spray Tans / Waxing",
    name: "CUSTOM SPRAY TANS",
    image: "/service_lipblush.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "Loaded with moisturizing, firming, anti-aging ingredients in the solution! Includes a detailed consultation with one of our certified estheticians. We evaluate your needs such as desired color, your skin type, and any upcoming event that you may be getting ready for! ZERO Orange undertones leaving you with a GOLDEN TAN.",
    items: [
      { name: "Spray Tan Package - 5 Sessions", price: "$125", desc: "Indulge in a sun-kissed glow all year round with our Spray Tan Package. Enjoy five sessions of our premium spray tanning service for a flawless and radiant tan." },
      { name: "Custom Spray Tan", price: "$45", desc: "Experience the luxury of a tailored tan to suit your unique skin tone and preferences. Achieve a natural, sun-kissed radiance without UV rays." },
    ],
  },
  {
    id: "sugaring",
    category: "Spray Tans / Waxing",
    name: "SUGAR WAXING",
    image: "/service_brows.png",
    fallbackGradient: "linear-gradient(135deg,#202020 0%,#343434 100%)",
    description:
      "Indulge in the gentle art of hair removal with our Sugar Waxing service, a method that not only leaves your skin irresistibly smooth but also embraces the natural simplicity of its ingredients. Our expert aestheticians use a specially crafted paste made from lemon, sugar, and water, heated and cooled to perfection. Sugar Waxing pulls hair from the roots, leaving your skin silky and hair-free for an extended period. The unique sugar paste is applied lukewarm, eliminating the risk of burns associated with traditional waxing. Experience the difference as the coagulated paste adheres to the hair, not the skin, ensuring a gentle yet effective hair removal experience.",
    items: [
      { name: "Eye Brows", price: "$30", desc: "Frame your gaze with precision and elegance. Our skilled aestheticians sculpt and shape your brows for a defined and polished look." },
      { name: "Chin", price: "$20", desc: "Smooth away unwanted hair from the chin area, leaving your skin flawlessly smooth." },
      { name: "Upper Lip", price: "$20", desc: "Achieve a velvety, hair-free upper lip with delicate hair removal for a soft, refined appearance." },
      { name: "Underarm", price: "$35", desc: "Embrace the freedom of hair-free underarms with clean and smooth underarm hair removal." },
      { name: "Brazilian", price: "$70", desc: "Experience the ultimate in intimate grooming. Our expert technicians ensure a comfortable, efficient experience, leaving your skin impeccably smooth." },
      { name: "Line Only", price: "$50", desc: "Define your bikini line with clean lines and a flawless finish for a sleek, confident appearance." }
    ],
  },
  {
    id: "eyeliner",
    category: "Permanent Makeup",
    name: "SEMI-PERMANENT EYELINER",
    image: "/service_lashes.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Enhance the shape, color, and definition of your eyes with our semi-permanent eyeliner. Wake up every morning with perfectly defined eyes without the hassle of smudge-prone eyeliner pencils.",
    items: [
      { name: "Top Eyelash Enhancement", price: "$250", desc: "Delicate pigment placement along the upper lash line to make lashes look thicker and define the eyes." },
      { name: "Permanent eyeliner top only includes wing and shadow (45 Mins)", price: "$475", desc: "A top-only permanent eyeliner with custom wing and shadow effects." },
      { name: "Permanent Eyeliner Bottom (45 Mins)", price: "$350", desc: "Precisely applied bottom-only eyeliner for complete eye definition." }
    ]
  },
  {
    id: "cheekmakeup",
    category: "Permanent Makeup",
    name: "CHEEK TINT TATTOO",
    image: "/service_lipblush.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Wake up with a natural, healthy glow. Cheek Tint Tattoo (blush tattoo) provides a soft, airbrushed wash of color to your cheeks, or add cute freckles and beauty marks for custom details.",
    items: [
      { name: "Freckles", price: "$300 and up", desc: "Add natural-looking freckles across the nose and cheeks." },
      { name: "Beauty mark 1-3", price: "$100", desc: "Add 1 to 3 classic beauty marks to enhance your facial features." },
      { name: "Cheek tint first session", price: "$300", desc: "First session of blush tattoo to add a youthful flush of color to the cheeks." },
      { name: "Additional session", price: "$150", desc: "Follow-up session to refine and perfect the cheek tint intensity." },
      { name: "Refresh sessions", price: "$200 and up", desc: "Refresh the color of your cheek tint over time." }
    ]
  },
  {
    id: "addons",
    category: "Add-ons Services",
    name: "ADD-ONS SERVICES",
    image: "/service_lashes.png",
    fallbackGradient: "linear-gradient(135deg,#343434 0%,#202020 100%)",
    description:
      "Enhance your lash, brow, or lip experience with our premium add-on services, custom designed to complement your main treatments.",
    items: [
      { name: "Lip collagen mask (20 mins)", price: "$10", desc: "Ultra-hydrating lip mask to plump and nourish the lip area during your treatment." },
      { name: "Under eye collagen pads (20 mins)", price: "$10", desc: "Soothing under-eye treatment to reduce puffiness and dark circles." },
      { name: "Organic eyelash keratin serum", price: "$15", desc: "Nourishing keratin treatment to strengthen and protect natural lashes." },
      { name: "Organic vitamin E lip oil", price: "$15", desc: "Nourishes lips with intense moisture and shine." },
      { name: "Lash Bath (15 mins)", price: "$15", desc: "Gentle cleanse of the lashes to prepare for extensions or lifts." },
      { name: "Lash Bath with brush", price: "$25", desc: "Cleanse lashes and receive your own soft lash brush to keep." },
      { name: "Eyelash spindle", price: "$1", desc: "High-quality spoolie brush for daily lash grooming." },
      { name: "Wash brush", price: "$2", desc: "Special cleaning brush for lash extensions." },
      { name: "Colored lashes", price: "$50", desc: "Add vibrant colored lashes for a custom, fun look." },
      { name: "Glitter lashes", price: "$50", desc: "Add sparkles and glitter lashes to stand out." },
      { name: "lashes removal (20 mins)", price: "$35", desc: "Safe, damage-free removal of lash extensions." }
    ]
  }
];

const CATEGORIES = [
  "Eyelash Extensions",
  "Lash Lift & Tint",
  "Brow Services",
  "Lip Blush",
  "SMP & Facials",
  "Spray Tans / Waxing"
];

const ALL_CATEGORIES = [...new Set(SERVICES.map(s => s.category))];

const CATEGORY_SLUGS = {
  "all": "All",
  "eyelash-extensions": "Eyelash Extensions",
  "lash-lift-tint": "Lash Lift & Tint",
  "brow-services": "Brow Services",
  "lip-blush": "Lip Blush",
  "smp-facials": "SMP & Facials",
  "spray-tans-waxing": "Spray Tans / Waxing"
};

const REVERSE_CATEGORY_SLUGS = {
  "All": "all",
  "Eyelash Extensions": "eyelash-extensions",
  "Lash Lift & Tint": "lash-lift-tint",
  "Brow Services": "brow-services",
  "Lip Blush": "lip-blush",
  "SMP & Facials": "smp-facials",
  "Spray Tans / Waxing": "spray-tans-waxing"
};

const BOOK_URL =
  "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services";

/* ─── Accordion Item ─── */
function PriceItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasParentheses = item.name.includes("(");
  const mainName = hasParentheses ? item.name.split("(")[0].trim() : item.name;
  const subDetails = hasParentheses ? "(" + item.name.split("(").slice(1).join("(") : "";

  return (
    <div
      className={`border border-[rgba(248,148,255,0.15)] rounded-lg overflow-hidden transition-all duration-300 ${open ? "bg-[rgba(248,148,255,0.06)]" : "bg-[rgba(255,255,255,0.02)]"} hover:border-[rgba(248,148,255,0.4)]`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left gap-4"
      >
        <span
          className="font-semibold text-[14px] leading-[1.4] flex-1"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-white)" }}
        >
          {mainName}
          {subDetails && (
            <span className="block text-[11px] font-normal mt-1 text-white/50 tracking-[0.5px]">
              {subDetails}
            </span>
          )}
        </span>
        <span
          className="font-bold text-[15px] whitespace-nowrap"
          style={{ color: "var(--primary-pink)", fontFamily: "var(--font-accent)" }}
        >
          {item.price}
        </span>
        <span
          className={`text-[20px] transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
          style={{ color: "var(--primary-pink)" }}
        >
          +
        </span>
      </button>
      {open && item.desc && (
        <div
          className="px-5 pb-4 text-[13px] leading-[1.7]"
          style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
        >
          {item.desc}
        </div>
      )}
    </div>
  );
}

/* ─── Service Card ─── */
function ServiceCard({ service, reverse }) {
  const imgRef = useRef(null);
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      id={service.id}
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-8 md:gap-12 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Image column */}
      <div className="w-full md:w-5/12 shrink-0">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: "4/3", background: service.fallbackGradient }}
        >
          {!imgError ? (
            <img
              ref={imgRef}
              src={service.image}
              alt={service.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
              style={{ display: imgError ? "none" : "block" }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: service.fallbackGradient }}>
              <span className="text-[48px]">✨</span>
            </div>
          )}
          {/* Pink overlay glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg,rgba(248,148,255,0.08) 0%,transparent 60%)" }}
          />
          {/* Category badge */}
          <span
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[1px]"
            style={{ backgroundColor: "rgba(248,148,255,0.18)", color: "var(--primary-pink)", backdropFilter: "blur(8px)", fontFamily: "var(--font-accent)", border: "1px solid rgba(248,148,255,0.3)" }}
          >
            {service.category}
          </span>
        </div>
      </div>

      {/* Content column */}
      <div className="w-full md:w-7/12 flex flex-col gap-5">
        <div>
          <h2
            className="text-[28px] md:text-[32px] font-bold mb-3 leading-[1.1]"
            style={{ fontFamily: "var(--font-title)", color: "var(--text-white)" }}
          >
            {service.name}
          </h2>
          <p
            className="text-[14px] leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
          >
            {service.description}
          </p>
        </div>

        {service.note && (
          <div
            className="text-[13px] leading-[1.6] px-4 py-3 rounded-lg"
            style={{ background: "rgba(248,148,255,0.07)", borderLeft: "3px solid var(--primary-pink)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
          >
            {service.note}
          </div>
        )}

        {/* Price Items */}
        <div className={service.items.length > 4 ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "flex flex-col gap-3"}>
          {service.items.map((item, idx) => (
            <PriceItem key={idx} item={item} />
          ))}
        </div>

        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="self-start no-underline font-bold text-[12px] tracking-[1.5px] px-6 py-3 rounded-full transition-all duration-300 uppercase"
          style={{
            background: "var(--primary-pink)",
            color: "#000",
            fontFamily: "var(--font-accent)",
            boxShadow: "0 4px 20px rgba(248,148,255,0.25)",
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 28px rgba(248,148,255,0.5)")}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(248,148,255,0.25)")}
        >
          Book Now →
        </a>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ServicesPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [stickyNav, setStickyNav] = useState(false);
  const heroRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Sticky nav trigger
    const handleScroll = () => {
      const heroH = heroRef.current ? heroRef.current.offsetHeight : 400;
      setStickyNav(window.scrollY > heroH - 80);
    };
    window.addEventListener("scroll", handleScroll);

    // Handle anchor or category slug from pathname
    const pathname = window.location.pathname;
    if (pathname.startsWith("/services/")) {
      const param = pathname.replace("/services/", "");
      if (param) {
        if (CATEGORY_SLUGS[param]) {
          setActiveCategory(CATEGORY_SLUGS[param]);
          setTimeout(() => {
            if (mainRef.current) {
              const yOffset = -140;
              const y = mainRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 300);
        } else {
          setTimeout(() => {
            const el = document.getElementById(param);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 400);
        }
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter(s => s.category === activeCategory);

  return (
    <>
      <style>{`
        .svc-cat-btn { transition: all 0.25s ease; }
        .svc-cat-btn:hover { color: var(--primary-pink) !important; }
        .svc-cat-btn.active {
          background: var(--primary-pink) !important;
          color: #000 !important;
          box-shadow: 0 4px 16px rgba(248,148,255,0.35);
        }
        .svc-sticky-nav {
          position: sticky;
          top: 80px;
          z-index: 100;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: all 0.4s ease;
        }
        @keyframes svcHeroFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        .svc-hero-orb { animation: svcHeroFloat 7s ease-in-out infinite; }
        .svc-hero-orb2 { animation: svcHeroFloat 9s ease-in-out infinite reverse; }
        @keyframes svcFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-fade-up { animation: svcFadeUp 0.8s ease both; }
      `}</style>

      <Header currentPage="services" onNavigate={onNavigate} />

      {/* ── Hero Banner ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: "420px",
          paddingTop: "200px",
          paddingBottom: "80px",
          background: "linear-gradient(160deg, var(--bg-dark-purple) 0%, #0d0d12 60%, #202020 100%)",
        }}
      >
        {/* Glow orbs */}
        <div
          className="svc-hero-orb absolute rounded-full pointer-events-none"
          style={{ width: 450, height: 450, top: -120, left: -80, background: "radial-gradient(circle,rgba(248,148,255,0.18) 0%,transparent 70%)" }}
        />
        <div
          className="svc-hero-orb2 absolute rounded-full pointer-events-none"
          style={{ width: 350, height: 350, bottom: -80, right: -60, background: "radial-gradient(circle,rgba(248,148,255,0.15) 0%,transparent 70%)" }}
        />

        <div className="container text-center relative z-10 px-6">
          <span
            className="svc-fade-up inline-block font-bold uppercase tracking-[3px] text-[12px] mb-4"
            style={{ color: "var(--primary-pink)", fontFamily: "var(--font-accent)", animationDelay: "0.1s" }}
          >
            The Permanent Makeup Studios
          </span>
          <h1
            className="svc-fade-up text-[48px] md:text-[64px] font-bold leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-title)", color: "var(--text-white)", animationDelay: "0.2s" }}
          >
            Our{" "}
            <span style={{ color: "var(--primary-pink)", textShadow: "0 0 40px rgba(248,148,255,0.5)" }}>
              Services
            </span>
          </h1>
          <p
            className="svc-fade-up text-[16px] leading-[1.8] max-w-[600px] mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)", animationDelay: "0.35s" }}
          >
            Expert permanent makeup, lash artistry, and advanced spa services — crafted to enhance your natural beauty and simplify your life.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="svc-fade-up inline-block no-underline font-bold uppercase tracking-[1.5px] text-[12px] px-8 py-4 rounded-full transition-all duration-300"
            style={{
              background: "var(--primary-pink)",
              color: "#000",
              fontFamily: "var(--font-accent)",
              boxShadow: "0 6px 24px rgba(248,148,255,0.35)",
              animationDelay: "0.5s"
            }}
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* ── Sticky Category Nav ── */}
      <div
        className="svc-sticky-nav border-b w-full"
        style={{
          backgroundColor: stickyNav ? "rgba(7,7,8,0.96)" : "rgba(32,32,32,0.92)",
          borderColor: "rgba(248,148,255,0.12)",
        }}
      >
        <div className="container overflow-x-auto px-4 py-4">
          <div className="flex gap-3 items-center min-w-max justify-center">
            {["All", ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const slug = REVERSE_CATEGORY_SLUGS[cat] || "all";
                  window.history.pushState({}, "", `/services/${slug}`);
                  if (mainRef.current) {
                    const yOffset = -140; // Adjust for sticky header + category nav
                    const y = mainRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={`svc-cat-btn px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-[0.8px] whitespace-nowrap border ${activeCategory === cat ? "active" : ""}`}
                style={{
                  fontFamily: "var(--font-accent)",
                  color: activeCategory === cat ? "#000" : "rgba(255,255,255,0.65)",
                  borderColor: activeCategory === cat ? "transparent" : "rgba(248,148,255,0.2)",
                  background: activeCategory === cat ? "var(--primary-pink)" : "transparent",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Service Listings ── */}
      <main
        ref={mainRef}
        style={{
          background: "linear-gradient(180deg, #0d0d12 0%, var(--bg-dark-purple) 30%, #0d0d12 100%)",
          paddingBottom: "80px",
        }}
      >
        <div className="container px-6">
          {/* Category Groups */}
          {(activeCategory === "All" ? ALL_CATEGORIES : CATEGORIES.filter(cat => cat === activeCategory)).map(cat => {
            const catServices = filteredServices.filter(s => s.category === cat);
            if (!catServices.length) return null;
            return (
              <div key={cat} className="mt-[80px]">
                {/* Category Header */}
                <div className="flex items-center gap-6 mb-20">
                  <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(248,148,255,0.5), transparent)" }} />
                  <h2
                    className="text-[13px] font-bold uppercase tracking-[3px] whitespace-nowrap"
                    style={{ color: "var(--primary-pink)", fontFamily: "var(--font-accent)" }}
                  >
                    {cat}
                  </h2>
                  <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(248,148,255,0.5), transparent)" }} />
                </div>

                {/* Service Cards */}
                <div className="flex flex-col gap-[100px]">
                  {catServices.map((service, idx) => (
                    <ServiceCard key={service.id} service={service} reverse={idx % 2 !== 0} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* ── Prep Tips ── */}
          {(activeCategory === "All" || activeCategory === "Eyelash Extensions") && (
            <div
              className="mt-[100px] rounded-2xl p-8 md:p-12"
              style={{ background: "rgba(248,148,255,0.04)", border: "1px solid rgba(248,148,255,0.15)" }}
            >
              <h2
                className="text-[28px] md:text-[34px] font-bold mb-3"
                style={{ fontFamily: "var(--font-title)", color: "var(--text-white)" }}
              >
                Preparing for Your Lash Extension Appointment
              </h2>
              <p className="mb-8 text-[14px]" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}>
                To ensure the best results and longest-lasting lash extensions, it is essential to arrive with clean, makeup-free eyes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { icon: <Droplet className="text-[var(--primary-pink)]" size={28} />, tip: "Remove All Makeup", desc: "Make sure to thoroughly remove any eye makeup, including eyeliner, mascara, and eyeshadow. This helps the lash adhesive bond properly to your natural lashes." },
                  { icon: <Sparkles className="text-[var(--primary-pink)]" size={28} />, tip: "Arrive with Clean Lashes", desc: "Arriving with clean lashes will not only help us deliver the best results but also ensure the longevity and health of your extensions." },
                  { icon: <Ban className="text-[var(--primary-pink)]" size={28} />, tip: "Avoid Lash Tape & Strip Lashes", desc: "Please refrain from using any lash tape or peel-off products on the day of your appointment. Do not arrive wearing strip lashes or with strip lash bond on your eyes." },
                  { icon: <Coffee className="text-[var(--primary-pink)]" size={28} />, tip: "Avoid Caffeine & Stimulants", desc: "Excessive caffeine intake can cause the eyes to flicker, making it more difficult to apply lashes properly. Try to limit caffeine before your appointment." },
                ].map(({ icon, tip, desc }, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start p-5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(248,148,255,0.1)" }}
                  >
                    <span className="shrink-0 mt-1">{icon}</span>
                    <div>
                      <h4
                        className="font-bold text-[14px] mb-1"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-white)" }}
                      >
                        {tip}
                      </h4>
                      <p
                        className="text-[13px] leading-[1.7]"
                        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Products Banner ── */}
          <div
            className="mt-[100px] text-center py-16 rounded-2xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(248,148,255,0.12) 0%,rgba(82,79,76,0.15) 100%)", border: "1px solid rgba(248,148,255,0.2)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(248,148,255,0.08) 0%, transparent 70%)" }}
            />
            <h2
              className="text-[24px] md:text-[32px] font-bold mb-4 relative z-10 pb-4"
              style={{ fontFamily: "var(--font-title)", color: "var(--text-white)" }}
            >
              Our Products Are
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
              {["Gluten-Free", "Paraben-Free", "Sulfate-Free", "Cruelty-Free", "Non-Comedogenic"].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-[0.8px]"
                  style={{
                    background: "rgba(248,148,255,0.12)",
                    color: "var(--primary-pink)",
                    border: "1px solid rgba(248,148,255,0.3)",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block no-underline font-bold uppercase tracking-[1.5px] text-[12px] px-8 py-4 rounded-full relative z-10 transition-all duration-300"
              style={{
                background: "var(--primary-pink)",
                color: "#000",
                fontFamily: "var(--font-accent)",
                boxShadow: "0 6px 24px rgba(248,148,255,0.35)",
              }}
            >
              Book Now →
            </a>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}
