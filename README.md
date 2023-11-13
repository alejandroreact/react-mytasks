# react-mytasks
# Technical Proof Frontend React App

El reto técnico consta de 2 partes que deben integrarse:

## Reto Backend:
Tendrás que desarrollar una App en NodeJS (solo backend) que permita a un usuario gestionar la típica lista de "cosas por hacer”.
No hace falta que la "lista" se persista en ninguna base de datos, puedes simplemente gestionarlo en memoria y mostrar el estado en la terminal.
La App debe estar compuesta por 3 servicios sencillos:
1) Un servicio “Listas”, que se encarga de gestionar las listas.
2) Un servicio “Tareas”, que se encarga de recibir una tarea y añadirla a una lista.
3) Un servicio “ApiGateway”, que simplemente se encarga de recibir las peticiones REST y enviarlas al servicio correspondiente.
Los servicios de “Listas” y “Tareas” no exponen un API Rest al público, sino que deben realizar sus operaciones a través de eventos. La única puerta de entrada por REST, será el servicio “ApiGateway”.
Para simplificar el reto, solo es necesario que los servicios permitan "crear" y "leer" elementos, no hace falta que "actualicen" o "borren" nada.
La forma en la que se producen y se consumen los eventos para que se comuniquen los servicios, es totalmente abierta y a tu criterio.
Puedes utilizar las librerías que veas convenientes. Por si quieres echarle un vistazo, nosotros vamos a empezar a utilizar esta https://moleculer.services, pero eres libre de hacerlo lo más sencillo posible si lo prefieres.
Puedes plantear los servicios dentro de un monorepo o hacerlo como repos separados.

## Reto frontend:
Tendrás que desarrollar una App en React (solo frontend) que permita al usuario gestionar la lista de "cosas por hacer” realizada en el Reto Backend.
Para simplificar el reto, el usuario únicamente debe poder realizar las acciones de "crear" y "leer" sobre su lista de “cosas por hacer”. Las acciones de "actualizar" y "borrar" queda fuera del scope del reto.
Puedes utilizar las librerías/paquetes javascript con las que te sientas más a gusto trabajando para consultar el API realizado en el Reto Backend.  Por si te animas, nosotros utilizamos “React Query”: https://tanstack.com/query/v4/docs/react/quick-start
Del mismo modo, puedes utilizar la librería de componentes UI con la que te sientas más a gusto.
Si quieres echar un ojo, nosotros hemos creado la nuestra propia llamada “Bubbles”: https://leemonade.github.io/bubbles/components, que está basada en https://v5.mantine.dev.
El diseño de la interfaz es completamente a tu criterio y no lo tendremos en cuenta para el reto técnico. Vamos que puedes utilizar un diseño que encuentres en https://dribbble.com o simplemente utilizar el estilo que viene por defecto en la librería de componentes UI que vayas a utilizar.


# Technical Proof Frontend React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
