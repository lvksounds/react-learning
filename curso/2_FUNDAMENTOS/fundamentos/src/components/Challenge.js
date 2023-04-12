const Challenge = () => {
  const num1 = 30;
  const num2 = 23;
  return (
    <div>
      <p>Challenge</p>
      <p>
        num1: {num1} <br /> num2: {num2}
      </p>
      <button onClick={() => console.log(num1 + num2)}>Somar</button>
    </div>
  );
};

export default Challenge;
