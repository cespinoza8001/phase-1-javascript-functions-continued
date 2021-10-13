
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
mondayWork();

function wrapAdjective(work = "*") {
    return function innerFunction(part1 = "special") {
        return (`You are ${work}${part1}${work}!`)
    }
        
}
wrapAdjective();
