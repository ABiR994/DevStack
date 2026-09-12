import { FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

const badgeStyles: Record<string, string> = {
  Popular: "bg-purple-50 text-purple-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-blue-50 text-blue-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-indigo-50 text-indigo-600",
  Robust: "bg-stone-100 text-stone-600",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-cyan-50 text-cyan-600",
  Lightweight: "bg-lime-50 text-lime-600",
  NoSQL: "bg-green-50 text-green-600",
  Flexible: "bg-fuchsia-50 text-fuchsia-600",
  Design: "bg-pink-50 text-pink-600",
};

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechCard = ({ technology, isAdded, onAdd }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5">
      <div>
        <div className="flex items-start justify-between">
          <img src={icon} alt={name} className="h-10 w-10 object-contain" />
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              badgeStyles[badge] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {badge}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="rounded bg-gray-100 px-2 py-1">{category}</span>
            <span className="rounded bg-gray-100 px-2 py-1">{difficulty}</span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-gray-700">
            <FaStar className="text-amber-400" />
            {rating}
          </span>
        </div>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
