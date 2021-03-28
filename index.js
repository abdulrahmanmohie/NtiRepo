/* let $promptName = prompt('Enter your name!');
let $name = document.getElementById('name').textContent;
$name = $promptName.value;
console.log($name)
let $grade = document.getElementById('grade').textContent;
let $par = document.querySelector('#par').innerContent;
if($grade >= 90){
    $par = `${$name} has ${$grade} and he is A`;
    console.log('a')
}else if($grade >= 85 && $grade < 90){
    $par = `${$name} has ${$grade} and he is B`;
    console.log('b')
}else if($grade >= 70 && $grade < 85){
    $par = `${$name} has ${$grade} and he is C`;
    console.log('c')
}else if($grade >= 60 && $grade < 70){
    $par.innerContent = `${$name} has ${$grade} and he is D`;
    console.log('d')
}else{
    $par= `${$name} has ${$grade} and he is F`
    console.log('f')
} */
/* let i = 1;
while(i<=10){
    if(i%2 != 0){
        console.log(i + " is odd")
    };
    i++;
} */
/* let measures =  (uName, h, w) => {
    console.log(uName);
    return h , w
}
console.log(measures('Abdo', 170, 90)) */
/* let fruits = ['Orange', 'Apple', 'Grapes']
for (let i = 0 ; i< fruits.length ; i++){
    console.log(fruits[i])
} */
/* let user = {
    name: 'Ahmed',
    age : 30
}
let inputChange = () => {
    let u = document.getElementById('text').nodeValue;
    user[u] = document.getElementById('value').value;
    console.log(user);
} */
let students = [
        {
            name:'Ahmed',
            age:15,
            math: 15,
            eng:30,
            arabic:20,
            degrees:[15,30,20]
        },
    
        {
            name:'Omar',
            age:17,
            math: 18,
            eng:20,
            arabic:10,
            degrees:[17,18,10]
        },
    
        {
            name:'Zain',
            age:18,
            math: 15,
            eng:20,
            arabic:20,
            degrees:[15,20,20]
        },
    ]
let findAge = (age) =>{
    return age = 17;
};
let newFunc = ()=> {students.age.find(findAge)}
/* students.forEach( (element) =>{

    console.log(element.name);
    students.degrees.foreach( (deg) => {
        sum += sum;
        console.log(sum)
    })
}) */
