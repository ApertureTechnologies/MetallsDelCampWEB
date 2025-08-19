import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal - Metalls del Camp',
  description: 'Aviso legal de Metalls del Camp. Información sobre términos de uso, condiciones y responsabilidades legales.',
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Datos Identificativos</h2>
            <p>
              <strong>Denominación social:</strong> METALLS DEL CAMP SLU<br/>
              <strong>Domicilio social:</strong> C/ Serra d&apos;Espada, naves 8 y 10 - 46960 Aldaia (Valencia)<br/>
              <strong>Teléfono:</strong> 96 150 11 10<br/>
              <strong>Email:</strong> recogidas@metallsdelcampslu.es
            </p>

            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web de METALLS DEL CAMP SLU, 
              que el usuario del portal deberá leer y aceptar para usar todos los servicios 
              e información que se facilitan desde el portal.
            </p>

            <h2>3. Condiciones de Uso</h2>
            <p>
              El acceso a este sitio web es responsabilidad exclusiva de los usuarios. 
              El simple acceso a este sitio web no supone entablar una relación comercial 
              entre METALLS DEL CAMP SLU y el usuario.
            </p>

            <h2>4. Responsabilidades</h2>
            <p>
              METALLS DEL CAMP SLU no se hace responsable de los daños y perjuicios que 
              pudieran ocasionarse por la falta de disponibilidad o de continuidad del 
              funcionamiento del sitio web.
            </p>

            <h2>5. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo a título enunciativo pero no 
              limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, 
              software, así como su diseño gráfico y códigos fuente, constituyen una obra 
              cuya propiedad pertenece a METALLS DEL CAMP SLU.
            </p>

            <h2>6. Legislación Aplicable</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el 
              presente sitio web o de las actividades en él desarrolladas, será de aplicación 
              la legislación española.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
