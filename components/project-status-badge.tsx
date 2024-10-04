import { Status } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProjectStatusBadgeProps {
  status: Status;
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return (
    <Badge
      className={cn(
        "text-white rounded-full text-opacity-90 bg-opacity-80 hover:bg-opacity-80",
        {
          "bg-green-500 hover:bg-green-500": status === "Completed",
          "bg-yellow-500 hover:bg-yellow-500": status === "In Progress",
          "bg-red-500 hover:bg-red-500": status === "Abandoned",
          "bg-blue-500 hover:bg-blue-500": status === "Planned",
          "bg-orange-500 hover:bg-orange-500": status === "Backburner",
          "bg-gray-500 hover:bg-gray-500":
            status === "Participating" || status === "Previous",
        },
      )}
    >
      {status}
    </Badge>
  );
}
