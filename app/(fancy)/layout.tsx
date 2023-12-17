import dynamic from "next/dynamic";

const Background = dynamic(() => import("@/components/background"), {
  ssr: false,
});

export default function FancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 inset-0">
          {children}
        </div>
      </div>
    </>
  );
}
