"use client";

import { useState } from "react";

const tasks = [
  "Sword control",
  "Physical endurance",
  "Team coordination",
];

export default function TaskProgress() {
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const completedCount = completedTasks.filter(Boolean).length;
  const percentage = Math.round((completedCount / tasks.length) * 100);

  function toggleTask(index: number) {
    setCompletedTasks((currentTasks) =>
      currentTasks.map((isCompleted, taskIndex) =>
        taskIndex === index ? !isCompleted : isCompleted,
      ),
    );
  }

  return (
    <section aria-label="Training task completion">
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={task}>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={completedTasks[index]}
                onChange={() => toggleTask(index)}
              />
              <span>{task}</span>
            </label>
          </li>
        ))}
      </ul>

      <p className="mt-6">
        {completedCount} / {tasks.length} completed ({percentage}%)
      </p>
    </section>
  );
}
