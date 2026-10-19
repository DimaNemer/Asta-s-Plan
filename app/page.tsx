import TaskProgress from "./task-progress";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#15171c] text-[#f2f3f5]">
      <header className="border-b border-white/[0.07] bg-[#191b21]">
        <div className="mx-auto flex min-h-[68px] w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e52e35] text-sm font-black text-white"
            >
              A
            </span>
            <h1 className="max-w-[13rem] text-sm font-bold leading-5 tracking-tight sm:max-w-none sm:text-base">
              Asta&apos;s Preparation Dashboard
            </h1>
          </div>
          <span className="shrink-0 rounded-full border border-[#61262c] bg-[#321b20] px-2.5 py-1 text-[10px] font-semibold text-[#ff9b9f] sm:px-3 sm:text-xs">
            Battle Preparation
          </span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8">
        <section className="mb-6 border-b border-white/[0.07] pb-5 sm:mb-7 sm:pb-6">
          <h2 className="text-[1.65rem] font-bold tracking-tight sm:text-3xl">
            Asta Dashboard
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#aeb3bf] sm:text-base sm:leading-7">
            Prepare for the battle against Lucifero. Complete your training tasks
            and track your progress.
          </p>
        </section>

        <TaskProgress />
      </div>
    </main>
  );
}
