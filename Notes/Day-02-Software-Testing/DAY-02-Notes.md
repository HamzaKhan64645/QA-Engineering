# Day 2 — Software Testing

---

# Learning Objectives

After completing Day 2, you should be able to:

- Understand the fundamentals of Software Testing.
- Differentiate between Verification and Validation.
- Explain the Software Testing Life Cycle (STLC).
- Understand the Defect (Bug) Life Cycle.
- Differentiate between Severity and Priority.
- Write professional Bug Reports.
- Understand the purpose of a Test Plan.
- Understand the purpose of a Test Strategy.

---

# 1. Introduction to Software Testing

## Overview

Software Testing is one of the most important activities in Software Development. Every software application, regardless of its size, should be tested before it is released to users.

The purpose of testing is not only to find bugs but also to verify that the software behaves according to the specified requirements and satisfies user expectations.

Testing improves software quality, reduces business risks, and increases confidence in the final product.

---

## Professional Definition

Software Testing is the process of verifying and validating a software application to identify defects and ensure that it meets specified requirements before release.

---

## Why is Software Testing Important?

Software Testing helps to:

- Identify defects before release.
- Improve software quality.
- Reduce development and maintenance costs.
- Increase customer satisfaction.
- Prevent business losses.
- Improve product reliability.
- Build confidence in the application.

Finding defects during development is significantly less expensive than fixing them after deployment.

---

## Simple Explanation

Imagine buying a new car.

Before selling it, the manufacturer checks:

- Engine
- Brakes
- Steering
- Airbags
- Lights

If these checks are skipped, customers may receive a defective vehicle.

Software works in the same way.

Before releasing an application, QA Engineers verify that every important feature works correctly.

---

## Real-World Example

Consider an online banking application.

A customer transfers money from one account to another.

If the transfer deducts money but fails to credit the recipient's account, the consequences could include financial loss and customer dissatisfaction.

Software Testing helps identify such defects before the application reaches end users.

---

## QA Mindset

A QA Engineer should never assume that software is correct simply because the developer says it works.

Instead, a QA Engineer asks:

- Does it satisfy the requirements?
- What happens if the user enters invalid data?
- What happens under unusual conditions?
- Can the application fail?

Testing is about improving quality—not proving perfection.

---

## Common Beginner Mistakes

- Assuming testing only means finding bugs.
- Executing only positive test cases.
- Ignoring edge cases.
- Testing without understanding requirements.
- Assuming software is bug-free after one successful execution.

---

## Interview Notes

Common interview questions:

- What is Software Testing?
- Why is Software Testing important?
- What is the objective of Software Testing?

A professional answer should mention:

- Quality
- Verification
- Validation
- Defect detection
- Customer confidence

---

## Key Takeaways

- Testing improves software quality.
- Testing reduces risks.
- Testing identifies defects before release.
- Testing increases confidence in the software.

---

# 2. Verification vs Validation

## Overview

Verification and Validation are two fundamental quality assurance activities.

Although they are closely related, they have different objectives and occur at different stages of software development.

Every QA Engineer should clearly understand the difference.

---

## Professional Definitions

### Verification

Verification is the process of evaluating documents, designs, and source code to ensure that the software is being developed according to the specified requirements.

Verification answers:

> **Are we building the product right?**

---

### Validation

Validation is the process of evaluating the actual software application to ensure that it satisfies user requirements and business needs.

Validation answers:

> **Are we building the right product?**

---

## Why are Verification and Validation Important?

Both activities improve software quality.

Verification helps prevent defects before development progresses.

Validation ensures the completed application satisfies customer expectations.

Together they reduce project risks and improve software reliability.

---

## Simple Explanation

Imagine constructing a house.

Verification is checking the architectural drawings before construction begins.

Validation is inspecting the completed house to ensure it matches the customer's expectations.

---

## Real-World Example

A company develops an ATM application.

### Verification

The QA team reviews:

- Requirements
- Design documents
- Functional specifications

before development begins.

### Validation

After development, QA tests:

