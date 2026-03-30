# Copilot Instructions for Soc Ops

**Purpose:** Quickly orient AI coding agents to be productive in this repo: architecture, key files, developer workflows, and project-specific patterns.

**Big Picture**
- **Single-page React app** using Vite + TypeScript. Entry: [src/main.tsx](src/main.tsx).
- UI is component-driven: main screens are [src/components/StartScreen.tsx](src/components/StartScreen.tsx) and [src/components/GameScreen.tsx](src/components/GameScreen.tsx).
- Core game logic is isolated in [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) and [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)  prefer changing logic here rather than UI files.
- Static data/questions live in [src/data/questions.ts](src/data/questions.ts).

**Developer Workflows & Commands**
- Install and start dev server:

```bash
npm install
npm run dev
```

- Build for production: `npm run build` (runs `tsc -b` then `vite build`).
- Tests: `npm test` (Vitest). Unit tests are in `src/utils/bingoLogic.test.ts`.
- Lint: `npm run lint` (eslint config at repo root).

**Project Conventions & Patterns**
- Keep pure game logic in `src/utils` and `src/hooks` to enable isolated unit tests.
- Components are functional React with hooks; follow patterns used in `StartScreen.tsx` and `GameScreen.tsx` for props and event handling.
- Centralized state: `useBingoGame` returns board state and action handlers; call the hook from screen-level components, not from deeply nested presentational components.
- Free-space handling: the center square is index 12 in a 25-square board  tests and logic expect this.

**Integration Points & External Dependencies**
- Build/test tooling: `vite`, `typescript`, `vitest` (see `package.json`). Changes to build/test tooling require updating `tsconfig.*` and `vite.config.ts`.
- No backend services  all data is local in `src/data`.

**Files to Inspect for Context**
- [package.json](package.json)  scripts and deps
- [README.md](README.md)  quick start and workshop links
- [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)  main game orchestration
- [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)  pure functions with tests
- [src/components/GameScreen.tsx](src/components/GameScreen.tsx)  how UI consumes the hook
- [workshop/03-quiz-master.md](workshop/03-quiz-master.md) and `.github/agents/quiz-master.agent.md`  examples of repo agent prompts and expected behavior

**When Modifying Code**
- Update or add unit tests next to the logic (`src/utils/*.test.ts`) and run `npm test` locally.
- Changing TS types may require running `tsc -b` before `vite build`.
- Keep UI changes small and verify with dev server at `http://localhost:5173/`.

**PR Checklist (for AI-generated changes)**
- Run `npm test` and ensure existing tests still pass.
- Confirm `npm run build` completes without errors.
- Add or update unit tests for logic changes in `src/utils` or `src/hooks`.
- Keep changes limited to one responsibility per PR (logic, UI, or tests).

**Searchable Keywords**
- "bingo", "board", "toggleSquare", "checkBingo"  useful for locating logic in `src/utils`.

**Agent Hints / Examples**
- Fixing a broken win-check: start in `src/utils/bingoLogic.ts`, add tests to `src/utils/bingoLogic.test.ts`, run `npm test`.
- Adding a new question source: update [src/data/questions.ts](src/data/questions.ts) and ensure board generation still randomizes order.

If anything in this summary is unclear or you'd like me to include more examples (small code snippets or typical PR descriptions), tell me which area to expand.
