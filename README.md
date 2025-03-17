# Next.js Sliding Panels with GSAP ScrollTrigger

This project demonstrates how to implement horizontal and vertical sliding panels in a Next.js application using GSAP's ScrollTrigger plugin.

## Features

- Horizontal sliding panels that respond to scroll
- Vertical scrolling within horizontal panels
- Parallax scrolling effects
- Navigation menu that links to different panels
- Responsive design that works on all screen sizes

## Implementation Details

### Core Components

1. **SlidingPanel**: A reusable component that serves as the base for all panel types
2. **Panel Components**: Various panel implementations showcasing different animation techniques
   - PanelHero: Displays the hero section with 3D shapes
   - PanelLeft/PanelRight: Basic panels that slide from left/right
   - PanelFeatures: A panel displaying feature cards
   - PanelVertical: A panel with vertical scrolling sections
   - PanelParallax: A panel with parallax scrolling effects

### How It Works

The implementation uses GSAP's ScrollTrigger to create a horizontal scrolling experience where each panel takes up the full viewport. As the user scrolls, the panels slide horizontally.

Key technical aspects:

1. **React Refs**: Used instead of `document.querySelector` to make it compatible with Next.js
2. **Client-Side Execution**: All GSAP code is wrapped in useEffect and checks for `typeof window !== 'undefined'` to ensure it only runs on the client side
3. **Cleanup**: ScrollTrigger instances are properly cleaned up when components unmount
4. **Responsive Design**: The panels adapt to different screen sizes

## How to Use

### Adding a New Panel

1. Create a new component in the `src/components/panels` directory
2. Extend the `SlidingPanel` component
3. Add your custom content and animations
4. Import and add the panel to the `panels-container` in `page.tsx`
5. Add the panel to the `tocItems` array for navigation

Example:

```tsx
// src/components/panels/MyNewPanel.tsx
'use client'

import React from 'react'
import SlidingPanel from '../SlidingPanel'

export default function MyNewPanel() {
  return (
    <SlidingPanel id="panel-new" className="bg-red-100">
      <div className="flex h-full flex-col items-center justify-center">
        <h2 className="mb-4 text-4xl font-bold">My New Panel</h2>
        <p className="max-w-lg text-center text-lg">
          This is my custom panel content.
        </p>
      </div>
    </SlidingPanel>
  )
}
```

### Customizing Animations

You can customize the animations by modifying the GSAP configuration in the `useEffect` hooks. For example:

- Change the `ease` property to adjust the animation easing
- Modify the `scrub` value to change how responsive the animation is to scrolling
- Adjust the `snap` property to control how panels snap into place

## Advanced Techniques

### Vertical Scrolling Within Panels

The `PanelVertical` component demonstrates how to implement vertical scrolling within a horizontal panel. This is achieved by:

1. Creating a container with multiple sections
2. Using GSAP to animate the sections based on scroll position
3. Pinning the panel while the vertical sections animate

### Parallax Effects

The `PanelParallax` component shows how to create parallax scrolling effects:

1. Create multiple layers with different depths
2. Animate each layer at different speeds based on scroll position
3. Use z-index and opacity to create depth

## Troubleshooting

- If animations aren't working, make sure GSAP and ScrollTrigger are properly registered
- For Next.js specific issues, ensure all DOM manipulation happens on the client side
- Check browser console for any errors related to GSAP or ScrollTrigger

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Documentation](https://greensock.com/scrolltrigger/)
- [Next.js Documentation](https://nextjs.org/docs)
