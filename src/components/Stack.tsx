import type { TechnologyType } from "../Technology";

interface StackProps {
    selectedTechnologies: TechnologyType[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const Stack = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll
}: StackProps) => {

    return (
        <div className="border border-gray-200 rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
                Your Stack
            </h2>

            <p className="text-lg text-slate-400 mt-2">
                {selectedTechnologies.length === 0
                    ? "No technologies selected yet."
                    : `${selectedTechnologies.length} Technology Selected`}
            </p>

            {selectedTechnologies.length === 0 ? (
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 mt-8 text-center">
                    <p className="text-lg text-slate-400">
                        Your stack is empty.
                    </p>
                </div>
            ) : (
                <div className="mt-6">

                    <div className="space-y-3">
                        {selectedTechnologies.map((technology) => (
                            <div
                                key={technology.id}
                                className="border border-gray-200 rounded-xl p-3 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">

                                    <img
                                        className="w-8 h-8"
                                        src={technology.icon}
                                        alt={technology.name}
                                    />

                                    <div>
                                        <h3 className="font-semibold">
                                            {technology.name}
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            {technology.category}
                                        </p>
                                    </div>

                                </div>

                                <button
                                    onClick={() => onRemove(technology.id)}
                                    className="text-slate-400 hover:text-red-500 text-2xl"
                                >
                                    ×
                                </button>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onRemoveAll}
                        className="w-full border border-red-300 text-red-500 rounded-xl py-2 mt-8 hover:bg-red-50"
                    >
                        Remove All
                    </button>

                </div>
            )}

        </div>
    );
};

export default Stack;