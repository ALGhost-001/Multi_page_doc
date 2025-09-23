import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { FileJson, FileCode, Globe, Database, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    { id: 1, title: "Introducción General", description: "Visión general de JSON, XML, Postman y Firebase" },
    { id: 2, title: "Datos y Estructuras", description: "JSON y XML en profundidad" },
    { id: 3, title: "Herramientas y Servicios", description: "Postman y Firebase en detalle" }
  ];

  const PageNavigation = () => (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-2">
        {pages.map((page) => (
          <Button
            key={page.id}
            variant={currentPage === page.id ? "default" : "outline"}
            onClick={() => setCurrentPage(page.id)}
            className="flex items-center space-x-2"
          >
            <span>{page.id}</span>
            <span>{page.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );

  const Page1Content = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="mb-4">Tecnologías Modernas para Desarrollo</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Exploraremos cuatro tecnologías fundamentales para el desarrollo moderno: 
          formatos de datos, herramientas de testing y servicios en la nube.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileJson className="w-6 h-6 text-blue-500" />
              <span>JSON</span>
              <Badge variant="secondary">Formato de Datos</Badge>
            </CardTitle>
            <CardDescription>
              JavaScript Object Notation - El formato estándar para intercambio de datos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <code className="text-sm">
{`{
  "nombre": "Juan",
  "edad": 30,
  "activo": true
}`}
              </code>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Ligero y fácil de leer</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Soporte nativo en JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Ampliamente usado en APIs REST</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileCode className="w-6 h-6 text-orange-500" />
              <span>XML</span>
              <Badge variant="secondary">Formato de Datos</Badge>
            </CardTitle>
            <CardDescription>
              eXtensible Markup Language - Formato estructurado y extensible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <code className="text-sm">
{`<persona>
  <nombre>Juan</nombre>
  <edad>30</edad>
</persona>`}
              </code>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Estructura jerárquica clara</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Validación con esquemas</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Usado en SOAP y configuraciones</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-green-500" />
              <span>Postman</span>
              <Badge variant="secondary">Herramienta</Badge>
            </CardTitle>
            <CardDescription>
              Plataforma colaborativa para desarrollo y testing de APIs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm font-mono">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">GET</span>
                <span>api.ejemplo.com/usuarios</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Testing de APIs simplificado</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Documentación automática</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Colaboración en equipo</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-purple-500" />
              <span>Firebase</span>
              <Badge variant="secondary">Plataforma</Badge>
            </CardTitle>
            <CardDescription>
              Plataforma de desarrollo de aplicaciones de Google
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4 text-center">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-100 text-blue-800 p-2 rounded">Auth</div>
                <div className="bg-green-100 text-green-800 p-2 rounded">Firestore</div>
                <div className="bg-yellow-100 text-yellow-800 p-2 rounded">Hosting</div>
                <div className="bg-red-100 text-red-800 p-2 rounded">Functions</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Backend como servicio</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Escalabilidad automática</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                <span>Integración con Google Cloud</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="text-center">
        <h3 className="mb-4">¿Por qué son importantes estas tecnologías?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Intercambio de Datos</h4>
            <p>JSON y XML son los pilares para la comunicación entre sistemas modernos</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Desarrollo Eficiente</h4>
            <p>Postman y Firebase aceleran el desarrollo y deployment de aplicaciones</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Page2Content = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="mb-4">Formatos de Datos: JSON y XML</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Profundizamos en los dos formatos de datos más utilizados para el intercambio 
          de información entre sistemas.
        </p>
      </div>

      <Tabs defaultValue="json" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="json">JSON en Detalle</TabsTrigger>
          <TabsTrigger value="xml">XML en Detalle</TabsTrigger>
        </TabsList>

        <TabsContent value="json" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileJson className="w-6 h-6 text-blue-500" />
                <span>JavaScript Object Notation (JSON)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3">Estructura Básica</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">
{`{
  "usuario": {
    "id": 123,
    "nombre": "María García",
    "email": "maria@ejemplo.com",
    "activo": true,
    "roles": ["admin", "editor"],
    "perfil": {
      "edad": 28,
      "ciudad": "Madrid"
    },
    "ultimoAcceso": "2024-01-15T10:30:00Z"
  }
}`}
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">Tipos de Datos</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>String:</strong> "Texto entre comillas"</li>
                    <li><strong>Number:</strong> 123, 45.67</li>
                    <li><strong>Boolean:</strong> true, false</li>
                    <li><strong>Array:</strong> [1, 2, 3]</li>
                    <li><strong>Object:</strong> {"{ }"}</li>
                    <li><strong>null:</strong> null</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3">Ventajas</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Sintaxis simple y legible</li>
                    <li>✓ Soporte nativo en JavaScript</li>
                    <li>✓ Menor tamaño que XML</li>
                    <li>✓ Parseo rápido</li>
                    <li>✓ Amplio soporte en lenguajes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="mb-3">Ejemplo de API Response</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">
{`{
  "status": "success",
  "data": {
    "productos": [
      {
        "id": 1,
        "nombre": "Laptop",
        "precio": 899.99,
        "disponible": true
      },
      {
        "id": 2,
        "nombre": "Mouse",
        "precio": 29.99,
        "disponible": false
      }
    ]
  },
  "meta": {
    "total": 2,
    "pagina": 1
  }
}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="xml" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileCode className="w-6 h-6 text-orange-500" />
                <span>eXtensible Markup Language (XML)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3">Estructura Básica</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">
{`<?xml version="1.0" encoding="UTF-8"?>
<usuario id="123">
  <nombre>María García</nombre>
  <email>maria@ejemplo.com</email>
  <activo>true</activo>
  <roles>
    <rol>admin</rol>
    <rol>editor</rol>
  </roles>
  <perfil>
    <edad>28</edad>
    <ciudad>Madrid</ciudad>
  </perfil>
  <ultimoAcceso>2024-01-15T10:30:00Z</ultimoAcceso>
</usuario>`}
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">Características</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Etiquetas:</strong> {"<elemento>"}</li>
                    <li><strong>Atributos:</strong> id="valor"</li>
                    <li><strong>Jerarquía:</strong> Estructura de árbol</li>
                    <li><strong>Validación:</strong> XSD, DTD</li>
                    <li><strong>Namespaces:</strong> Evitar conflictos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3">Ventajas</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Autodocumentado</li>
                    <li>✓ Validación estricta</li>
                    <li>✓ Soporte de metadatos</li>
                    <li>✓ Estándar maduro</li>
                    <li>✓ Transformaciones XSLT</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="mb-3">Ejemplo de Configuración</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">
{`<?xml version="1.0" encoding="UTF-8"?>
<configuracion>
  <base-datos>
    <host>localhost</host>
    <puerto>5432</puerto>
    <nombre>mi_app</nombre>
    <credenciales>
      <usuario>admin</usuario>
      <password>secreto</password>
    </credenciales>
  </base-datos>
  <cache habilitado="true">
    <tiempo-expiracion>3600</tiempo-expiracion>
  </cache>
</configuracion>`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>JSON vs XML: Comparación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Aspecto</th>
                  <th className="text-left p-3">JSON</th>
                  <th className="text-left p-3">XML</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Tamaño</td>
                  <td className="p-3">Más compacto</td>
                  <td className="p-3">Más verboso</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Legibilidad</td>
                  <td className="p-3">Muy legible</td>
                  <td className="p-3">Autodocumentado</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Validación</td>
                  <td className="p-3">JSON Schema</td>
                  <td className="p-3">XSD, DTD</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Uso Principal</td>
                  <td className="p-3">APIs REST, Web</td>
                  <td className="p-3">Configuración, SOAP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const Page3Content = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="mb-4">Herramientas y Servicios: Postman y Firebase</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Exploramos las herramientas esenciales para el desarrollo, testing y 
          deployment de aplicaciones modernas.
        </p>
      </div>

      <Tabs defaultValue="postman" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="postman">Postman</TabsTrigger>
          <TabsTrigger value="firebase">Firebase</TabsTrigger>
        </TabsList>

        <TabsContent value="postman" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-green-500" />
                <span>Postman - API Development Platform</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">Características Principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Testing de APIs REST y GraphQL</li>
                    <li>• Documentación automática</li>
                    <li>• Colecciones organizadas</li>
                    <li>• Variables de entorno</li>
                    <li>• Scripts de pre/post request</li>
                    <li>• Monitoreo continuo</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3">Métodos HTTP</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">GET</Badge>
                      <span className="text-sm">Obtener datos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                      <span className="text-sm">Crear recursos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-yellow-100 text-yellow-800">PUT</Badge>
                      <span className="text-sm">Actualizar completo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-orange-100 text-orange-800">PATCH</Badge>
                      <span className="text-sm">Actualizar parcial</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-red-100 text-red-800">DELETE</Badge>
                      <span className="text-sm">Eliminar recursos</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3">Ejemplo de Request</h4>
                <div className="bg-muted p-4 rounded-lg space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                      <code className="text-sm">https://api.ejemplo.com/usuarios</code>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Headers:</p>
                    <code className="text-xs block">
                      Content-Type: application/json<br/>
                      Authorization: Bearer tu_token_aqui
                    </code>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Body:</p>
                    <code className="text-xs block whitespace-pre">
{`{
  "nombre": "Ana López",
  "email": "ana@ejemplo.com",
  "rol": "editor"
}`}
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3">Tests Automáticos</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">
{`pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has user ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.exist;
});

pm.test("Email format is valid", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.email).to.match(/@/);
});`}
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2">Collections</h4>
                    <p className="text-sm text-muted-foreground">Organiza requests relacionados</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2">Environments</h4>
                    <p className="text-sm text-muted-foreground">Variables para diferentes entornos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2">Mock Servers</h4>
                    <p className="text-sm text-muted-foreground">Simula APIs para desarrollo</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="firebase" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-purple-500" />
                <span>Firebase - App Development Platform</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <h4 className="font-medium">Authentication</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Login con email, Google, Facebook, etc.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <h4 className="font-medium">Firestore</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Base de datos NoSQL en tiempo real</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <h4 className="font-medium">Hosting</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Deploy de apps web estáticas</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <h4 className="font-medium">Functions</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Código serverless en la nube</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="mb-3">Configuración Inicial</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">
{`// 1. Instalación
npm install firebase

// 2. Configuración
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);`}
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">Firestore - Agregar Datos</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre">
{`import { 
  collection, 
  addDoc 
} from 'firebase/firestore';

const agregarUsuario = async () => {
  try {
    const docRef = await addDoc(
      collection(db, "usuarios"), 
      {
        nombre: "Juan",
        email: "juan@ejemplo.com",
        fecha: new Date()
      }
    );
    console.log("ID:", docRef.id);
  } catch (e) {
    console.error("Error:", e);
  }
};`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3">Authentication - Login</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre">
{`import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

// Crear cuenta
const registro = async (email, password) => {
  try {
    const userCredential = 
      await createUserWithEmailAndPassword(
        auth, email, password
      );
    console.log(userCredential.user);
  } catch (error) {
    console.error(error.message);
  }
};`}
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3">Ventajas de Firebase</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Desarrollo Rápido</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Backend pre-configurado</li>
                      <li>• APIs listas para usar</li>
                      <li>• Sincronización automática</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Escalabilidad</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Infraestructura de Google</li>
                      <li>• Escalado automático</li>
                      <li>• Pago por uso</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1Content />;
      case 2:
        return <Page2Content />;
      case 3:
        return <Page3Content />;
      default:
        return <Page1Content />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <PageNavigation />
        {renderPage()}
      </div>
    </div>
  );
}