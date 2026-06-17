export default function Footer() {
  return (
    <footer className="border-t-2 border-blue-500 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left - Logo/Name */}
          <div className="text-sm sm:text-lg font-mono text-white">
            harvey_coca
          </div>

          {/* Center - Copyright */}
          <div className="text-xs sm:text-sm text-secondary">
            © copyright
          </div>

          {/* Right - Links */}
          <div className="flex gap-4 sm:gap-6 font-mono text-xs sm:text-base">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              Source
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
