import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-800 bg-gray-100">
      <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:py-16 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">
          Téléphone Rose 100% anonyme
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Envie de faire l'amour en toute discrétion ? Viens découvrir le plus
          grand portail d'hôtesses.
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            href="/appel"
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50"
          >
            Appelle-la
          </Link>
          <Link
            href="/messagerie"
            className="px-8 py-3 m-2 text-lg text-gray-900 border border-gray-300 rounded"
          >
            Ecris à la femme de ton choix
          </Link>
        </div>
      </div>
    </section>
  );
}
