import { LegalDocumentPage } from './LegalDocumentPage'

const sections = [
  {
    title: 'Uso del sitio',
    body: [
      'Este sitio presenta el catalogo, la identidad de marca y los canales de contacto de SILIC. Al navegar por la web, aceptas usarla de forma licita y sin interferir en su funcionamiento.',
      'No esta permitido intentar acceder a areas restringidas, alterar contenidos, automatizar extracciones de informacion o utilizar el sitio para actividades fraudulentas o contrarias a la ley.',
    ],
  },
  {
    title: 'Contenido y propiedad intelectual',
    body: [
      'Los textos, imagenes, composiciones visuales, nombre comercial, logotipos y recursos presentes en SILIC forman parte de la identidad de la marca o se muestran con fines editoriales y de referencia.',
      'No puedes reproducir, redistribuir o reutilizar estos materiales con fines comerciales sin autorizacion previa por escrito.',
    ],
  },
  {
    title: 'Disponibilidad e informacion',
    body: [
      'La informacion sobre lanzamientos, productos, precios o reposiciones puede cambiar sin previo aviso. SILIC puede actualizar, pausar o retirar contenido del sitio cuando lo considere necesario.',
      'Aunque buscamos que la informacion sea precisa, el sitio se ofrece tal como esta y puede contener cambios editoriales o ajustes temporales.',
    ],
  },
]

export function TermsPage() {
  return (
    <LegalDocumentPage
      eyebrow="Terminos"
      title="Terminos de uso"
      description="Condiciones generales para navegar y utilizar la web de SILIC de manera adecuada y conforme a la ley."
      icon="terms"
      sections={sections}
    />
  )
}