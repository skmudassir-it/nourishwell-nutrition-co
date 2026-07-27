import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="text-8xl font-bold text-primary sm:text-9xl">404</h1>
      <div className="gradient-divider mx-auto mt-6 w-24" />
      <h2 className="mt-6 text-2xl font-semibold text-foreground">
        Page Not Found
      </h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
