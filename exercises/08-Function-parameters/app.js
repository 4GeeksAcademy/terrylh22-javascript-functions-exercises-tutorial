// Your code goes here:
function renderPerson(name, date, color, age, gender) {
    let string = `${name} is a ${age} years old ${gender} born in ${date} with ${color} eyes`;
    return string;
}


///*** Do not edit below this line ***///
console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));
