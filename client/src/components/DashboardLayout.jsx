import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ padding: 20, flex: 1 }}>{children}</main>
    </div>
  );
}
