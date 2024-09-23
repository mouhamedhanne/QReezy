export const Features = () => {
  return (
    <div className="max-w-6xl h-full m-auto">
      <div
        className="flex h-full gap-6 pb-8 pt-6 mt-8 max-lg:mt-0 text-white
         max-lg:flex-col max-lg:px-5 md:py-10 "
      >
        <div
          className="rounded-lg bg-bg_card border-2 border-blue-500
           shadow-sm h-full flex-1"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3
              className="text-2xl font-semibold leading-none
                    tracking-tight"
            >
              1. Accès Direct
            </h3>
            <p className="text-sm text-gray-400">
              Plongez directement dans le monde de la traduction sans limites !
              Explorez plus de 59 langues sans passer par l'inscription.
            </p>
          </div>
        </div>

        <div
          className="rounded-lg bg-bg_card border-2 border-blue-500
           shadow-sm h-full flex-1"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3
              className="text-2xl font-semibold leading-none
                    tracking-tight"
            >
              2. Saisie du Texte à Traduire
            </h3>
            <p className="text-sm text-gray-400">
              Étape cruciale ! Entrez votre texte à traduire et sélectionnez la
              langue de destination. Transformez vos mots dans la langue de
              votre choix en quelques clics.
            </p>
          </div>
        </div>

        <div
          className="rounded-lg bg-bg_card border-2 border-blue-500
           shadow-sm h-full flex-1"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3
              className="text-2xl font-semibold leading-none
                    tracking-tight"
            >
              3. Ajout d'un Fichier PDF
            </h3>
            <p className="text-sm text-gray-400">
              Explorez une nouvelle dimension de la traduction avec notre
              fonction d'importation de fichiers PDF. Cliquez sur 'Choisir un
              Fichier' pour traduire instantanément vos documents.
            </p>
          </div>
        </div>

        <div
          className="rounded-lg bg-bg_card border-2 border-blue-500
           shadow-sm h-full flex-1"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3
              className="text-2xl font-semibold leading-none
                    tracking-tight"
            >
              4. Téléchargement du Fichier PDF Traduit
            </h3>
            <p className="text-sm text-gray-400">
              Mission accomplie ! Téléchargez votre fichier PDF traduit en un
              clin d'œil. Prêt à partager vos idées à travers les langues ?
              C'est simple et efficace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
