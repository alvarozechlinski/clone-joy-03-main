import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = lazy(() => import("./pages/Index.tsx"));
const Sobre = lazy(() => import("./pages/Sobre.tsx"));
const SaoJose = lazy(() => import("./pages/SaoJose.tsx"));
const Contato = lazy(() => import("./pages/Contato.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden="true" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sao-jose-dos-campos" element={<SaoJose />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
