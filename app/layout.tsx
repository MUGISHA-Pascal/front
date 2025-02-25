"use client";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { AppStore, makeStore } from "@/lib/redux/store";
import { useRef, Suspense } from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Flip } from "react-toastify";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
});

// const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <body className={`${work_Sans.className}  antialiased`}>
        <Provider store={storeRef.current}>
          <ToastContainer
            position="top-right"
            autoClose={5000} // Auto close after 5 seconds for better UX
            hideProgressBar={false} // Keep progress bar visible for clarity
            newestOnTop={true} // Display newest notifications first
            closeOnClick // Enable closing on click
            rtl={false} // Keep left-to-right text direction
            pauseOnHover // Allow pause on hover for better readability
            draggable // Enable dragging for flexibility
            theme="dark" // Maintain dark theme for consistency
            transition={Flip} // Apply smooth flip transition
          />

          {children}
        </Provider>
      </body>
    </html>
  );
}
