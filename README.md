# Check-in Works Website

A modern, accessible website for Check-in Works built with React, TypeScript, and Vite.

## Build Logic

This project uses a **multi-page build approach** with separate HTML entry points for each page, rather than a traditional single-page application (SPA).

### How It Works

1. **Multiple HTML Files**: Each page has its own HTML file in the root directory:
   - `index.html` → Home page
   - `about.html` → About page
   - `programmes.html` → Programmes page
   - `annual-reports.html` → Annual Reports page
   - `contact.html` → Contact page
   - `privacy.html` → Privacy page
   - `accessibility.html` → Accessibility page

2. **Vite Configuration**: The `vite.config.ts` file is configured to build all HTML files:
   ```typescript
   build: {
     rollupOptions: {
       input: {
         main: resolve(__dirname, 'index.html'),
         about: resolve(__dirname, 'about.html'),
         programmes: resolve(__dirname, 'programmes.html'),
         // ... etc
       },
     },
   }
   ```

3. **Client-Side Routing**: Despite having separate HTML files, the app uses client-side routing via `App.tsx` to provide smooth navigation without page reloads.

4. **Redirects Configuration**: The `public/_redirects` file tells hosting providers to serve the correct HTML file for each URL path:
   ```
   /about              /about.html           200
   /programmes         /programmes.html      200
   /annual-reports     /annual-reports.html  200
   # ... etc
   ```

### Building for Production

```bash
npm run build
```

This command:
1. Processes all HTML entry points defined in `vite.config.ts`
2. Bundles React components and assets
3. Outputs separate HTML files to the `dist/` folder
4. Copies the `_redirects` file to `dist/`

### Deployment

The `dist/` folder contains everything needed for deployment. The `_redirects` file format works for:
- **Netlify**: Automatically reads `_redirects`
- **Cloudflare Pages**: Supports `_redirects`

For other hosting providers:
- **Vercel**: Create a `vercel.json` with rewrites
- **Apache**: Use `.htaccess` with RewriteRules
- **Nginx**: Configure location blocks in nginx.conf

### Why This Approach?

This hybrid approach provides:
- **SEO Benefits**: Each page has its own HTML file with proper meta tags
- **Direct URL Access**: Users can bookmark and share direct links to any page
- **Fast Navigation**: Client-side routing provides instant page transitions
- **Progressive Enhancement**: Works even if JavaScript fails to load

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (for contact form submissions)
- Lucide React (icons)
