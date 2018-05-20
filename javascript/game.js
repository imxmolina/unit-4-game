//game variables 

        //game variables 
        $(document).ready(function () {
            //global variables
            var randomNum = 0;
            var ranVal1 = 0;
            var ranVal2 = 0;
            var ranVal3 = 0;
            var ranVal4 = 0;
            var scoreVal = 0;
            var wins = 0;
            var losses = 0;

            //function initializes game
            function startGame() {
                randomNum = [Math.floor(Math.random() * 120) + 19];
                ranVal1 = Math.floor(Math.random() * 13) + 1;
                ranVal2 = Math.floor(Math.random() * 13) + 1;
                ranVal3 = Math.floor(Math.random() * 13) + 1;
                ranVal4 = Math.floor(Math.random() * 13) + 1;
                scoreVal = 0;



                console.log(randomNum, ranVal1, ranVal2, ranVal3, ranVal4);
                alert("the number is " + randomNum);
            }

            function checkScore() {
                if (scoreVal == randomNum) {
                    alert("you win")
                    wins++;
                    console.log(wins);
                    startGame();
                }
                else if (scoreVal > randomNum) {
                    alert("you lose")
                    losses++;
                    console.log(losses);
                    startGame();

                }

            }

            startGame()
            $("#button1").on("click", function () {
                scoreVal = ranVal1 + scoreVal;
                alert("score " + scoreVal + "/" +randomNum);
                checkScore();
                console.log(scoreVal)
            })

            $("#button2").on("click", function () {
                scoreVal = ranVal2 + scoreVal;
                alert("score " + scoreVal + "/"+ randomNum);
                checkScore();
                console.log(scoreVal)
            })

            $("#button3").on("click", function () {
                scoreVal = ranVal3 + scoreVal;
                alert("score " + scoreVal + "/" +randomNum);
                checkScore();
                console.log(scoreVal)
            })

            $("#button4").on("click", function () {
                scoreVal = ranVal4 + scoreVal;
                alert("score " + scoreVal + "/" +randomNum) ;
                checkScore();
                console.log(scoreVal)
            })

    


        });

