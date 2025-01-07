import * as Icons from "@/components/icons";
import dynamic from "next/dynamic";

const Background = dynamic(() => import("@/components/background"), {
  ssr: false,
});

export const runtime = "edge";
export default function NotFound() {
  return (
    <>
      <Background />
      <div className="absolute top-0 left-0 right-0 bottom-0 inset-0">
        <div className="flex flex-col gap-y-2 text-center justify-center h-full">
          <Icons.Error404 className="mx-auto h-24 w-24" />
          <h1 className="text-2xl font-medium tracking-lighttext-red-500">
            This is not the page you are looking for
          </h1>
        </div>
      </div>
    </>
  );
}
