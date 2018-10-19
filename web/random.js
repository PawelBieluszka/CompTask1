/*Author: Paweł Biełuszka*/

function randomNumber(min,max) {

    //deklaracja zmiennych
    var i,j,x;
    var how_many_number = 100;
    var random_number = [];
    var check = (min > max);

    //sprawdzenie czy wartość minimalna jest większa od maksymalnej, jeżeli tak to następuje zamiana zmiennych
    if(check){
        var vmin = min;
        min = max;
        max = vmin;
    }

    //algorytm realizujący generację liczb bez powtórzeń
    for (var i = 0; i < how_many_number; i++) {
        var gen_num = Math.floor((Math.random() * (max-min+1)) + min);
        do {
            var is_exist = random_number.indexOf(gen_num);
            if (is_exist >= 0) {
                gen_num = Math.floor((Math.random() * (max-min+1)) + min);
            }
            else {
                random_number.push(gen_num);
                is_exist = -2;
            }
        }
        while (is_exist > -1);
    }

    //sortowanie wygenerowanych liczb w kolejności rosnącej
    for(j = 0; j < how_many_number - 1; j++)
        for(i = 0; i < how_many_number - 1; i++)
            if(random_number[i] > random_number[i + 1])
            {
                x = random_number[i];
                random_number[i] = random_number[i + 1];
                random_number[i + 1] = x;
            };

    var output = random_number.toString();

   // saveToJSON(output);
    document.getElementById('box').innerHTML ="digit: " + output;
    //return output;
}

var saveToJSON = function(output) {

    var file = new File(output, "filename.txt", {type: "text/plain", lastModified: date});

// If file exists, we need to remove it first in order to overwrite its content.

    if (file.exists()) file.remove();
    file.open("w");
    file.write(output);

    file.close();
}


console.log(randomNumber(0,100))

// for (let i = 1; i < 50; i++){
//     console.log(randomNumber())
// }