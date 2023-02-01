var score = 0;
var pacman = {
    x: 1,
    y: 1
}
var world = [	
   //1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S//
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], //1
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //2	
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //3
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //4
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //5
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //6
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //7
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //8
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //9
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //10
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //11
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //12
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //13
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //14
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //15
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //16
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //17
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //18
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2], //19
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], //20
];
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*32;
    document.getElementById('pacman').style.left = pacman.x*32;
}
function updateScore(){
    document.getElementById('score').innerHTML = score;
}
function displayWorld(){
    var output = '';
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            }
            else if(world[i][j] == 1){
                output += "<div class='girl'></div>";
            }
            else if(world[i][j] == 0){
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}
displayWorld();
displayPacman();
document.onkeydown = function(e){
    if(e.keyCode == 37){
        if(world[pacman.y][pacman.x+1]!=2){
        pacman.x--
        }//left arrow
    }
    else if(e.keyCode == 39){
        if(world[pacman.y][pacman.x+1]!=2){
        pacman.x++;
        }//rigth arrow
    }
    else if(e.keyCode == 38){
        if(world[pacman.y-1][pacman.x+1]!=2){
            pacman.y--;
        }	
    }
    else if(e.keyCode == 40){
        console.log(world[pacman.x][pacman.y+1]);
        if(world[pacman.y+1][pacman.x]!=2){
            pacman.y++;
        }	
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 5;
    }
    displayPacman();
    displayWorld();
    updateScore();
}