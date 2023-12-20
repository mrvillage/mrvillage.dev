import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface BlogTagProps {
  tag: "Engineering" | "Personal";
}

export function BlogTag({ tag }: BlogTagProps) {
  return (
    <Badge
      className={cn("text-white rounded-full text-opacity-90", {
        "bg-blue-600": tag === "Engineering",
        "bg-indigo-600": tag === "Personal",
      })}
    >
      {tag}
    </Badge>
  );
}
