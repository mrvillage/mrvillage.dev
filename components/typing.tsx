interface TypingProps {
  text: string;
  caretIterations?: string;
}

export function Typing({ text, caretIterations }: TypingProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes typing { from { width: 0; } } @keyframes caret {50% { border-color: rgb(255, 255, 255); } 100% { border-color: transparent; } }`,
        }}
      ></style>
      <div
        className="font-mono text-5xl py-2 whitespace-nowrap overflow-hidden border-r-[3px] border-solid border-transparent text-white"
        style={{
          width: `calc(${text.length}ch + 3px)`,
          animationDelay: "0.5s",
          animationDuration: "3s, .5s",
          animationName: "typing, caret",
          animationTimingFunction: `steps(${text.length}, end), step-end`,
          animationIterationCount: `1, ${caretIterations ?? "infinite"}`,
          animationDirection: "normal, alternate",
          animationFillMode: "both, forwards",
        }}
      >
        {text}
      </div>
    </>
  );
}
