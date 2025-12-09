# Claude Development Guide

This document provides context for Claude Code or other AI assistants working on this project.

## Project Overview

Club Puggle is a React/TypeScript fan site dedicated to the platypus. The project was built following a sprint methodology with specific requirements around educational content, image galleries, and community engagement features.

## Architecture

### Tech Stack
- React 18.3 with TypeScript
- Vite 6 for bundling and dev server
- React Router v7 for client-side routing
- CSS modules for styling
- localStorage for community photo submissions

### Key Design Decisions

**1. Client-Side Storage for Submissions**
Community photo submissions use browser localStorage with base64 encoding. This was chosen as a simple MVP solution that doesn't require backend infrastructure.

Limitations:
- 5-10MB localStorage limit per domain
- Data not shared across browsers/devices
- No moderation workflow
- Lost if user clears browser data

Future enhancement: Add proper backend with file storage (S3/R2) and database.

**2. Routing Structure**
- `/` - Home page
- `/gallery` - Main gallery grid
- `/gallery/:id` - Individual curated image pages (ids 1-4)
- `/gallery/submitted/:id` - Individual community submission pages (timestamp-based ids)
- `/submit-photo` - Photo submission form
- `/[page]` - Content pages (diet, mating, habitat, classification, anatomy, behavior)

**3. Image Data Structure**
Curated images are exported from `Gallery.tsx` to enable reuse in `ImageDetail.tsx`. Each includes:
- `id`: number
- `url`: string (static path)
- `title`: string
- `caption`: string (used in gallery cards)
- `description`: string (used in detail pages)

Community submissions include:
- `id`: timestamp
- `photoData`: base64 string
- `photoTitle`: string
- `name`: string (submitter)
- `email`: string
- `location`: string (optional)
- `description`: string (optional)
- `timestamp`: number

## Design System

### Color Palette
```css
--pitch-black: #0A0402
--grey: #82868E
--dark-khaki: #4F4B1E
--darker-khaki: #312E1B
```

Background uses a gradient from darker-khaki through dark-khaki to grey.
Navigation uses reverse gradient (dark-khaki to darker-khaki).

### Typography
- Font family: 'Platypi', serif (loaded from Google Fonts)
- Headings use heavier weights (600-800)
- Body text at 1.05rem with 1.8 line-height for readability

### Component Patterns

**Layout Component**
Wraps all pages with:
- Sticky header (white background, slight shadow)
- Logo and site title (clickable, links to home)
- Horizontal navigation bar
- Main content area with background gradient

**Page Content Container**
All content pages use `.page-content` class:
- White background
- Max width 900px (centered)
- Padding for comfortable reading

**Gallery Grid**
- CSS Grid with auto-fill columns (min 320px)
- Hover effects (translateY, shadow)
- Cards include image, title, caption

## Sprint Requirements Met

This project was built to meet specific sprint requirements. See the sprint board image for full details. Key requirements:

### Home Page
- Fan site introduction
- Hero image
- Purpose communication
- Scrollable sections

### Image Gallery
- 4+ curated images
- Individual pages per image
- Community submission capability
- Navigation integration

### Content Pages (8 required)
Each page includes:
1. **Diet**: Food types, eating habits, resources
2. **Mating**: Offspring count, gestation period, parental care duration
3. **Habitat**: Geographic location, natural surroundings, dwelling type
4. **Classification**: Scientific name, family, species/subspecies info
5. **Anatomy**: Size/weight comparisons, lifespan, breathing, unique features
6. **Behavior**: Food acquisition, predator defense, sleep habits

## Common Tasks

### Adding a New Content Page
1. Create new component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Layout.tsx`
4. Follow existing page structure with `.page-content` wrapper

### Modifying Gallery Images
1. Add image to `public/images/` directory
2. Update `images` array in `src/pages/Gallery.tsx`
3. Include all required fields (id, url, title, caption, description)

### Styling Guidelines
- Use existing CSS classes where possible
- New styles go in `src/App.css`
- Follow mobile-first responsive approach
- Media queries at 768px and 1024px breakpoints
- Maintain color palette consistency

## File Organization

```
src/
├── components/       # Reusable UI components
│   └── Layout.tsx   # Site-wide layout wrapper
├── pages/           # Route components (one per page)
│   ├── Home.tsx
│   ├── Gallery.tsx
│   ├── ImageDetail.tsx
│   ├── SubmitPhoto.tsx
│   └── [content pages]
├── App.tsx          # Route configuration
├── App.css          # Global styles
└── main.tsx         # React root
```

## Development Workflow

### Local Development
```bash
npm run dev  # Start dev server on :5173
```

### Building
```bash
npm run build  # Production build to dist/
npm run preview  # Preview production build
```

### Linting
```bash
npm run lint  # ESLint check
```

## Known Limitations

1. **localStorage Submissions**: Not production-ready for high traffic. Consider backend migration.
2. **No Image Optimization**: Images loaded at full size. Consider lazy loading or CDN.
3. **No Form Validation Beyond HTML5**: Submission form uses basic required attributes.
4. **No Admin Panel**: No way to moderate or remove community submissions.
5. **Single Page Navigation for Curated Images Only**: Community submissions don't have prev/next navigation.

## Future Enhancement Ideas

1. **Backend Integration**: Replace localStorage with proper API
2. **Image Optimization**: Add lazy loading, WebP conversion, responsive images
3. **Admin Dashboard**: Moderate submissions, manage content
4. **Search Functionality**: Search across content pages
5. **Comments/Ratings**: Allow community engagement on images
6. **Social Sharing**: Add share buttons for pages/images
7. **Accessibility Improvements**: Add ARIA labels, keyboard navigation
8. **SEO Optimization**: Meta tags, structured data, sitemap.xml
9. **Analytics**: Track page views, popular images
10. **Dark Mode**: User preference toggle

## Code Conventions

- Use functional components with hooks
- TypeScript interfaces for all data structures
- Named exports for reusable code, default for pages
- CSS classes follow BEM-like naming (block-element pattern)
- Keep components focused and single-purpose
- Extract shared logic to custom hooks if needed

## Testing Notes

No formal test suite currently exists. When adding tests:
- Use Vitest (already configured with Vite)
- Test user flows (form submission, navigation)
- Test localStorage interactions
- Test responsive behavior
- Accessibility testing with axe-core

## Performance Considerations

- Vite provides fast HMR in development
- Production build is optimized and minified
- localStorage reads on mount could be optimized with React Query/SWR
- Consider code splitting for route components if bundle grows

## Accessibility

Current state:
- Semantic HTML used throughout
- Links have descriptive text
- Images have alt attributes
- Color contrast meets WCAG AA

Improvements needed:
- ARIA labels for navigation
- Focus management for modals/forms
- Keyboard navigation testing
- Screen reader testing

## Browser Support

Targets modern browsers with ES6+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

No IE11 support (uses modern CSS like CSS Grid, CSS variables).

## Deployment

This is a static site that can be deployed to:
- Vercel (recommended, zero config)
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist`

## Contact & Maintenance

This project was built as an educational MVP. For questions or enhancements, refer to the sprint board requirements and retro notes in the project documentation.
