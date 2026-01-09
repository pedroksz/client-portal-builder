const steps = [
  {
    number: 1,
    title: "Adicione nosso número",
    description: (
      <>
        Adicione o número <strong>(11) 4863-7288</strong> aos seus contatos e envie uma mensagem, ou clique no botão acima.
      </>
    ),
  },
  {
    number: 2,
    title: "Selecione a opção desejada:",
    description: (
      <ul className="space-y-1 mt-2">
        <li><strong>1</strong> para 2ª via de boletos</li>
        <li><strong>2</strong> para quitação de contrato</li>
        <li><strong>3</strong> para antecipação de parcelas</li>
        <li><strong>4</strong> para regularizar parcelas em atraso</li>
      </ul>
    ),
  },
  {
    number: 3,
    title: "Finalize o processo",
    description: "Confirme as informações do seu cadastro e siga as orientações de nosso atendimento.",
  },
];

const StepsCard = () => {
  return (
    <div 
      className="bg-card rounded-2xl p-6 card-shadow animate-fade-in"
      style={{ animationDelay: "0.3s" }}
    >
      <h3 className="text-lg font-semibold text-primary mb-6">
        Como solicitar pelo WhatsApp?
      </h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
              {step.number}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">
                {step.title}
              </h4>
              <div className="text-muted-foreground mt-1 text-sm">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsCard;
