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

# Final MVP Review

## 1. Testing and Verification

I tested the dashboard to make sure it works correctly.

- **Lint:** Passed.
- **Production build:** Passed.
- **Task completion:** Checking and unchecking tasks works.
- **Progress:** Updates correctly at 0%, 33%, 67%, and 100%.
- **Responsive design:** Works on desktop and mobile without horizontal scrolling.
- **Accessibility:** Checkboxes work using the keyboard.
- **Refresh:** Tasks reset to incomplete.

## 2. Design Review

I compared the dashboard with my selected Google Stitch design. I focused on keeping the dark theme, red accents, task cards, and progress section consistent with the design.

The layout was improved to make the progress panel more compact and the mobile view easier to use.

# Engineering Reflection

### 1. How did your PRD prevent an unnecessary feature?

The PRD helped me focus on the main requirements. For example, I didn't add a login system or database because the dashboard only needed to track three tasks.

### 2. What did the POC test, and what did it not prove?

The POC tested if checking and unchecking tasks updated the progress correctly. It didn't prove that the final design was responsive or easy to use.

### 3. Why is this MVP useful even though it is small?

It allows users to track Asta's training tasks and see how much of the preparation plan is completed.

### 4. What did MCP allow your agent to do?

MCP allowed GitHub Copilot to connect to Google Stitch and access the project designs and screens directly.

### 5. Which AI-generated decision did you correct?

I reviewed the AI-generated designs and selected the version that best matched my requirements. I also improved the layout to make the progress panel more compact and the mobile design clearer.

### 6. Explain the task state and progress calculation.

I used one React state array with three boolean values (`true` or `false`). When a task is checked, its value changes to `true`. The app counts the completed tasks and calculates the percentage:

`Math.round((completedTasks / 3) * 100)`

For example, if two tasks are completed, the progress is 67%.

### 7. If agents can generate code, what decisions and checks were still your responsibility?

I was responsible for defining the requirements, selecting the design, reviewing the generated code, testing the functionality, and making sure the final result matched the PRD.