import { Background } from "@/components/background";
import { Typing } from "@/components/typing";

export default function Home() {
  return (
    <>
      <Background />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 inset-0">
          <div className="flex items-center justify-center pt-10">
            <Typing text="mrvillage" />
          </div>
        </div>
      </div>
    </>
  );
}
