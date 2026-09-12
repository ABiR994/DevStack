import { HiX } from "react-icons/hi";
import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  const isEmpty = stack.length === 0;

  return (
    <aside className="w-80 flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
      <p className="mt-1 text-sm text-gray-400">
        {isEmpty
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      <div className="mt-4">
        {isEmpty ? (
          <div className="rounded-lg border border-dashed border-gray-200 py-8 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {stack.map((technology) => (
              <li
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {technology.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  className="text-gray-400 hover:text-red-500"
                >
                  <HiX className="text-lg" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {!isEmpty && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default YourStack;
