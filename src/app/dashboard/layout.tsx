import Navbar from "@/components/Navbar";
import dashboard from "@/styles/Dashboard/dash.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dashboard.positioning}>
        <Navbar />
        <div className={dashboard.lines}>{children}</div>
      </body>
    </html>
  );
}
