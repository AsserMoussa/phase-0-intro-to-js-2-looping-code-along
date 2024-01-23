const names = ["Charlie", "Samip", "Ali"];
const event = "Birthday";
function writeCards(names, event){
    const namearr = [];
    for (let i = 0; i < names.length; i++) {
        namearr[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        //debugger;
      }
      return namearr;
};

let num = 10;
function countDown(x){
    while (x > -1) {
        console.log(x--);
      } 
}
