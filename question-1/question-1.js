//Owen Beattie 101379668 COMP3123 lab test 1

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {

        var stringArray = arr.filter(item => typeof item == "string");
        var lowerCaseArray = stringArray.map(word => word.toLowerCase());

        if (lowerCaseArray.length == 0){
            reject("No strings in passed array");
        }
        resolve(lowerCaseArray);
        });
    }

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
result = lowerCaseWords(mixedArray)
    .then((result) => {
        console.log(result);
    })
    .catch((error) =>{
        console.log("Error: " + error);
    });
