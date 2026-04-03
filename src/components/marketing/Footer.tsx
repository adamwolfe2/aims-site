import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Modern Amenities LLC</span>
          {" "}&middot; All Rights Reserved
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <span>aimanagingservices.com</span>
        </div>
      </div>
    </footer>
  )
}