- Cash withdrawal
- Balance inquiry
- PIN validation
- Fund transfer

to verify that the ATM behaves correctly.

---

## Verification vs Validation

| Verification                         | Validation                           |
| ------------------------------------ | ------------------------------------ |
| Static Activity                      | Dynamic Activity                     |
| Reviews Documents                    | Tests Software                       |
| Prevents Defects                     | Detects Defects                      |
| Before Execution                     | After Development                    |
| "Are we building the product right?" | "Are we building the right product?" |

---

## QA Mindset

Quality begins long before test execution.

A good QA Engineer participates in requirement reviews and design discussions to prevent defects rather than only finding them later.

---

## Common Beginner Mistakes

- Treating Verification and Validation as the same process.
- Thinking testing refers only to Validation.
- Ignoring requirement reviews.
- Assuming Verification is only the QA team's responsibility.

---

## Interview Notes

One of the most frequently asked interview questions is:

**Explain the difference between Verification and Validation.**

The safest interview answer is:

> Verification ensures the software is developed according to specifications, while Validation ensures the final product satisfies customer requirements.

---

## Key Takeaways

- Verification checks documents.
- Validation checks software.
- Verification prevents defects.
- Validation detects defects.
- Both activities improve software quality.

---

# 3. Software Testing Life Cycle (STLC)

## Overview

Software Testing is not performed randomly.

It follows a structured process called the Software Testing Life Cycle (STLC).

STLC defines the sequence of testing activities from understanding requirements until testing is formally completed.

---

## Professional Definition

The Software Testing Life Cycle (STLC) is a systematic process consisting of multiple phases that guide testing activities to ensure software quality.

---

## Why is STLC Important?

STLC helps:

- Organize testing activities.
- Improve testing efficiency.
- Ensure complete test coverage.
- Reduce testing risks.
- Standardize the testing process.
- Improve communication among stakeholders.

---

## STLC Phases

1. Requirement Analysis
2. Test Planning
3. Test Case Development
4. Test Environment Setup
5. Test Execution
6. Test Closure

---

# 4. Defect (Bug) Life Cycle

## Overview

Finding a defect is only the beginning of the process.

A defect goes through several stages from the time it is reported until it is fixed, retested, verified, and finally closed.

This entire journey is known as the **Defect Life Cycle** (also called the **Bug Life Cycle**).

---

## Professional Definition

The Defect Life Cycle is the sequence of stages through which a defect passes from the time it is identified until it is resolved and closed.

---

## Why is the Defect Life Cycle Important?

The Defect Life Cycle helps to:

- Track every reported defect.
- Improve communication between QA and Developers.
- Monitor the status of defects.
- Ensure no reported bug is forgotten.
- Maintain accountability.
- Improve software quality.

---

## Defect Life Cycle Stages

### 1. New

A QA Engineer discovers a defect and reports it in the bug tracking tool.

---

### 2. Assigned

The defect is assigned to a developer for investigation.

---

### 3. Open

The developer analyzes the reported defect and begins working on a fix.

---

### 4. Fixed

The developer fixes the defect and marks it as Fixed.

---

### 5. Retest

The QA Engineer retests the defect using the same steps to verify the fix.

---

### 6. Closed

If the defect is successfully fixed, QA closes it.

---

## Other Common Bug Statuses

Depending on the organization, additional statuses may include:

- Reopened
- Rejected
- Duplicate
- Deferred
- Cannot Reproduce
- Not a Bug

---

## Real-World Example

A customer cannot log into an application using valid credentials.

QA reports the issue.

The developer fixes the authentication problem.

QA retests the login functionality.

The login now works successfully.

The defect is marked as **Closed**.

---

## QA Mindset

Reporting a defect is not enough.

A professional QA Engineer follows the defect until it is fixed, retested, and properly closed.

---

## Common Beginner Mistakes

- Closing defects without retesting.
- Confusing Severity with Defect Status.
- Forgetting regression testing after a bug fix.
- Assuming every reported defect will be accepted.

---

## Interview Notes

Common Interview Question:

