# Check-in Works Website

A modern, accessible website for Check-in Works built with React, TypeScript, and Vite.

## Architecture

This project uses a **true multi-page architecture** with separate HTML files and dedicated entry points for each page. This is NOT a single-page application (SPA).

### How It Works

1. **Multiple HTML Files**: Each page has its own HTML file in the root directory:
   - `index.html` → Home page
   - `about.html` → About page
   - `programmes.html` → Programmes page
   - `annual-reports.html` → Annual Reports page
   - `contact.html` → Contact page
   - `privacy.html` → Privacy page
   - `accessibility.html` → Accessibility page

2. **Separate Entry Points**: Each HTML file loads its own TypeScript entry point:
   - `index.html` → `/src/main-home.tsx`
   - `about.html` → `/src/main-about.tsx`
   - `programmes.html` → `/src/main-programmes.tsx`
   - `annual-reports.html` → `/src/main-annual-reports.tsx`
   - `contact.html` → `/src/main-contact.tsx`
   - `privacy.html` → `/src/main-privacy.tsx`
   - `accessibility.html` → `/src/main-accessibility.tsx`

3. **Direct Rendering**: Each entry point directly renders its specific page component:
   ```typescript
   // main-about.tsx
   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <Header currentPath="/about" />
       <main><About /></main>
       <Footer />
     </React.StrictMode>
   );
   ```

4. **Regular Link Navigation**: Navigation uses standard HTML `<a>` tags that cause full page reloads:
   ```typescript
   <a href="/about">About</a>  // Full page reload
   ```

5. **No Client-Side Routing**: There is NO React Router or client-side navigation. Each page load fetches the complete HTML file from the server.

### Building for Production

```bash
npm run build
```

This command:
1. Processes all HTML entry points defined in `vite.config.ts`
2. Creates separate JavaScript bundles for each page
3. Outputs individual HTML files to the `dist/` folder
4. Each page only loads the JavaScript it needs

### Deployment

The `dist/` folder contains everything needed for deployment:
- Each HTML file can be served directly
- No redirects or rewrites needed
- Works with any static hosting provider:
  - **Netlify**: Drop the `dist/` folder
  - **Cloudflare Pages**: Point to `dist/`
  - **Vercel**: Deploy `dist/` as static site
  - **Apache/Nginx**: Serve `dist/` directory

### Why This Approach?

This architecture provides:
- **Excellent SEO**: Each page is a real HTML file with proper meta tags baked in
- **Direct URL Access**: Every URL directly serves the corresponding HTML file
- **No JavaScript Required**: Pages work without JavaScript (progressive enhancement)
- **Smaller Bundles**: Each page only loads the code it needs
- **Better Performance**: No client-side routing overhead
- **Simpler Debugging**: Each page is independent
- **Search Engine Friendly**: Crawlers see complete, server-rendered HTML

### Tradeoffs

- **Full Page Reloads**: Navigation causes complete page reloads (not instant like SPAs)
- **No Shared State**: Each page starts fresh with no shared client-side state
- **More Entry Points**: Requires managing multiple entry files

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

During development, Vite serves each HTML file directly.

## Technologies

- React 18
- TypeScript
- Vite (Multi-page build)
- Tailwind CSS
- Supabase (for contact form submissions)
- Lucide React (icons)
