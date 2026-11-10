---
name: brainstorming
description: >-
  Clarifies software ideas before implementation through intent discovery,
  scope classification, focused questions, alternatives, and an approved design.
  Use before creating features, modifying behavior, designing interfaces, or
  starting an architectural change.
---

# Brainstorming Ideas Into Designs

Use this skill before implementation work. The goal is a shared understanding that the user can recognize and correct, not an early code patch.

## Hard Gate

Do not write product code, scaffold files, install product dependencies, or invoke an implementation skill until the required design stage has been explicitly approved.

Approval only covers the stage shown. Approval of a feature idea does not approve an unwritten specification or implementation plan.

## 1. Classify the Request

Say the classification out loud before the first question:

- **Spike**: a feasibility question where the output is a recommendation. Present the question and a cheap probe, get approval, investigate, and report. Treat any probe code as throwaway.
- **Bounded**: a small change to an existing, understood flow. Explore the relevant files, ask only the questions that matter, present a short in-chat design, get approval, then implement without a plan document.
- **Architectural**: a new project, subsystem, or change affecting interfaces and multiple components. Use the full workflow: context, questions, alternatives, sectioned design, written specification, user review, then `writing-plans`.

When uncertain, choose the heavier path. Upgrade the path if hidden complexity appears; never downgrade to skip a gate.

## 2. Establish Shared Understanding

1. Inspect enough of the repository, documentation, and recent changes to understand the local context.
2. Identify the intended outcome, audience, constraints, and observable success criteria.
3. Ask one focused question at a time. Use multiple-choice options when they make the decision easier.
4. Write a concise understanding note, separating confirmed requirements from assumptions, and invite correction.

Do not ask the user to re-authorize the original request. Ask only for information needed to make the design correct.

## 3. Explore Approaches

For architectural work, present 2 or 3 viable approaches. Lead with the recommended approach and explain its trade-offs. Apply YAGNI: remove features that do not serve the stated outcome.

For bounded work, skip a large options exercise unless there is a real design choice.

## 4. Present and Approve the Design

Present the design in reviewable sections, scaled to complexity:

- Architecture and boundaries
- Components, files, or data model
- User and system data flow
- Error handling and edge cases
- Testing and verification
- Scope exclusions

Ask for approval after each meaningful section when the work is architectural. Revise the design when the user objects. Do not begin implementation in the same message as the approval request.

For architectural work, write the approved specification to:

`docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`

Use the user's requested location if one is provided. Review the document for placeholders, contradictions, ambiguity, and excessive scope. Then ask the user to review the written specification. Only after approval should the next skill be `writing-plans`.

## Bounded and Spike Completion

- **Spike**: report findings and recommendation; do not silently keep probe code.
- **Bounded**: after explicit approval of the short design, proceed through the normal implementation workflow and validate the change.

## Red Flags

- "It is simple, so approval is unnecessary." Small changes still need the appropriate design gate.
- "I understand the app type." Familiarity is not repository context.
- "The probe works, so I will keep it." A spike answers a question; keeping the code is a new request.
- "I am almost finished even though scope grew." Stop, reclassify, and complete the heavier path.
- "The user approved the idea." That does not approve a plan or specification that has not been shown.