**Explain the Defect Life Cycle.**

Remember the sequence:

New → Assigned → Open → Fixed → Retest → Closed

---

## Key Takeaways

- Every defect follows a defined life cycle.
- QA and Developers both participate in defect management.
- Retesting verifies the fix.
- Regression testing ensures existing functionality is not broken.

---

# 5. Severity vs Priority

## Overview

Severity and Priority are two of the most commonly confused concepts in Software Testing.

Although they are related, they measure two completely different aspects of a defect.

Understanding the difference is essential for proper defect management.

---

## Professional Definitions

### Severity

Severity is the degree of technical impact a defect has on the application's functionality.

---

### Priority

Priority is the degree of urgency with which a defect should be fixed from a business perspective.

---

## Why are Severity and Priority Important?

Correctly assigning Severity and Priority helps teams:

- Fix the right defects first.
- Manage project timelines.
- Reduce business risks.
- Improve communication.
- Allocate development effort efficiently.

---

## Severity Levels

- Low
- Medium
- High
- Critical

---

## Priority Levels

- Low
- Medium
- High
- Urgent

_Note: Some organizations may use P1, P2, P3, and P4 instead._

---

## Severity vs Priority

| Aspect     | Severity                        | Priority                                 |
| ---------- | ------------------------------- | ---------------------------------------- |
| Meaning    | Technical impact                | Business urgency                         |
| Focus      | Application functionality       | Business needs                           |
| Decided By | QA Lead, QA Engineer, Developer | Product Manager, Project Manager, Client |
| Question   | How serious is the defect?      | How quickly should it be fixed?          |

---

## Real-World Examples

### High Severity – Low Priority

The Employee Remarks page crashes inside the Admin Panel.

Only administrators use this feature.

Severity is High because functionality is affected.

Priority is Low because business impact is limited.

---

### Low Severity – High Priority

The company logo is missing from the home page before an official product launch.

The application works correctly.

Severity is Low.

Priority is High because branding is important.

---

## QA Mindset

A QA Engineer should always consider both technical impact and business impact before discussing a defect with stakeholders.

---

## Common Beginner Mistakes

- Assuming High Severity always means High Priority.
- Treating Severity and Priority as the same concept.
- Ignoring business impact.

---

## Interview Notes

Remember:

High Severity does **NOT** always mean High Priority.

Likewise,

Low Severity does **NOT** always mean Low Priority.

---

## Key Takeaways

- Severity measures technical impact.
- Priority measures business urgency.
- Both are independent concepts.
- Correct classification improves defect management.

---

# 6. Bug Reports

## Overview

Finding a defect is only valuable if it can be clearly communicated.

A Bug Report is the primary communication document between QA Engineers and Developers.

A well-written Bug Report saves investigation time and helps developers reproduce and fix defects quickly.

---

## Professional Definition

A Bug Report is a formal document used to communicate software defects in a clear, complete, accurate, and reproducible manner.

---

## Why are Bug Reports Important?

Bug Reports help to:

- Communicate defects professionally.
- Reduce investigation time.
- Improve collaboration between QA and Developers.
- Maintain defect history.
- Support project documentation.

---

## Typical Contents of a Bug Report

A professional Bug Report generally contains:

- Bug ID
- Title
- Environment
- Preconditions
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Attachments
- Reporter
- Date Reported
- Status

---

## Characteristics of a Good Bug Report

A good Bug Report should be:

- Clear
- Accurate
- Complete
- Reproducible
- Objective
- Professional

---

## Real-World Example

**Title**

Clicking the **Place Order** button displays a **500 Internal Server Error**.

**Expected Result**

The order should be placed successfully and the confirmation page should appear.

**Actual Result**

A 500 Internal Server Error is displayed and the order is not completed.

Severity: High

Priority: High

---

## QA Mindset

Write Bug Reports as if another person who has never seen the application will use your report to reproduce the issue.

A complete Bug Report reduces communication gaps and speeds up defect resolution.

---

## Common Beginner Mistakes

