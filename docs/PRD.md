# Product Requirements Document (PRD)

## 1. Product Name

**Asta's Preparation Dashboard**

## 2. Project Summary

Asta's Preparation Dashboard is a simple web application designed to help Asta organize his training before facing Lucifero.

The dashboard allows him to view his training tasks, mark them as completed, and track his overall preparation progress in one place.

## 3. Primary User

The primary user is Asta, a member of the Black Bulls who is preparing to face Lucifero.

## 4. Problem Statement

Asta has several training tasks, but they are scattered across different notes. This makes it difficult for him to remember what he needs to practise, what he has already completed, and how much progress he has made.

He needs a simple dashboard where he can manage his training progress without confusion.

## 5. Goal of the First Version

The goal is to build a working dashboard that helps Asta:

- See all his training tasks in one place.
- Mark tasks as completed or incomplete.
- Track his preparation progress through a completed task count, percentage, and progress bar.

The first version will focus only on these basic features.

## 6. Core Features

### Feature 1: View Training Tasks

The dashboard displays three predefined training tasks. Each task includes its name, description, priority, and completion status.

### Feature 2: Toggle Task Completion

Each task has a checkbox that Asta can use to mark it as completed.

When Asta checks a task, its status changes to "Completed".
When he unchecks it, the status changes back to "Not completed".

Each task must display its completion status as text next to the checkbox, so Asta can clearly identify which tasks are finished.

### Feature 3: Track Preparation Progress

The dashboard automatically calculates progress based on the number of completed tasks.

Progress is displayed using:

- A completed/total count.
- A percentage.
- A visual progress bar.

All progress information updates whenever a task's completion status changes.

## 7. User Stories

- As Asta, I want to see all my training tasks so I know what I need to practise.
- As Asta, I want to mark a task as completed so I can keep track of what I have finished.
- As Asta, I want to undo a completed task in case I mark it by mistake.
- As Asta, I want to see my preparation percentage so I can understand how much of my plan is complete.

## 8. Sample Training Data

The dashboard will start with these three predefined tasks:

| Task               | Description                                      | Priority |
| ------------------ | ------------------------------------------------ | -------- |
| Sword control      | Practise precise anti-magic sword movements.     | High     |
| Physical endurance | Complete a focused strength and stamina session. | Medium   |
| Team coordination  | Review a preparation plan with the Black Bulls.  | High     |

All three tasks start as incomplete.

Each task has a completion status that can change between completed and incomplete.

## 9. Expected Behaviour

When Asta opens the dashboard, he sees all three tasks with unchecked checkboxes.

The initial progress is **0 / 3 completed (0%)**.

When Asta checks a task, its status changes to completed and the progress information updates immediately.

If he unchecks the task, it returns to incomplete and the progress is recalculated.

The percentage is calculated as:

**(Completed tasks / Total tasks) × 100**

The result is rounded to the nearest whole number.

## 10. Acceptance Criteria

The first version is complete when the following conditions are met:

- [ ] The dashboard displays exactly three predefined training tasks.
- [ ] Each task shows its title, description, priority, and completion status.
- [ ] All tasks are incomplete when the dashboard first loads.
- [ ] Each task has a checkbox that can mark it as completed or incomplete.
- [ ] With zero completed tasks, the dashboard shows **0 / 3 and 0%**.
- [ ] With one completed task, the dashboard shows **1 / 3 and 33%**.
- [ ] With two completed tasks, the dashboard shows **2 / 3 and 67%**.
- [ ] With all three completed, the dashboard shows **3 / 3 and 100%**.
- [ ] At 0%, the progress bar is empty.
- [ ] At 33%, the progress bar fills approximately one-third of its width.
- [ ] At 67%, the progress bar fills approximately two-thirds of its width.
- [ ] At 100%, the progress bar is completely filled.
- [ ] Unchecking a task decreases the progress bar to match the updated percentage.
- [ ] Unchecking a completed task updates the count, percentage, and progress bar correctly.
- [ ] Repeatedly checking and unchecking tasks does not cause duplicate counting.
- [ ] The dashboard works on mobile and desktop screens.
- [ ] Checkboxes can be operated using a keyboard.
- [ ] Each task displays "Completed" or "Not completed", and the text updates immediately when the checkbox is toggled.
- [ ] On mobile screens, all three training tasks appear in a single column without horizontal scrolling.

## 11. Design and Accessibility Requirements

The dashboard will combine a modern, professional interface with some visual inspiration from Black Clover.

The design should include:

- A clean dashboard layout with a dark fantasy-inspired color palette.
- Clear cards or sections for training tasks.
- Readable typography and good spacing.
- Priority labels to help distinguish training tasks.
- A progress section displaying the count, percentage, and progress bar.
- On mobile screens, the three training tasks should appear in a single column without horizontal scrolling.
- On laptop screens, the dashboard should use the available space to display the tasks and progress clearly.
- Clearly visible checkbox states and status text.
- Sufficient color contrast for readability.
- Keyboard-accessible checkboxes with visible focus indicators.
- Text labels so completion and priority are not communicated by color alone.

The design should support usability rather than adding unnecessary visual effects.

## 12. Technology Stack

- **Next.js:** Application framework.
- **TypeScript:** Type checking and data structure definitions.
- **Tailwind CSS:** Styling and responsive design.

The dashboard will use local sample data and client-side state for task completion.

## 13. Assumptions and Limitations

- Asta is the only intended user for this fictional scenario.
- The dashboard contains exactly three predefined tasks.
- All tasks have equal weight in the progress calculation, regardless of priority.
- Task completion is managed only during the current session.
- Progress may reset when the page is refreshed.
- No database or external API is required.
- The application does not measure Asta's actual fighting ability or guarantee readiness for Lucifero.
- This is a fictional assignment scenario, not a product validated through real user research.

## 14. Out of Scope

The first version will not include:

- Login or user accounts.
- Database or saved progress.
- Payments.
- Chatbots or AI recommendations.
- Combat simulations.
- Multiplayer features.
- Live anime data.
- Adding, editing, or deleting tasks.
- Additional application routes.

These features are not required for the MVP and will not be implemented in this assignment.
