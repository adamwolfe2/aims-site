import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center">
        <p className="text-7xl sm:text-9xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-primary text-primary-foreground text-xs font-bold px-6 py-3 uppercase tracking-wider rounded-sm hover:bg-crimson-dark transition-colors btn-lift"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
