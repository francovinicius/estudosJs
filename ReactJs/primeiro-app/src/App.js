import Nome from "./Components/Nome";



function App() {
  return (
    <div className="">
      <h1>Hope</h1>

      <Nome aluno='vinicius' idade={29} />
      <br />
      <Nome aluno='pablo' idade={23} />
    </div>
  );
}

export default App;