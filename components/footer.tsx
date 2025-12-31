export default function Footer() {
  return (
    <footer className="bg-muted/30 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">Copyright © C3I 2025 All rights reserved.</p>
          {/* <p className="text-muted-foreground text-sm">Built with React & Next.js</p> */}
        </div>
      </div>
    </footer>
  )
}
