// src/app/about/page.tsx
export const metadata = {
  title: 'About | My Portfolio',
  description: 'Learn more about Brian Wang, his background, skills, and journey.',
};

export default function AboutPage() {
  return (
    <section className="container mx-auto py-16 px-6 sm:px-8 prose prose-invert text-white">
      <h1>About Me</h1>

      <p>
        Hi there! I’m <strong>Brian Wang</strong>, a rising sophomore at UCLA majoring in
        Statistics &amp; Data Science with a minor in Data Science Engineering. I enjoy
        building full-stack applications that turn messy data into real-life information.
        My current focus is on diving into the world of machine learning and engineering
        data-driven solutions. In my free time, I enjoy playing sports and eating good
        food around the Bay Area.
      </p>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>UCLA</strong> — B.S. in Statistics &amp; Data Science; Data Science Engineering minor
          (Expected June 2028)
        </li>
        <li>
          Relevant Coursework:
          Data Structures &amp; Algorithms, Linear Algebra, Statistical Programming with R, Multivariable Calculus
        </li>
      </ul>

      <h2>Technical Skills</h2>
      <ul>
        <li>Languages: TypeScript, JavaScript (ES6+), C++, Python</li>
        <li>Frontend: React, Next.js, Tailwind CSS, Framer Motion</li>
        <li>Backend & Infra: Node.js, AWS (Lambda, API Gateway, S3, DynamoDB), Serverless Framework</li>
        <li>Data: SQL, Pandas, NumPy, Scikit-Learn</li>
        <li>Tools: Git, Docker, Turbopack, GitHub Actions</li>
      </ul>

      <h2>Project Highlights</h2>
      <ul>
        <li>
          <strong>UCLA Club Recommendation System</strong> — Built backend using Flask, frontend using HTM, CSS, and JavaScript.
          Utilized TF-IDF vectorization to match personal queries with club descriptions using cosine similarity.
        </li>
        <li>
          <strong>Personal Portfolio</strong> — Built with Next.js, Tailwind CSS, and AWS serverless
          backends; features light/dark mode, contact form integration via Lambda/API Gateway.
        </li>
        <li>
          <strong>Data Visualization Dashboard</strong> — Interactive React dashboard connecting to
          a Flask API, visualizing time-series data with Recharts and real-time WebSocket updates.
        </li>
      </ul>
          
      <h2>Timeline</h2>
      <ol> 
        <li>
          <strong>2022</strong> — Started UCLA, discovered passion for full-stack development through
          student hackathons.
        </li>
        <li>
          <strong>Summer 2023</strong> — Software Engineering Intern at Acme Corp, worked on internal   
          analytics tools (React, Node.js, AWS).
        </li>
        <li>
          <strong>Spring 2024</strong> — Developed in-browser 3D visualization tool for bioinformatics
          research (Three.js, WebGL).
        </li>
        <li>
          <strong>Fall 2024</strong> — Launched this portfolio site using Next.js 15, Turbopack, and
          serverless AWS.
        </li>
      </ol> 
          
      <h2>Get in Touch</h2>
      <p>
        I’m always interested to chat about machine learning applications, data science challenges, or full-stack
        gigs. Feel free to <a href="/contact" className="text-blue-600 hover:underline">drop me a message</a>!
      </p>
        
      <div className="text-center mt-6">
        <a
          href="/BrianWang_Resume.pdf"
          download
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Download Resume
        </a> 
      </div>
    </section>
  );
}
