var playerSelection = undefined;
var playerScore = "0";
var computerScore = "0";

const ppt = ["pedra", "papel", "tesoura"];
var getAComputerPlay = () => ppt[Math.floor(Math.random() * ppt.length)];

function pptPlayer(selection) {
  playerSelection = selection;
  const fotoPlayer = document.getElementById("fotoPlayer");
  if (playerSelection == "pedra") {
    fotoPlayer.src = "Images/Preda.png";
  } else if (playerSelection == "papel") {
    fotoPlayer.src = "Images/Papel.png";
  } else if (playerSelection == "tesoura") {
    fotoPlayer.src = "Images/Tesoura.jpg";
  }

  var computerSelection = getAComputerPlay();
  const computerFoto = document.getElementById("fotoComputer");
  if (computerSelection == "pedra") {
    computerFoto.src = "Images/Preda.png";
  } else if (computerSelection == "papel") {
    computerFoto.src = "Images/Papel.png";
  } else if (computerSelection == "tesoura") {
    computerFoto.src = "Images/Tesoura.jpg";
  }

  function didPlayerWon(playerSelection, computerSelection) {
    return (
      (playerSelection == "tesoura" && computerSelection == "papel") ||
      (playerSelection == "pedra" && computerSelection == "tesoura") ||
      (playerSelection == "papel" && computerSelection == "pedra")
    );
  }
  const playerWon = didPlayerWon(playerSelection, computerSelection);
  if (playerWon) {
    playerScore++;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById(
      "resultado"
    ).innerHTML = `Voce venceu  ${playerSelection}  ganha de ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    document.getElementById("resultado").innerHTML = "Empate";
  } else {
    computerScore++;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById(
      "resultado"
    ).innerHTML = `Voce perdeu  ${playerSelection}  ganha de ${computerSelection}`;
  }
  if (playerScore == 5) {
    const didConfirm = confirm("voce venceu");
    if (didConfirm) {
      window.location.reload();
    }
  } else if (computerScore == 5) {
    const didConfirm = confirm("voce perdeu");
    if (didConfirm) {
      window.location.reload();
    }
  }
}
