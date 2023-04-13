import { useState } from "react";

const ManageData = () => {
  const [someData, setSomeData] = useState(0);
  let count = 0;
  function handleSetSomeData() {
    count++;
    return count;
  }
  return (
    <>
      <div>
        <p>Valor: {someData}</p>
        <button
          onClick={() => {
            setSomeData(handleSetSomeData());
          }}
        >
          Mudar variavel
        </button>
      </div>
    </>
  );
};

export default ManageData;
