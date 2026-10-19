# Asta's Preparation Dashboard

## Project Overview

Asta's Preparation Dashboard is a simple web application inspired by the Black Clover anime.

The dashboard helps Asta track his training progress while preparing to fight Lucifero. It includes three training tasks that users can mark as completed and a progress bar that updates automatically.

This project was built as part of an AI-assisted development assignment.

## Developed By

**Dima Nemer**

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Stitch for UI design
- GitHub Copilot with MCP for AI-assisted development

## Features

- Displays Asta's preparation goal and Lucifero's threat.
- Shows three training tasks with descriptions and priorities.
- Allows users to complete or undo tasks.
- Automatically updates the completed task count and progress percentage.
- Displays a progress bar.
- Supports desktop and mobile screens.
- Supports keyboard interaction.

## Installation and Setup

**1. Clone the repository**

```bash
git clone <https://github.com/DimaNemer/Asta-s-Plan.git>
```

**2. Open the project folder**

```bash
cd asta-plan
```

**3. Install dependencies**

```bash
npm install
```

**4. Run the development server**

```bash
npm run dev
```

**5. Open the application**

Visit http://localhost:3000 in your browser.

## Testing

The following commands were run successfully:

```bash
npm run lint
npm run build
```

The dashboard was also tested manually for task completion, progress calculation, keyboard interaction, and responsive layout.

## Limitations

- The dashboard contains only three predefined tasks.
- Task progress is not saved after refreshing the page.
- There is no login system or database.
- The progress percentage represents training-plan completion, not Asta's chance of defeating Lucifero.

## Project Documentation

- [PRD — Requirements](docs/PRD.md)
- [Design — Stitch Screens and Decisions](docs/DESIGN.md)
- [MCP — Connection and Verification](docs/MCP.md)
- [POC — Proof of Concept](docs/POC.md)
- [Review — Testing, Feedback, and Reflection](docs/REVIEW.md)
- [Evidence — Screenshots](docs/evidence/)

## Development Process

I followed a step-by-step development process:

1. Defined and reviewed the project requirements.
2. Created and refined the design using Google Stitch.
3. Connected Google Stitch to GitHub Copilot using MCP.
4. Built a small POC to test task completion and progress calculation.
5. Developed the responsive MVP.
6. Tested the application and reviewed the results.

The project was developed with AI assistance, but I reviewed the requirements, selected the design, tested the functionality, and verified the final implementation.