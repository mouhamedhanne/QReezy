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
              1. Création Facile de QR Codes
            </h3>
            <p className="text-sm text-gray-400">
              Générez vos QR codes en quelques clics ! QReezy facilite la
              création de QR codes personnalisés adaptés à vos besoins, que ce
              soit pour partager des liens, des contacts, ou d'autres
              informations.
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
              2. Modification en Un Clic
            </h3>
            <p className="text-sm text-gray-400">
              Besoin de mettre à jour vos informations ? Pas de souci ! Modifiez
              facilement votre QR code existant, et les changements seront
              instantanément appliqués sans avoir à générer un nouveau code.
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
              3. Connexion et Sauvegarde
            </h3>
            <p className="text-sm text-gray-400">
              Connectez-vous à votre compte QReezy pour retrouver tous vos QR
              codes sauvegardés. Vos données sont automatiquement enregistrées,
              vous permettant de modifier ou télécharger vos codes à tout
              moment.
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
              4. Fonctionnalité de Scan
            </h3>
            <p className="text-sm text-gray-400">
              Bientôt sur QReezy : une fonctionnalité de scan qui vous permettra
              de lire les QR codes directement depuis l'application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
