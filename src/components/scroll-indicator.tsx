export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce-subtle">
      <div className="h-[15px] w-[15px] rotate-45 border-b-2 border-r-2 border-accent" />
    </div>
  );
}
