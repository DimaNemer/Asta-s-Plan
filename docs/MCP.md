# Google Stitch MCP

## Setup

- **Host:** VS Code with GitHub Copilot Agent.
- **Client:** The MCP client used by the coding agent.
- **Server:** Google Stitch MCP server.
- **Configuration:** Stored in VS Code's private, user-level configuration; credentials and API keys are not documented here.

MCP is used during development to retrieve Stitch design references. It is not used by the final dashboard.

## Successful tool calls

- `stitch-list_projects` found **Asta's Preparation Dashboard**.
- `stitch-list_screens` returned seven available screens.
- `stitch-get_project` returned project-level design context.
- `stitch-get_screen` returned screen metadata and screenshot/HTML references.

## Retrieved design context

The project contains desktop and mobile screens, including multiple generated versions. Retrieved design context includes a dark theme with red accents, Inter typography, and screenshot and HTML references for screens.

## Selected design

The final desktop and mobile designs were selected manually in Stitch. Their screenshots are [AstaDesignAfter-desktop.PNG](./evidence/AstaDesignAfter-desktop.PNG) and [AstaDesignAfter-phone.PNG](./evidence/AstaDesignAfter-phone.PNG).

The verified desktop screen matching the selected design is `fc3d0ec3c27a4b1b8b6bb92b1d84067f`. Two verified mobile screens match the selected design description: `2878c0b89b704e4faa41bd8efb525fc1` and `5c6913dfa6464c6aa8673fb06f1ce471`. The exact selected mobile screen ID remains uncertain; the available evidence does not distinguish which of these two was manually selected.

## Evidence

- [StitchMCP.PNG](./evidence/StitchMCP.PNG) is present in the evidence folder. The requested `StitchMCP-Projects.PNG` filename was not found.
- `StitchMCP-Screens.PNG` was not found in the evidence folder.
