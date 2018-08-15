window.addEventListener("load", wordsToPrint, false);

let writing = (arrWords, counter) => {
    let arrWordsLimit = arrWords.length;
    if (counter < arrWordsLimit) {
        setTimeout(() => {
            let arrFromarrWords = arrWords[counter].split('');
            let i = 0;
            let printarrWords = setInterval(function () {
                if (arrFromarrWords[i] === ' ') {
                    document.getElementById("typing").innerHTML += arrFromarrWords[i] + arrFromarrWords[i + 1];
                    i += 2;
                } else {
                    document.getElementById("typing").innerHTML += arrFromarrWords[i];
                    i++;
                }
                if (i === arrFromarrWords.length) {
                    clearInterval(printarrWords);
                    document.getElementById("typing").innerHTML += '&nbsp';
                    writingPipe(arrWords, counter);
                }
            }, 40);
        }, 500);
    }else{
      wordsToPrint();
    }
};

function writingPipe(arrWords, counter) {
    let state = true;
    let count = 0;
    let printPipe = setInterval(function () {
        if (state) {
            document.getElementById("typing").innerHTML = document.getElementById("typing").textContent.slice(0, -1);
            document.getElementById("typing").innerHTML += '|';
            // document.getElementById("typing").style.borderRight = "1px solid #000";
            state = false;
        } else {
            document.getElementById("typing").innerHTML = document.getElementById("typing").textContent.slice(0, -1);
            document.getElementById("typing").innerHTML += '&nbsp';
            // document.getElementById("typing").style.borderRight = "none";
            state = true;
        }
        count++;
        if (count === 5) {
            clearInterval(printPipe);
            deletingWords(arrWords, counter);
        }
    }, 500);
}

function deletingWords(arrWords, counter) {
    let arr;
    let count = 0;
    let deleteWord = setInterval(function () {
        arr = document.getElementById("typing").textContent.slice(0, -1);
        document.getElementById("typing").innerHTML = arr;
        count++;
        if (arr.length === 0) {
            clearInterval(deleteWord);
            counter+=1;
            writing(arrWords, counter);
        }
    }, 15); // Default 40
}

function wordsToPrint() {
    let arrWords = [
        "Nos adaptamos a tus necesidades, desarrollando algo único para tu Empresa o Startup",
        "Potenciamos tu idea de negocio",
        "Planificamos, diseñamos y desarrollamos la web que se ajuste a las necesidades de su empresa"
    ];
    let counter = 0;
    writing(arrWords, counter);
}