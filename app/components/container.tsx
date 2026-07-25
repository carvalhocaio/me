export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-12 ${className}`}>
      <div className="col-span-12 md:col-start-3 md:col-span-8">
        {children}
      </div>
    </div>
  );
}
