import "./globals.css";

export const metadata = {
  title: "Mona Yousefinejad - Frontend Developer",
  description: "Frontend developer portfolio",
  verification: {
    google: "sNpiSziK1OlqFCxJfN-VQ909G6WTg7c20PR6gXAC-mw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
