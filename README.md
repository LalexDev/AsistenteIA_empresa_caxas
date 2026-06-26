\# CaxasIA Cajamarca 2026



Sistema web funcional para la tesis:



\*\*“Implementación de un sistema web basado en inteligencia artificial para mejorar la gestión de pedidos y control de inventario en pequeñas empresas de Cajamarca, 2026”.\*\*



\## Qué incluye



\- Inicio de sesión con credenciales de administrador.

\- Dashboard operativo.

\- Monitoreo de 44 pequeñas empresas de Cajamarca.

\- CRUD de productos.

\- Códigos de barras visuales e impresión de etiquetas.

\- Entradas, salidas y ajustes de inventario.

\- Registro de pedidos con descuento automático de stock.

\- Seguimiento de pedidos por estados.

\- Indicadores pretest y postest.

\- Exportación de pedidos e inventario en CSV.

\- Respaldo e importación en JSON.

\- Predicción de demanda mediante promedio móvil ponderado.

\- Recomendaciones de reposición con stock de seguridad.

\- Detección simple de movimientos inusuales.

\- Asistente virtual CaxasIA conectado a la información del sistema.

\- Tema claro y oscuro.

\- Diseño responsive.



\## Ejecución rápida



\### Opción 1



Abrir directamente el archivo `index.html` con Google Chrome, Microsoft Edge o Firefox.



\### Opción 2: servidor local recomendado



En Windows, ejecutar `iniciar.bat`.



También se puede abrir una terminal dentro de la carpeta y ejecutar:



```bash

python -m http.server 8080

```



Después abrir:



```text

http://localhost:8080

```



\## Credenciales de acceso



| Rol | Correo | Contraseña |

|---|---|---|

| Administrador | Jhordan@gmail.com | jHORDAN001\* |



\## Almacenamiento actual



Esta versión funciona completamente en HTML, CSS y JavaScript, sin requerir una base de datos externa. La información se guarda en `localStorage` del navegador.



Para evitar perder información, desde \*\*Configuración > Respaldo y migración\*\* se puede descargar un archivo JSON.



\## Integración futura con base de datos en línea



La interfaz ya separa los módulos funcionales. Para conectarla posteriormente a PostgreSQL se recomienda:



1\. Crear una API REST con Spring Boot.

2\. Reemplazar las operaciones de `localStorage` por solicitudes HTTP.

3\. Usar JWT para autenticación.

4\. Crear tablas para usuarios, productos, inventario, movimientos, clientes, pedidos, detalle de pedidos, auditoría y predicciones.

5\. Desplegar backend y PostgreSQL en Render, Railway, AWS o un VPS.



\## Funcionamiento del módulo inteligente



El módulo utiliza algoritmos explicables y reproducibles para fines académicos:



\- Promedio móvil ponderado para estimar la demanda.

\- Stock de seguridad del 25 %.

\- Regla de reposición: demanda estimada + seguridad - stock actual.

\- Detección de salidas de inventario iguales o mayores a 10 unidades.

\- Asistente basado en consultas por palabras clave y datos registrados en el sistema.



\## Asistente virtual flotante



Después de iniciar sesión, utiliza el botón \*\*Asistente IA\*\* situado en la esquina inferior derecha. CaxasIA consulta directamente los datos locales del sistema y funciona sin internet. Incluye consultas de stock, pedidos, ventas, productos, reposición, inventario y movimientos inusuales.



