# Sample Vite site for Vercel

This is a minimal Vite-based static site ready for deployment to Vercel.

Local development:
1. Install dependencies:
   - npm install
2. Run dev server:
   - npm run dev
3. Build:
   - npm run build
4. Preview the production build:
   - npm run preview

Deploy to Vercel (GitHub import):
- Push this repo to GitHub.
- In the Vercel dashboard choose "New Project" → import from GitHub.
- Settings:
  - Framework Preset: Vite
  - Root Directory: `./`
  - Install Command: leave blank or `npm install`
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Click Deploy.

Deploy via Vercel CLI:
1. Install CLI: `npm i -g vercel`
2. Login & link: `vercel login`
3. Run `vercel` (or `vercel --prod` to deploy to production)

No environment variables required for this sample.
