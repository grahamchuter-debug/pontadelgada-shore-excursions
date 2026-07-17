import Link from "next/link";

const LINKS = [
  { href: "/ponta-delgada-cruise-port", label: "Ponta Delgada Cruise Port Guide" },
  { href: "/cruise-planner", label: "Ponta Delgada Cruise Planner" },
  { href: "/ponta-delgada-cruise-ship-schedule", label: "Ship Schedules" },
  { href: "/compare", label: "Compare São Miguel" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
