import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import ReusableComponent from './components/ReusableComponent'
import Events from './components/Events'
function App() {

  return (
  <div>
  <FirstComponent></FirstComponent>

  <TemplateExpression>
  </TemplateExpression>

    <ReusableComponent></ReusableComponent>

    <Events></Events>
  </div>
  )

}

export default App
