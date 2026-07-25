export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-12 ${className}`}>
      <div className="col-span-12 md:col-start-2 md:col-span-10">
        {children}
      </div>
    </div>
  );
}
