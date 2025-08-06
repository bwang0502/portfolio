# Brian Wang’s Personal Portfolio

> A Next.js 15 + TypeScript + Tailwind CSS portfolio site with a serverless AWS backend.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router + Turbopack)  
- **Language:** TypeScript, React  
- **Styling:** Tailwind CSS, @tailwindcss/typography, @tailwindcss/aspect-ratio  
- **Animations:** Framer Motion  
- **Backend:** AWS Lambda + API Gateway (managed via CDK)  
- **Deployment:** Vercel / Netlify / AWS (your choice)

## 📁 Repository Structure
```
portfolio/
├── frontend/ # Next.js app
│ ├── src/
│ │ ├── app/ # pages & components
│ │ └── data/ # static project data
│ ├── public/ # static assets
│ ├── tailwind.config.js
│ └── … # package.json, next.config.js, etc.
├── backend/ # AWS CDK / Lambdas
├── infra/ # Terraform / other infra-as-code
└── README.md
```
##  Local Development

1. **Clone the repo**  
   ```bash
   git clone git@github.com:bwang0502/portfolio.git
   cd portfolio/frontend

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn


3. **Run dev server**
```bash
npm run dev
# or
yarn dev
```
Visit http://localhost:3000.

4. **Environment variables**
Copy .env.example to .env.local and fill in any required keys:
```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://xxxxx.execute-api.us-west-2.amazonaws.com/prod/contact
```

## Building & Deploying
```bash
npm run build
npm run start
```
You can connect this project to Vercel or Netlify—just point at the frontend/ directory.

## Contributing
1. Fork the repo

2. Create a feature branch:
```bash
git checkout -b feature/your-feature
```

3. Commit your changes in small chunks

4. Push and open a Pull Request

## License
This project is MIT licensed.
