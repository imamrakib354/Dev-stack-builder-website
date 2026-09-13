import type { TechnologyType } from "../Technology";

export interface TechnologyProps {
    technology: TechnologyType;
    onAdd: (technology: TechnologyType) => void;
    isAdded: boolean;
}

const Technology = ({ technology, onAdd, isAdded }: TechnologyProps) => {
    return (
        <div className="border border-gray-200 rounded-3xl p-8">

            <div className="flex justify-between items-start">
                <img
                    className="w-12 h-12"
                    src={technology.icon}
                    alt={technology.name}
                />

                <span className="bg-blue-50 text-sky-500 border border-sky-100 px-4 py-2 rounded-full">
                    {technology.badge}
                </span>
            </div>

            <div className="mt-8">
                <h2 className="text-[30px] font-bold text-[#111827]">
                    {technology.name}
                </h2>

                <p className="text-[20px] leading-8 text-slate-500 mt-2">
                    {technology.description}
                </p>
            </div>

            <div className="border-t border-gray-100 mt-6 pt-4 flex items-center justify-between">

                <span className="bg-gray-100 text-slate-600 px-3 py-1 rounded-md">
                    {technology.category}
                </span>

                <span className="text-slate-500">
                    {technology.difficulty}
                </span>

                <span className="text-slate-600">
                    <span className="text-yellow-400">★</span>{" "}
                    {technology.rating}
                </span>

            </div>

            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className="w-full bg-[#080D1C] text-white py-3 rounded-xl mt-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
};

export default Technology;