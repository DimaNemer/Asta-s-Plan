"use client";

import { useState } from "react";

const tasks = [
  {
    name: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
  },
  {
    name: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
  },
  {
    name: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
  },
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
    <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(18rem,0.8fr)] lg:gap-6">
      <section
        aria-labelledby="threat-brief-heading"
        className="min-w-0 rounded-xl border border-[#343740] border-t-2 border-t-[#ed343b] bg-[#20232b] p-4 shadow-lg shadow-black/10 sm:p-5 lg:col-start-1 lg:row-start-1"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2
            id="threat-brief-heading"
            className="text-base font-bold tracking-tight sm:text-lg"
          >
            Lucifero Threat Brief
          </h2>
          <span className="shrink-0 rounded border border-[#743139] bg-[#401e24] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ff9b9f]">
            High risk
          </span>
        </div>
        <dl className="grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          <div className="min-w-0 rounded-lg border border-[#30333c] bg-[#17191f] p-3">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-[#a5aab5]">
              Enemy
            </dt>
            <dd className="mt-1 text-xs font-semibold leading-5 text-[#f0f1f4] sm:text-[13px]">
              Lucifero — King of Devils
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-[#30333c] bg-[#17191f] p-3">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-[#ff777d]">
              Main threat
            </dt>
            <dd className="mt-1 text-xs font-semibold leading-5 text-[#f0f1f4] sm:text-[13px]">
              Powerful gravity magic
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-[#30333c] bg-[#17191f] p-3">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-[#56e0ab]">
              Preparation focus
            </dt>
            <dd className="mt-1 text-xs font-semibold leading-5 text-[#f0f1f4] sm:text-[13px]">
              Improve sword control, physical endurance, and teamwork.
            </dd>
          </div>
        </dl>
      </section>

      <section
        aria-labelledby="progress-heading"
        className="min-w-0 rounded-xl border border-[#343740] bg-[#20232b] p-4 shadow-lg shadow-black/10 sm:p-5 lg:col-start-2 lg:row-start-1 lg:self-start"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <h2 id="progress-heading" className="text-base font-bold">
            Preparation Progress
          </h2>
        </div>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#a5aab5]">
              Status
            </p>
            <p className="mt-1 text-sm font-bold leading-5 sm:text-base">
              {completedCount} / {tasks.length} Tasks Completed
            </p>
          </div>
          <p className="shrink-0 text-3xl font-bold leading-none text-[#f0444b]">
            {percentage}%
          </p>
        </div>
        <div
          role="progressbar"
          aria-label="Training-plan completion"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#111318]"
        >
          <div
            className="h-full rounded-full bg-[#e7353c] transition-[width] duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] font-medium text-[#a0a6b1]">
          <span>0%</span>
          <span>33%</span>
          <span>67%</span>
          <span>100%</span>
        </div>
        <p className="mt-4 border-l-2 border-[#e7353c] pl-3 text-xs leading-5 text-[#b5bac4]">
          This percentage measures training-plan completion, not Asta&apos;s
          chance of defeating Lucifero.
        </p>
      </section>

      <section
        aria-labelledby="training-tasks-heading"
        className="lg:col-start-1 lg:row-start-2"
      >
        <div className="mb-3 flex items-end justify-between gap-3 sm:mb-4">
          <h2
            id="training-tasks-heading"
            className="text-base font-bold tracking-tight sm:text-lg"
          >
            Training Tasks
          </h2>
          <span className="text-xs text-[#aeb3bf]">
            {tasks.length} tasks
          </span>
        </div>
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={task.name}
              className="rounded-xl border border-[#343740] bg-[#20232b] p-3 transition-colors hover:border-[#4a4d57] sm:p-4"
            >
              <label className="flex min-h-[4.5rem] cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={completedTasks[index]}
                  onChange={() => toggleTask(index)}
                  className="size-5 shrink-0 accent-[#ed343b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff777d]"
                />
                <span className="min-w-0 flex-1">
                  <span className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                    <span className="flex min-w-0 flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-[#f0f1f4] sm:text-[15px]">
                        {task.name}
                      </span>
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                          task.priority === "High"
                            ? "border border-[#743139] bg-[#401e24] text-[#ff9b9f]"
                            : "border border-[#75521c] bg-[#3c2d16] text-[#ffd166]"
                        }`}
                      >
                        {task.priority} priority
                      </span>
                    </span>
                    <span className="text-xs leading-5 text-[#b5bac4] sm:text-[13px]">
                      {task.description}
                    </span>
                  </span>
                </span>
                <span
                  className={`shrink-0 rounded border px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    completedTasks[index]
                      ? "border-[#245d49] bg-[#18372e] text-[#69e2b2]"
                      : "border-[#343740] bg-[#1b1d24] text-[#aeb3bf]"
                  }`}
                >
                  {completedTasks[index] ? "Completed" : "Not completed"}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
