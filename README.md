# Skin Therapy — Natural Inner Beauty

<p align="center">
  <a href="https://res.cloudinary.com/dsaykckz6/video/upload/v1771233938/preview_hkc4xl.mp4">
    <img src="https://res.cloudinary.com/dsaykckz6/video/upload/so_0,w_1400/v1771233938/preview_hkc4xl.jpg" alt="Skin Therapy Preview"/>
  </a>
</p>

Live Preview: https://andz-skintherapy.netlify.app  

---

## Overview

Skin Therapy is a premium skincare presentation website built around fluid motion, editorial layout, and product storytelling.

The project focuses on:

- smooth scrolling experience  
- scroll-triggered animations  
- animated data visualizations  
- continuous testimonial slider  
- dynamic background color transitions  
- layered section composition  

The entire interface is built to feel calm, natural, and refined — matching the brand direction.

---

## Tech Stack

- HTML5  
- CSS3 (custom, no framework)  
- Vanilla JavaScript  
- GSAP  
- ScrollTrigger  
- Lenis (smooth scroll)

No build tools. No bundlers.  
Runs directly in the browser.

---

## Implemented Systems

### Smooth Scroll Engine
Lenis controls scrolling behavior and syncs with GSAP for consistent animation timing.

### Hero Intro Timeline
Staggered entrance for header, subtitle, title, CTA buttons, and vertical decorative text.

### Scroll-Triggered Section Reveals
Each section animates independently using ScrollTrigger with custom easing and stagger logic.

### Animated Statistics
- Circular progress chart with stroke animation  
- Area chart morphing path  
- Vertical bar growth animation  
- Counter-based percentage animation  

All triggered when entering viewport.

### Horizontal Testimonial Slider
Infinite marquee-style slider:
- Cloned cards for seamless loop  
- Pauses on hover  
- GSAP-powered continuous animation  

### Background Color Transition System
Sections use `data-bg` attributes.  
When entering a section, the main wrapper background transitions smoothly.

### Hover Micro-interactions
- Image scale on hover  
- Icon rotation and elevation  
- Button fill animation  
- Card lift + shadow expansion  

### FAQ Accordion
Native `<details>` implementation with animated expansion and icon rotation.

---

## Visual Direction

- Warm neutral palette  
- Serif + sans-serif pairing (Playfair Display / Lato)  
- Soft shadows  
- Subtle blur overlays  
- Organic spacing  
- High contrast dark promotional section  
- Clean grid-based layout  

The aesthetic is calm, editorial, and product-focused.

---

## Sections Included

- Hero
- Stats Bar
- Benefits / Story
- Promotional Overlay Feature
- Ingredients + Charts
- Marquee Strip
- Product Categories
- Limited Edition Feature
- Daily Ritual Steps
- About Section
- Journal Grid
- Testimonials Slider
- FAQ
- Modern Footer

---

## Responsive Behavior

Optimized for:

- Desktop (full animation experience)
- Tablet
- Mobile (stacked layout, simplified animation timing)

Layout restructures grid sections and reduces large typographic elements on smaller screens.

---

## Possible Improvements

- Connect newsletter form to backend
- Lazy load images
- Extract animation modules
- Add product detail pages
- Add cart functionality

---

## Notes

Built as a UI and motion-focused landing page concept for a skincare brand.  
Main emphasis: movement quality, spacing, and visual rhythm.


