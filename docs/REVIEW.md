# PRD Review

## Change 1 - Task Completion Status

**Original requirement:**

The task status should update immediately when the checkbox is checked or unchecked.

**What was unclear:**

The requirement didn't explain how the completion status should be displayed.

**What I changed:**

I specified that each task should show "Completed" or "Not completed" as text, and that the text should update immediately when the checkbox is toggled.

**Why I changed it:**

I wanted the completion status to be clear without relying only on the checkbox.

## Change 2 — Responsive Layout

**Original requirement:**

A responsive layout for phones and laptops.

**What was unclear:**

It didn't explain how the layout should behave on smaller screens.

**What I changed:**

I specified that the three training tasks should appear in a single column on mobile screens without horizontal scrolling. I also added an acceptance criterion for this.

**Why I changed it:**

This makes the mobile layout easier to implement and test.

## Change 3 — Progress Bar Behavior

**Original requirement:**

The progress bar visually reflects the calculated percentage.

**What was unclear:**

It didn't specify how the progress bar should behave at different completion levels.

**What I changed:**

I added acceptance criteria for the progress bar at 0%, 33%, 67%, and 100%, including how it decreases when a task is unchecked.

**Why I changed it:**

I wanted the progress bar's behavior to be clear and testable before implementation.