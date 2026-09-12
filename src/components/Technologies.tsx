import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import YourStack from "./YourStack";
import type { Technology } from "../types/technology";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((err) => console.error("Failed to load technologies:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Explore the <span className="text-gradient-brand">Technologies</span>
      </h2>
      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-10 flex items-start gap-6">
        {isLoading ? (
          <div className="flex flex-1 justify-center py-24">
            <span className="loading loading-spinner loading-lg text-primary" />
          </div>
        ) : (
          <div className="grid flex-1 grid-cols-3 gap-6">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={handleAddToStack}
              />
            ))}
          </div>
        )}

        <YourStack
          stack={stack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
