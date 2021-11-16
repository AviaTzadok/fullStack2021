let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6 "
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"

let select = prompt(`Welcome to the zoo's database,
Please select an option:
[1] - Live search by code
[2] - Animal search by name
[3] - Adding a new animal
[4] - Deleting an animal from the repository 
[5] - Exit`)

let animals_arr = []

//***********function******************

function concatStrings(txt1, txt2) {
    txt2 = ", " + txt2;
    let txt = txt1.concat(txt2);
    return txt;
}

function txt_to_arrString(txt) {
    let strsplit = txt.toLowerCase().split(", ");
    for (let i = 0; i < strsplit.length; i++) {
        strsplit[i] = strsplit[i].charAt(0).toUpperCase() + strsplit[i].substring(1);
    }
    return strsplit;
}

function toArrayByKeyValue(strsplit) {
    for (let i = 0; i < strsplit.length; i++) { //ולגשת ישר לערך הפנימי for ofאפשר להחליף ב 
        let temp_str = "";
        let temp_num_str = "";
        let temp_num = "";
        for (let j = 0; j < strsplit[i].length; j++) { //ולגשת ישר לערך הפנימי for ofאפשר להחליף ב  
            if (!(strsplit[i].charAt(j) <= 9 || strsplit[i].charAt(j) >= 0)) {
                temp_str = temp_str + strsplit[i].charAt(j) //Animal name אפשר לעשות ישר +=
            } else {
                temp_num_str = temp_num_str + strsplit[i].charAt(j) //Animal key אפשר לעשות ישר +=

            }
        }
        temp_num = Number(temp_num_str)
        animals_arr[temp_num] = temp_str
    }
}


//User selection options
function byKey(key) {
    try {
        if ((typeof animals_arr[key]) === 'undefined') {
            console.log('Entered animal code does not exist');

        }
    } catch (err) {
        console.log(err.message);
    }

    if ((typeof animals_arr[key]) !== 'undefined') {
        console.log(`animal key: ${key}
animal name: ${animals_arr[key]}`)
    }
}

function byName(animalsName) {
    let cont = 0
    let str = "";

    for (key in animals_arr) {
        if (animalsName !== "" && animals_arr[key] !== undefined &&
            animals_arr[key].toLowerCase().includes(animalsName.toLowerCase())) {
            str = str + "\n" + "The animal code: " +
                key +
                "\n" +
                "Name of the animal: " +
                animals_arr[key] +
                "\n"

            cont++
        }

    }
    if (cont == 0) {
        console.log(`This animal is not in the database`)

    } else {

        console.log(`Search name: ${animalsName}
The animals found:
${str}`)
    }
}

function newAnimal(newKey, newName) {
    if (newName == "") {
        console.log("No name entered");
        return;
    }

    if ((typeof animals_arr[newKey]) === 'undefined') {
        animals_arr[newKey] = newName
    } else {
        console.log('Busy animal code');
    }
}

function removeAnimal(delKey) {

    if ((typeof animals_arr[delKey]) !== 'undefined') {
        animals_arr[delKey] = undefined

    } else {
        console.log('Animal code not found');
    }
}

toArrayByKeyValue(
    txt_to_arrString(
        concatStrings(txt1, txt2)))

while (select != 5) {
    switch (select) {
        case '1':
            let key = prompt("Enter animal key ")
            if (key == "") {
                console.log("No search key entered");
                break;
            }
            try {
                if (isNaN(key)) {
                    console.log('Invalid input!');
                }
            } catch (err) {
                console.log(err.message);
            }
            byKey(key);
            break;

        case '2':
            let name = prompt("Enter animal Name ")
            if (name == "") {
                console.log("No search name entered");
                break;
            }
            try {
                if (typeof name !== 'string') {
                    console.log('Invalid input!');
                }
            } catch (err) {
                console.log(err.message);
            }
            byName(name)
            break;

        case '3':
            let newKey = prompt("Enter animal key ")
            if (newKey == "") {
                console.log("No key entered");
                break;
            }
            let newName = prompt("Enter animal Name ")
            if (newName == "") {
                console.log("No name entered");
                break;
            }
            newAnimal(newKey, newName)
            break;

        case '4':
            let delKey = prompt("Enter animal key ")
            if (delKey == "") {
                console.log("No delete key entered");
                break;
            }
            removeAnimal(delKey)
            break;

        case '5':
            break;

        default:
            console.log(`Invalid input!`);
    }
    select = prompt(`Welcome to the zoo's database,
    Please select an option:
    [1] - Live search by code
    [2] - Animal search by name
    [3] - Adding a new animal
    [4] - Deleting an animal from the repository
    [5] - Exit`)
}