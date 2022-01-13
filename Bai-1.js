let arrElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let amountEven = 0;
for (let i = 0; i < arrElement.length; i++) {
    if (arrElement[i] % 2 == 0) {
        amountEven++;
    }
}
document.getElementById("result").innerText = "The amount of even number is: " + amountEven;