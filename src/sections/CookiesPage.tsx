import { LegalDocumentPage } from './LegalDocumentPage'

const sections = [
  {
    title: 'Sin cookies de seguimiento',
    body: [
      'Actualmente SILIC no recolecta cookies de analitica, publicidad, remarketing ni seguimiento de comportamiento dentro del sitio.',
      'Tampoco desplegamos banners de consentimiento porque no estamos utilizando cookies no esenciales en esta experiencia.',
    ],
  },
  {
    title: 'Funciones tecnicas',
    body: [
      'Si en el futuro se incorporan servicios externos que requieran almacenamiento local o cookies tecnicas, esta pagina se actualizara para explicarlo con claridad antes de su uso generalizado.',
      'Nuestro criterio es mantener una experiencia ligera, directa y sin rastreo innecesario.',
    ],
  },
  {
    title: 'Actualizaciones',
    body: [
      'Si cambiamos esta practica, publicaremos una version revisada de esta politica para informar que tecnologias se incorporan, con que finalidad y bajo que condiciones.',
    ],
  },
]

export function CookiesPage() {
  return (
    <LegalDocumentPage
      eyebrow="Cookies"
      title="Politica de cookies"
      description="SILIC no recolecta cookies en esta web. Esta pagina deja esa practica expresada de forma directa y verificable."
      icon="cookies"
      sections={sections}
    />
  )
}