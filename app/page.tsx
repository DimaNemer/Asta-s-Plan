import TaskProgress from "./task-progress";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Training Tasks</h1>
      <TaskProgress />
    </main>
  );
}
