
class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
      contestant = new Contestant();   
     
      question = new Question()
      //
      contestant.getCount();
  
  }

  play(){
    
    question.hide(); 

    background("Yellow");
    fill(0);
    textSize(30);
    text("Resultados del quiz",340, 50);
    text("----------------------------",330, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTA: ¡Los participantes que respondieron correctamente están resaltados en color verde!",20,230);

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
// Marca la condición cuando la respuesta del jugador y la respuesta correcta son iguales
// Si son iguales, rellena con verde
// Si no son iguales, rellena con rojo
  if (correctAns === allContestants[plr].answer) //aqui se marca cuando respuestas correctas sean iguales a las contestadas
    fill("Green")          //se pinta de color verde
  else
    fill("red");          //caso contrario se pinta de color rojo

  display_Answers+=30;      //aumenta la puntuacion en 30
  textSize(20);                 //pone tamaño y muestra mensaje
  text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
}

        

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }


