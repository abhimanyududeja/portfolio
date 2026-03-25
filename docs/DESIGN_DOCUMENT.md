# Design Document - Portfolio Website

**Author:** Abhimanyu Dudeja  
**Course:** CS5610 Web Development  
**Date:** January 2025

---

## Project Description

This is my personal portfolio website for the CS5610 Web Development course. The goal is to create a homepage that shows who I am, what I've worked on, and how to reach me.

I wanted to build something that would be useful for job hunting - especially for my Summer 2026 co-op search. The site needs to work on phones and desktops, and I wanted to add some interactive elements to make it stand out.

**Main features:**
- Home page with info about me and my skills
- Projects page to show my ML and data engineering work
- Journey page with a timeline of my career so far
- Typing animation that cycles through my roles
- Filter buttons on the projects page

---

## User Personas

### Persona 1: The Recruiter

**Name:** Sarah  
**Job:** Technical Recruiter at a tech company  
**Age:** Early 30s

**What she does:** Sarah looks at hundreds of portfolios and resumes every week trying to find good candidates. She doesn't have a lot of time to spend on each one.

**What she needs:**
- Quick way to see if someone has the right skills
- Easy to find contact info
- Projects that show actual work, not just buzzwords

**Frustrations:**
- Slow websites
- Can't find basic info like email
- No real examples of work

**How my site helps her:** My homepage shows my skills right away, has my email and LinkedIn visible, and links to my projects and published research.

---

### Persona 2: The Hiring Manager

**Name:** David  
**Job:** Engineering Manager at a startup  
**Age:** 40s

**What he does:** David is technical and actually reads code. He wants to see if candidates can solve real problems and write clean code.

**What he needs:**
- Detailed project descriptions
- Links to code or papers
- Evidence of problem-solving skills

**Frustrations:**
- Vague descriptions like "worked on machine learning"
- No code to look at
- Can't tell what the person actually contributed

**How my site helps him:** My projects page has detailed descriptions with the tech I used. I linked my published research paper, and my GitHub has the code.

---

### Persona 3: Fellow Student

**Name:** Maya  
**Job:** CS grad student  
**Age:** 23

**What she does:** Maya is also building a portfolio and looking for ideas. She might also be interested in collaborating on research.

**What she needs:**
- Design inspiration
- See what projects other students are doing
- Way to connect

**Frustrations:**
- Portfolios that are too complicated to understand
- No way to reach out

**How my site helps her:** The design is clean and she can see how I structured everything. My contact info is easy to find if she wants to reach out.

---

## User Stories

### Homepage

1. **As a visitor**, I want to see the person's name and what they do right away, so I know I'm in the right place.

2. **As a recruiter**, I want to see technical skills organized clearly, so I can quickly check if they match what I'm looking for.

3. **As a visitor**, I want to find contact info easily, so I can reach out without searching around.

### Projects Page

4. **As a hiring manager**, I want to filter projects by category, so I can focus on the type of work I care about.

5. **As a visitor**, I want to see what technologies were used in each project, so I can understand their tech stack.

6. **As a recruiter**, I want to click through to see more details or code, so I can verify their skills.

### Journey Page

7. **As a visitor**, I want to see a timeline of their experience, so I can understand their background quickly.

8. **As a recruiter**, I want to see education and work history in one place, so I don't have to search for it.

### General

9. **As a mobile user**, I want the site to work well on my phone, so I can view it anywhere.

10. **As a visitor**, I want the navigation to be consistent across pages, so I don't get confused.

---

## Design Mockups

### Color Scheme

I went with coral/pink (#ff6b6b) as the main accent color because it stands out and feels more personal than the typical blue. The rest is mostly white/gray to keep it professional.

### Fonts

- **Poppins** - for body text, it's clean and readable
- **Playfair Display** - for headings, adds some personality

### Homepage Layout

```
+----------------------------------------+
|  Logo            Home | Projects | Journey
+----------------------------------------+
|                                        |
|  Welcome to my world                   |
|                                        |
|  Hi, I'm Abhimanyu         [Photo]     |
|  a Data Engineer.                      |
|                                        |
|  [View Work] [Read Research]           |
|                                        |
|  GitHub | LinkedIn | Email             |
|                                        |
+----------------------------------------+
|                                        |
|  Technical Skills                      |
|  [Data Eng] [ML] [Web] [Database]      |
|                                        |
+----------------------------------------+
|                                        |
|  Research Highlight                    |
|  Brain Tumor Detection - 97% accuracy  |
|                                        |
+----------------------------------------+
|  Footer                                |
+----------------------------------------+
```

### Projects Page Layout

```
+----------------------------------------+
|  Navigation                            |
+----------------------------------------+
|                                        |
|  My Projects                           |
|                                        |
|  [All] [ML] [Data] [Web]  <- filters   |
|                                        |
|  +------------+  +------------+        |
|  | Project 1  |  | Project 2  |        |
|  | Brain CNN  |  | Retinopathy|        |
|  +------------+  +------------+        |
|                                        |
|  +------------+  +------------+        |
|  | Project 3  |  | Project 4  |        |
|  | Music DB   |  | ETL AWS    |        |
|  +------------+  +------------+        |
|                                        |
+----------------------------------------+
```

### Journey Page Layout

```
+----------------------------------------+
|  Navigation                            |
+----------------------------------------+
|                                        |
|  My Journey                            |
|  Delhi -> Bangalore -> Chennai -> Boston
|                                        |
|       |                                |
|  [2021] Started B.Tech                 |
|       |                                |
|       |    [2023] Internships          |
|       |                                |
|  [2024] ML Projects                    |
|       |                                |
|       |    [2025] Published Paper      |
|       |                                |
|  [2025] Started MS at NEU              |
|       |                                |
|                                        |
+----------------------------------------+
```

### Mobile Design

On phones:
- Navigation becomes a hamburger menu
- Everything stacks vertically
- Buttons are big enough to tap (44px minimum)
- Timeline becomes single column

---

## Technical Notes

**No frameworks** - everything is vanilla HTML, CSS, and JavaScript

**File organization:**
- CSS files in `/css` folder
- JavaScript in `/js` folder  
- Images in `/images` folder

**JavaScript approach:**
- Using ES6 modules (type="module")
- Classes for the main components (TypeWriter, ProjectFilter)
- No jQuery or other libraries

---

*Created for CS5610 Web Development, Northeastern University*
