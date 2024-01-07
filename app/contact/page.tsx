import { EMAIL_LINK} from "@/lib/consts";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(EMAIL_LINK);
}
