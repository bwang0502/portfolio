// frontend/src/app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Brian Wang. All rights reserved.</span>
        <div className="flex space-x-4">
          <a
            href="https://github.com/bwang0502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brian-wang-ds"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

