import { cn } from "@/app/lib/cn";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t pt-12", className)}>
      <p>&copy; {new Date().getFullYear()} Sawyer Bivens</p>
    </footer>
  );
}
