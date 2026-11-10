---
name: writing-plans
description: >-
  Produces implementation plans from an approved design, with exact file paths,
  small executable tasks, code-level guidance, dependencies, and verification
  steps. Use after brainstorming approval and before multi-step implementation.
---

# Writing Implementation Plans

Create a plan that a developer with no project context can execute without guessing. Planning is the handoff between an approved design and implementation; it is not implementation itself.

## Hard Gate

Use this skill only after the user has approved the relevant design. Do not write product code while drafting the plan. If the design is not approved or its scope is unclear, return to `brainstorming`.

## Before Writing

1. Read the approved design completely.
2. Inspect the current repository structure, relevant source files, tests, configuration, and recent changes.
3. Trace the existing behavior and identify the owning abstractions and integration points.
4. Resolve contradictions or missing decisions before finalizing the plan.

Do not plan unrelated cleanup. Preserve existing conventions and public APIs unless the design explicitly changes them.

## Plan Structure

Write the plan to the location requested by the user. Otherwise, for architectural work use:

`docs/superpowers/plans/YYYY-MM-DD-<topic>-plan.md`

Start with:

- Title
- Date
- Link or reference to the approved design
- Goal and non-goals
- Assumptions and dependencies
- Verification strategy

Then list implementation tasks in dependency order. Each task must include:

1. **Exact file path** and the symbol, component, route, or section to change.
2. **Purpose**: what behavior the task adds or changes.
3. **Implementation detail**: concrete logic, data shape, interfaces, and interactions with existing code. Include pseudocode or a small code shape when it prevents guessing.
4. **Tests or checks**: the command or focused test that proves the task works.
5. **Dependencies**: earlier task numbers, if any.

Prefer tasks that can be completed and reviewed independently. A task should usually represent one focused change, not an entire feature area. Separate production code, tests, migrations, and documentation when that improves verification.

## Task Granularity

Break work into small, meaningful increments:

- Establish or update the failing test first when the behavior is testable.
- Implement the smallest change that makes the test pass.
- Refactor only when the behavior is covered and the refactor serves the approved design.
- Include integration points, loading and error states, persistence, accessibility, responsive behavior, and migration concerns when relevant.

Do not create tasks for speculative abstractions, future features, or cosmetic refactors outside scope.

## Verification Requirements

The plan must state how to verify the complete result, including:

- Focused unit or integration tests for changed behavior
- Typecheck, lint, or build commands relevant to the repository
- Manual UI checks for visual or responsive changes
- Error and empty states
- Regression checks for adjacent existing behavior

Use the repository's actual scripts and tooling. Do not invent a test command when a local equivalent exists.

## Final Review

Before presenting the plan, check:

- Every design requirement maps to one or more tasks.
- Every task names real files and symbols found in the repository.
- Task order respects dependencies.
- No task requires unstated product decisions.
- Tests verify behavior rather than implementation details.
- Scope exclusions are explicit.

Present the plan for user review and stop. Do not start implementation or invoke an execution skill until the user approves the plan.
