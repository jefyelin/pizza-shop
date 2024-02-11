import { router } from "@/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors closeButton />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
