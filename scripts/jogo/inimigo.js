class Inimigo extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
      
      this.velocidade = velocidade;
      
    }
  move (){
    this.x = this.x - this.velocidade;

  }
  aparece(){
    if (this.x <-this.largura){
    this.x = width;
    }
  }
  
}