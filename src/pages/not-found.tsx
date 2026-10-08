import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">404 - Página no encontrada</h1>
      <Link to="/" className="underline">
        Volver al inicio
      </Link>
    </div>
  );
};
