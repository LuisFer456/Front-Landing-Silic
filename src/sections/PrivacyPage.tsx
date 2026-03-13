import { LegalDocumentPage } from './LegalDocumentPage'

const sections = [
  {
    title: 'Datos que compartes',
    body: [
      'SILIC solo trata los datos que decides enviar de forma voluntaria, por ejemplo al suscribirte al newsletter o al escribirnos a traves de un canal de contacto habilitado.',
      'Estos datos pueden incluir tu nombre, correo electronico y cualquier informacion adicional que incorpores en tu mensaje.',
    ],
  },
  {
    title: 'Finalidad del tratamiento',
    body: [
      'Usamos la informacion enviada para responder consultas, gestionar altas en listas de novedades, comunicar lanzamientos y mantener una relacion informativa vinculada a la marca SILIC.',
      'No vendemos tus datos ni los cedemos a terceros para publicidad ajena a la marca.',
    ],
  },
  {
    title: 'Conservacion y control',
    body: [
      'Conservamos los datos solo durante el tiempo necesario para cumplir la finalidad para la que fueron recibidos o hasta que solicites su eliminacion cuando corresponda.',
      'Puedes pedir acceso, rectificacion o supresion de tus datos contactandonos por los canales oficiales de SILIC.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <LegalDocumentPage
      eyebrow="Privacidad"
      title="Politica de privacidad"
      description="Resumen claro de como SILIC trata la informacion que compartes de forma voluntaria con la marca."
      icon="privacy"
      sections={sections}
    />
  )
}