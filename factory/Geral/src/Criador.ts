abstract class Criador {
  // Método abstrato para ser implementado pelas subclasses
  public abstract metodoFabrica(): Produto;

  // Método comum que pode ser utilizado por subclasses
  public operacao1(): void {
    console.log("Operacao 1");
  }

  public operacao2(): void {
    console.log("Operacao 2");
  }
}
