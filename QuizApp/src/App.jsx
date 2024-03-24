
import Quiz from "./Quiz"
import { jsQuizz } from "./Question"
function App() {


  return (
    <>
      <Quiz questions={jsQuizz.questions}></Quiz>
    </>
  )
}

export default App