- Writing vague titles.
- Missing reproduction steps.
- Forgetting Expected Result.
- Forgetting Actual Result.
- Using emotional language.
- Not attaching screenshots or videos when necessary.

---

## Interview Notes

Common Interview Questions:

- What is a Bug Report?
- What information should it contain?
- What makes a good Bug Report?

Remember:

A Bug Report is successful only if another person can reproduce the defect using the information provided.

---

## Key Takeaways

- Bug Reports are formal communication documents.
- Clear documentation saves development time.
- Every Bug Report should be reproducible.
- Professional communication is an essential QA skill.

---

---

# 7. Test Plan

## Overview

Before testing begins, the QA team needs a clear roadmap. Without proper planning, testing can become unorganized, important features may be missed, deadlines can slip, and communication between team members becomes difficult.

A **Test Plan** provides this roadmap by defining how testing will be performed for a specific project.

---

## Professional Definition

A Test Plan is a formal project-level document that defines the scope, objectives, testing approach, resources, schedule, responsibilities, risks, and activities required to perform software testing.

---

## Why is a Test Plan Important?

A Test Plan helps to:

- Organize the testing process.
- Define the testing scope.
- Assign roles and responsibilities.
- Estimate testing effort.
- Plan testing timelines.
- Identify project risks.
- Improve communication among stakeholders.
- Ensure complete test coverage.

Without a Test Plan, different team members may follow different approaches, increasing the chances of missing important defects.

---

## Simple Explanation

Think of a Test Plan as a travel itinerary.

Before going on a trip, you decide:

- Where you are going.
- How you will travel.
- When you will leave.
- Who is going with you.
- What you need to pack.

Similarly, before testing starts, the QA team plans:

- What will be tested.
- What will not be tested.
- Who will test each feature.
- Which environment will be used.
- How long testing will take.

---

## Typical Contents of a Test Plan

A Test Plan usually includes:

- Test Objectives
- Project Scope
- Features to be Tested
- Features Not to be Tested
- Test Environment
- Test Schedule
- Resources
- Roles and Responsibilities
- Entry Criteria
- Exit Criteria
- Risks and Mitigation Plan
- Deliverables
- Approval Information

---

## Who Prepares the Test Plan?

A Test Plan is generally prepared by:

- QA Lead
- Test Lead
- QA Manager
- Senior QA Engineer (depending on the organization)

Junior QA Engineers usually follow the Test Plan and may contribute under guidance.

---

## Test Plan vs Test Cases

| Test Plan                             | Test Cases                      |
| ------------------------------------- | ------------------------------- |
| High-level document                   | Detailed testing document       |
| Describes the overall testing process | Tests a specific functionality  |
| Created once per project              | Created for individual features |
| Prepared before execution             | Executed during testing         |

---

## Real-World Example

A company is developing an E-commerce application.

Before testing begins, the QA Lead prepares a Test Plan describing:

- Browsers to be tested
- Devices to be tested
- Team responsibilities
- Testing schedule
- Risks
- Entry and Exit Criteria

The QA team then follows this plan throughout the testing process.

---

## QA Mindset

A professional QA Engineer understands that successful testing starts with proper planning.

A well-prepared Test Plan reduces confusion, improves collaboration, and ensures all important areas of the application are tested.

---

## Common Beginner Mistakes

- Thinking a Test Plan only contains test cases.
- Ignoring project risks.
- Assuming every QA Engineer prepares the Test Plan.
- Starting testing without proper planning.

---

## Interview Notes

Common Interview Questions:

- What is a Test Plan?
- Why is it important?
- Who prepares it?
- What information does it contain?

Remember:

A Test Plan is the roadmap for testing a specific project.

---

## Key Takeaways

- A Test Plan is a project-level document.
- It defines how testing will be performed.
- It improves planning, communication, and efficiency.
- It serves as a roadmap for the QA team.

---

# 8. Test Strategy

## Overview

While every project has its own Test Plan, organizations generally follow one common testing approach across multiple projects.

This overall approach is documented in the **Test Strategy**.

---

## Professional Definition

