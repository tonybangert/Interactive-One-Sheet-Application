export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 grid-bg pointer-events-none"
      style={{ zIndex: -2 }}
    />
  );
}
