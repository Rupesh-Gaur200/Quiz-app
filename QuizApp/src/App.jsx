
import Quiz from "./Quiz"
import { jsQuizz } from "./Question"
function App() {


  return (
    <>
      <Quiz question={jsQuizz.questions}></Quiz>
    </>
  )
}

export default App