A Test Strategy is a high-level organizational document that defines the overall testing approach, standards, methodologies, objectives, and guidelines followed across multiple software projects.

---

## Why is a Test Strategy Important?

A Test Strategy helps:

- Standardize testing practices.
- Maintain consistency across projects.
- Improve software quality.
- Reduce confusion among QA teams.
- Define organizational testing standards.
- Establish common testing guidelines.

---

## Simple Explanation

Imagine a school.

Every class follows the school's overall rules.

However, each teacher prepares a separate lesson plan for their own class.

Similarly:

- **Test Strategy** = Organization-wide testing rules.
- **Test Plan** = Project-specific testing roadmap.

---

## Typical Contents of a Test Strategy

A Test Strategy may include:

- Testing Objectives
- Testing Scope
- Testing Types
- Testing Levels
- Automation Strategy
- Test Environment Guidelines
- Bug Reporting Process
- Entry Criteria
- Exit Criteria
- Risk Management
- Testing Standards
- Tools to be Used

---

## Who Prepares the Test Strategy?

A Test Strategy is usually prepared by:

- QA Manager
- Test Manager
- Senior QA Leadership

It is generally reused across multiple projects with periodic updates when required.

---

## Test Strategy vs Test Plan

| Test Strategy                     | Test Plan                           |
| --------------------------------- | ----------------------------------- |
| Organization-level document       | Project-level document              |
| Defines overall testing standards | Defines testing for one project     |
| Reused across multiple projects   | Created separately for each project |
| Long-term document                | Project-specific document           |
| Prepared by QA/Test Manager       | Prepared by QA/Test Lead            |

---

## Real-World Example

A software company develops:

- Banking Software
- Hospital Management System
- HR Management System
- E-commerce Platform

All projects follow the same Test Strategy.

However, each project has its own Test Plan based on its requirements.

---

## QA Mindset

A professional QA Engineer understands the difference between organizational standards and project planning.

The Test Strategy provides the overall direction, while the Test Plan explains how testing will be carried out for a specific project.

---

## Common Beginner Mistakes

- Confusing Test Strategy with Test Plan.
- Thinking every project requires a new Test Strategy.
- Assuming junior QA Engineers usually prepare the Test Strategy.

---

## Interview Notes

One of the most common interview questions is:

**What is the difference between a Test Plan and a Test Strategy?**

A professional answer should explain that:

- Test Strategy defines the organization's overall testing approach.
- Test Plan defines how testing will be performed for a specific project.

---

## Key Takeaways

- Test Strategy is an organization-level document.
- Test Plan is a project-level document.
- One Test Strategy can support multiple projects.
- Every project usually has its own Test Plan.

---

# Day 2 Summary

During Day 2, you learned the core concepts of Software Testing and Quality Assurance.

The topics covered include:

- Introduction to Software Testing
- Verification vs Validation
- Software Testing Life Cycle (STLC)
- Defect (Bug) Life Cycle
- Severity vs Priority
- Bug Reports
- Test Plan
- Test Strategy

These concepts form the theoretical foundation required for Manual Testing and future Automation Testing.

---

# Interview Revision Summary

Before attending a Junior QA interview, ensure you can confidently explain:

- What is Software Testing?
- Why is Software Testing important?
- Difference between Verification and Validation.
- STLC phases in order.
- Defect Life Cycle stages.
- Difference between Severity and Priority.
- Components of a professional Bug Report.
- Purpose of a Test Plan.
- Difference between Test Plan and Test Strategy.

Interviewers often evaluate not only your technical knowledge but also your ability to communicate clearly using professional QA terminology.

---

# Final Key Takeaways

- Software Testing ensures software quality before release.
- Verification prevents defects, while Validation detects them.
- STLC provides a structured testing process.
- Every defect follows a defined life cycle.
- Severity measures technical impact; Priority measures business urgency.
- A Bug Report should be clear, complete, and reproducible.
- A Test Plan defines testing for a specific project.
- A Test Strategy defines the organization's overall testing approach.

---

**End of Day 2 Notes**
