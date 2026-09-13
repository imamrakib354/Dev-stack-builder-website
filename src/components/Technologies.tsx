import type { TechnologyType } from "../Technology";
import { use, useState } from "react";
import Technology from "./Technology";
import Stack from "./Stack";
import { toast } from "react-toastify";

export interface TechnologiesProps {
    technologiesPromies: Promise<TechnologyType[]>;
}

const Technologies = ({ technologiesPromies }: TechnologiesProps) => {

    const technologies = use(technologiesPromies);

    const [selectedTechnologies, setSelectedTechnologies] =
        useState<TechnologyType[]>([]);

    const handleAddToStack = (technology: TechnologyType) => {

        setSelectedTechnologies([
            ...selectedTechnologies,
            technology
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id: string) => {

        const technology = selectedTechnologies.find(
            technology => technology.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter(
                technology => technology.id !== id
            )
        );

        if (technology) {
            toast.info(`${technology.name} removed from your stack!`);
        }
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack!");
    };

    return (
        <div className="container mx-auto px-6 py-16">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4 lg:mt-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-3">

                    {technologies.map(technology => (
                        <Technology
                            key={technology.id}
                            technology={technology}
                            onAdd={handleAddToStack}
                            isAdded={selectedTechnologies.some(
                                item => item.id === technology.id
                            )}
                        />
                    ))}

                </div>

                <div className="lg:col-span-1">

                    <Stack
                        selectedTechnologies={selectedTechnologies}
                        onRemove={handleRemoveFromStack}
                        onRemoveAll={handleRemoveAll}
                    />

                </div>

            </div>

        </div>
    );
};

export default Technologies;