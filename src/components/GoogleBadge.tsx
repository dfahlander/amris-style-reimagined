type Props = {
  href?: string;
  className?: string;
};

export default function GoogleBadge({ href, className = "" }: Props) {
  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-1" aria-hidden>
        <span className="w-3 h-3 rounded-full bg-[#4285F4] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#EA4335] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#FBBC05] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#34A853] inline-block" />
      </div>
      <span className="text-sm font-medium text-foreground/80">Google Reviews</span>
      <span className="sr-only">Öppna Google Reviews i ny flik</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60 rounded"
        aria-label="Öppna Google Reviews i ny flik"
        title="Öppna Google Reviews"
      >
        {content}
      </a>
    );
  }

  return (
    <div role="note" aria-label="Google Reviews">
      {content}
    </div>
  );
}
