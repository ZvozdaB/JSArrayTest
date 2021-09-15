function someFunction(arr2L, arr1L, collSt, rowSt, directionRL = "left", clockwise = true) {
    let arrey = [];
    let newArery = []
    let num = 0;

    for (let i = 0; i < arr1L; i++) {
        arrey[i] = [];
        for (let j = 0; j < arr2L; j++) {
            num++
            arrey[i].push(num);
        }
    }

    let a1 = rowSt - 1;
    let a2 = collSt - 1;

    newArery.push(arrey[a1][a2]);
    first: for (let i = 1; newArery.length <= (arr1L * arr2L); i++) {
        let pair;
        switch (directionRL) {
            case "right":
                pair = (i % 2 === 0);
                break;
            default:
                pair = (i % 2 !== 0);
        }

        for (let j = 0; j < i; j++) {
            if (newArery.length >= (arr1L * arr2L)) break first;
            pair ? --a2 : ++a2;

            if (arrey[a1] && arrey[a1][a2]) {
                newArery.push(arrey[a1][a2])
            }
        }

        for (let j = 0; j < i; j++) {
            if (newArery.length >= (arr1L * arr2L)) break first;

            if (clockwise) {
                pair ? --a1 : ++a1;
            } else {
                !pair ? --a1 : ++a1;
            }

            if (arrey[a1] && arrey[a1][a2]) {
                newArery.push(arrey[a1][a2])
            }
        }
    }
    return newArery
}


let arr2L = +prompt("кількість стовпців? наприклад 2");
let arr1L = +prompt("кількість рядків? наприклад 2")
let [collSt, , rowSt] = prompt("точка старту? наприклад 2,4")

let directionRL = confirm("вліво ОК, вправо Відміна") ? "left" : "right";
let clockwise = confirm("За годиниковою ОК, проти Відміна")
alert(someFunction(arr2L, arr1L, +collSt, +rowSt, directionRL, clockwise))
