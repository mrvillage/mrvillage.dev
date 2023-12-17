interface TypingProps {
  text: string;
}

export function Typing({ text }: TypingProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes typing { from { width: 0; } } @keyframes blink {50% { border-color: transparent; } }`,
        }}
      ></style>
      <div
        className="font-mono text-5xl py-2 whitespace-nowrap overflow-hidden border-r-[3px] border-solid border-white text-white"
        style={{
          width: `calc(${text.length}ch + 3px)`,
          animationDelay: "0.5s",
          animationDuration: "3s, .5s",
          animationName: "typing, blink",
          animationTimingFunction: `steps(${text.length}, end), step-end`,
          animationIterationCount: "1, infinite",
          animationDirection: "normal, alternate",
          animationFillMode: "both, none",
        }}
      >
        {text}
      </div>
    </>
  );
}
