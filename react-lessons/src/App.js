
import Divider from "./util-components/Divider"
import LessonOne from "./lessons-components/LessonOne"
import LessonTwo from "./lessons-components/LessonTwo"

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <h1>React Lessons</h1>
      <Divider header="Lesson 2" color="lightblue" />
      <LessonTwo />
      <Divider header="Lesson 1" color="lightgreen" />
      <LessonOne />

    </div>
  );
}

export default App;
