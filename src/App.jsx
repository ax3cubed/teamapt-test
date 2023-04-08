
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes'
import 'bear-react-carousel/dist/index.css';
function App() {
  let element = useRoutes(routes);

  return <>{element}</>
}

export default App
