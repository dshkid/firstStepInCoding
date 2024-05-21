function projectTime(input) {
    let name = (input[0]);
    let projects = Number(input[1]);
    let hours = projects * 3;;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}
projectTime(['Sanya',"9",27])