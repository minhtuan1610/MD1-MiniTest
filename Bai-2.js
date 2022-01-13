function check() {
    let arrElement = [1, 2, 2, 2, 5, 5, 6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 8, 9];
    let a = document.getElementById("input_a").value;
    let amount = 0;
    for (let i = 0; i < arrElement.length; i++) {
        if (a == arrElement[i]) {
            amount++;
        }
    }
    document.getElementById("result").innerText = "The amount of element is: " + amount;
    return a;
}

