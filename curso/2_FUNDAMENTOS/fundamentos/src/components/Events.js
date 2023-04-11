const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
  };

  const RenderSomething = (x) => {
    if (x) {
      return <h1>Renderizando x true</h1>;
    } else {
      return <h1>Renderizando x negativo</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>
          Clique aqui Também
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("podre isso aqui");
            }
          }}
        >
          Clica aqui por favor
        </button>
      </div>

      <div>{RenderSomething(true)}</div>
    </div>
  );
};

export default Events;
