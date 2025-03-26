
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-olher-light/50 px-4">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-7xl font-bold text-olher-navy mb-4 font-heading">404</h1>
        <p className="text-2xl text-olher-dark mb-8">Página não encontrada</p>
        <p className="text-olher-dark/70 mb-8">
          A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
        </p>
        <a
          href="/"
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
