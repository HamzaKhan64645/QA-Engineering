# Day 01 – Revision Notes (QA Fundamentals)

## Purpose

This document is a quick revision guide for Day 01 of the QA Automation Career Accelerator Bootcamp. It summarizes the key concepts, definitions, and interview points without detailed explanations.

---

# 1. Software

### Definition

Software is a collection of programs and instructions that tell a computer what to do.

### Key Points

- Intangible (cannot be touched)
- Solves business problems
- Runs on hardware
- Two main types:
  - System Software
  - Application Software

### Interview Tip

Remember:

> Software tells hardware **what to do**.

---

# 2. Hardware

### Definition

Hardware refers to the physical components of a computer system.

### Examples

- CPU
- RAM
- Keyboard
- Mouse
- SSD / Hard Disk
- Monitor

### Interview Tip

Remember:

> Hardware executes the instructions provided by software.

---

# 3. IPO Model (Input → Processing → Output)

### Input

Data entered by the user.

Examples:

- Username
- Password
- Search text

### Processing

Business logic performed by the system.

Examples:

- Validation
- Authentication
- Database operations

### Output

Final result shown to the user.

Examples:

- Login Successful
- Error Message
- Payment Successful

### QA Focus

Always think:

- Was the input accepted correctly?
- Was the processing correct?
- Was the output correct?

---

# 4. Software Development

### Definition

The complete process of planning, designing, developing, testing, deploying, and maintaining software.

### Important Point

Software Development ≠ Coding only.

Coding is only one phase.

---

# 5. Software Development Team

| Role                   | Responsibility         |
| ---------------------- | ---------------------- |
| Client / Product Owner | Defines business needs |
| Business Analyst       | Gathers requirements   |
| Project Manager        | Manages project        |
| UI/UX Designer         | Designs interface      |
| Developer              | Builds software        |
| QA Engineer            | Tests software quality |

---

# 6. SDLC

### Phases

1. Requirement Gathering
2. Planning
3. Design
4. Development
5. Testing
6. Deployment
7. Maintenance

### Interview Tip

QA should participate throughout the SDLC, not only during Testing.

---

# 7. Requirement Gathering

### Definition

The process of understanding what the client wants before development begins.

### Why It Is Important

- Removes ambiguity
- Clarifies business needs
- Prevents costly mistakes
- Helps Developers and QA Engineers

### Characteristics of Good Requirements

- Clear
- Complete
- Consistent
- Unambiguous
- Testable

---

# 8. Functional Requirements

### Defines

**What the software should do.**

### Examples

- Login
- Registration
- Money Transfer
- Checkout

---

# 9. Non-Functional Requirements

### Defines

**How the software should perform.**

### Examples

- Performance
- Security
- Availability
- Reliability
- Usability

---

# Functional vs Non-Functional

| Functional | Non-Functional         |
| ---------- | ---------------------- |
| What       | How                    |
| Features   | Quality                |
| Login      | Login within 2 seconds |

---

# 10. RTM

### Full Form

Requirement Traceability Matrix

### Purpose

Maps Requirements to Test Cases.

Example:

REQ-001 → TC-001, TC-002

---

# 11. Positive Testing

### Uses

Valid data.

### Purpose

Verify expected functionality.

### Example

Login with valid username and password.

---

# 12. Negative Testing

### Uses

Invalid data.

### Purpose

Verify proper error handling.

### Example

Login using incorrect password.

### Remember

A Negative Test can PASS if the application displays the expected error message.

---

# 13. Boundary Value Analysis (BVA)

### Definition

A Black Box Testing technique used to test values around input boundaries.

### Standard Six Values

Minimum - 1

Minimum

Minimum + 1

Maximum - 1

Maximum

Maximum + 1

### Example

Password Length = 8–20

- 7 ❌
- 8 ✅
- 9 ✅
- 19 ✅
- 20 ✅
- 21 ❌

---

# 14. Password Testing

### Common Validation Rules

- Minimum Length
- Maximum Length
- Uppercase Letter
- Lowercase Letter
- Number
- Special Character
- No Spaces
- Password = Confirm Password

### Testing Techniques Used

- Functional Testing
- Positive Testing
- Negative Testing
- Boundary Value Analysis

---

# Quick Interview One-Liners

### Functional Requirement

Defines what the software should do.

### Non-Functional Requirement

Defines how the software should perform.

### Positive Testing

Testing using valid input.

### Negative Testing

Testing using invalid input.

### BVA

Testing values at and around input boundaries.

### RTM

Maps requirements to test cases.

### Requirement Gathering

Understanding client requirements before development starts.

---

# QA Mindset

Always ask yourself:

- What if the user enters invalid data?
- What if the network disconnects?
- What if the server is unavailable?
- What if two users perform the same action simultaneously?
- What if the user leaves a required field empty?

A QA Engineer's goal is not only to verify that software works but also to discover situations where it may fail.

---

# Day 01 Checklist

- ✅ Software
- ✅ Hardware
- ✅ IPO
- ✅ Software Development
- ✅ Software Development Team
- ✅ SDLC
- ✅ Requirement Gathering
- ✅ Functional Requirements
- ✅ Non-Functional Requirements
- ✅ RTM
- ✅ Positive Testing
- ✅ Negative Testing
- ✅ Boundary Value Analysis
- ✅ Password Testing

---

# End of Day 01

"You cannot test software effectively unless you first understand what it is supposed to do."

— QA Automation Career Accelerator Bootcamp
