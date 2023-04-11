const TemplateExpressions = () => {
  const name = "Lucas";
  const data = {
    age: 24,
    job: "Programmer",
  };
  return (
    <div>
      <h3>Ola {name}, tudo bem?</h3>
      <p>
        Sua idade é: {data.age} e seu trabalho é: {data.job}
      </p>
      <p>A soma da sua idade com ela mesma é: {data.age + data.age}</p>
    </div>
  );
};

export default TemplateExpressions;
