import { TECHNOLOGIES, Technology } from "@/lib/consts";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TechnologyBadgeProps {
  technology: Technology;
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const tech = TECHNOLOGIES[technology];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild disabled={!tech.label}>
          <Badge
            className={cn(
              "relative text-white rounded-full text-opacity-90 bg-opacity-80 hover:bg-opacity-80",
              tech.color
            )}
          >
            <tech.Icon className="mr-2 h-4 w-4" />
            {tech.name}
            {tech.website && (
              <Link href={tech.website} className="absolute inset-0">
                <span className="sr-only">View {tech.name} website</span>
              </Link>
            )}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>{tech.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
