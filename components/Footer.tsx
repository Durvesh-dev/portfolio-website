export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-medium">
          © {new Date().getFullYear()} Durvesh Bhadgaonkar. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with React & Tailwind.
        </p>
      </div>
    </footer>
  )
}
