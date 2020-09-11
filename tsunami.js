let s0 = document.getElementsByClassName("sea0")[0];
let s1 = document.getElementsByClassName("sea1")[0];
let s2 = document.getElementsByClassName("sea2")[0];
let s3 = document.getElementsByClassName("sea3")[0];
let s4 = document.getElementsByClassName("sea4")[0];
let s5 = document.getElementsByClassName("sea5")[0];
let s6 = document.getElementsByClassName("sea6")[0];
let s7 = document.getElementsByClassName("sea7")[0];
let s8 = document.getElementsByClassName("sea8")[0];
let s9 = document.getElementsByClassName("sea9")[0];

let l0 = document.getElementsByClassName("land0")[0];
let l1 = document.getElementsByClassName("land1")[0];
let l2 = document.getElementsByClassName("land2")[0];
let l3 = document.getElementsByClassName("land3")[0];
let l4 = document.getElementsByClassName("land4")[0];
let l5 = document.getElementsByClassName("land5")[0];
let l6 = document.getElementsByClassName("land6")[0];
let l7 = document.getElementsByClassName("land7")[0];
let l8 = document.getElementsByClassName("land8")[0];
let l9 = document.getElementsByClassName("land9")[0];

let tree = document.getElementsByClassName("fa-tree")[0];
let link = document.getElementsByTagName("a")[0];

let content = document.getElementsByClassName("content")[0];

recede = () => {
    setTimeout(()=>{
        s9.classList.remove("sea");
        s9.classList.add("land");
        console.log("started");
    }, 100/3+2500);
    setTimeout(()=>{
        s8.classList.remove("sea");
        s8.classList.add("land");
        console.log("started");
    }, 200/3+2500);
    setTimeout(()=>{
        s7.classList.remove("sea");
        s7.classList.add("land");
        console.log("started");
    }, 300/3+2500);
    setTimeout(()=>{
        s6.classList.remove("sea");
        s6.classList.add("land");
        console.log("started");
    }, 400/3+2500);
    setTimeout(()=>{
        s5.classList.remove("sea");
        s5.classList.add("land");
        console.log("started");
    }, 500/3+2500);
    setTimeout(()=>{
        s4.classList.remove("sea");
        s4.classList.add("land");
        console.log("started");
    }, 600/3+2500);
    setTimeout(()=>{
        s3.classList.remove("sea");
        s3.classList.add("land");
        console.log("started");
    }, 700/3+2500);
    setTimeout(()=>{
        s2.classList.remove("sea");
        s2.classList.add("land");
        console.log("started");
    }, 800/3+2500);
    setTimeout(()=>{
        s1.classList.remove("sea");
        s1.classList.add("land");
        console.log("started");
    }, 900/3+2500);
    setTimeout(()=>{
        s0.classList.remove("sea");
        s0.classList.add("land");
        console.log("started");
    }, 1000/3+2500);
};
wave = () => {
    setTimeout(()=>{
        s0.classList.remove("land");
        s0.classList.add("wave");
        console.log("started");
    }, 1100/3+2500);
    setTimeout(()=>{
        s1.classList.remove("land");
        s1.classList.add("wave");
        console.log("started");
    }, 1200/3+2500);
    setTimeout(()=>{
        s2.classList.remove("land");
        s2.classList.add("wave");
        console.log("started");
    }, 1300/3+2500);
    setTimeout(()=>{
        s3.classList.remove("land");
        s3.classList.add("wave");
        console.log("started");
    }, 1400/3+2500);
    setTimeout(()=>{
        s4.classList.remove("land");
        s4.classList.add("wave");
        console.log("started");
    }, 1500/3+2500);
    setTimeout(()=>{
        s5.classList.remove("land");
        s5.classList.add("wave");
        console.log("started");
    }, 1600/3+2500);
    setTimeout(()=>{
        s6.classList.remove("land");
        s6.classList.add("wave");
        console.log("started");
    }, 1700/3+2500);
    setTimeout(()=>{
        s7.classList.remove("land");
        s7.classList.add("wave");
        console.log("started");
    }, 1800/3+2500);
    setTimeout(()=>{
        s8.classList.remove("land");
        s8.classList.add("wave");
        console.log("started");
    }, 1900/3+2500);
    setTimeout(()=>{
        s9.classList.remove("land");
        s9.classList.add("wave");
        console.log("started");
    }, 2000/3+2500);

    setTimeout(()=>{
        l0.classList.remove("land");
        l0.classList.add("wave");
        console.log("started");
    }, 2100/3+2500);
    setTimeout(()=>{
        l1.classList.remove("land");
        l1.classList.add("wave");
        console.log("started");
    }, 2200/3+2500);
    setTimeout(()=>{
        l2.classList.remove("land");
        l2.classList.add("wave");
        console.log("started");
    }, 2300/3+2500);
    setTimeout(()=>{
        l3.classList.remove("land");
        l3.classList.add("wave");
        console.log("started");
    }, 2400/3+2500);
    setTimeout(()=>{
        l4.classList.remove("land");
        l4.classList.add("wave");
        console.log("started");
    }, 2500/3+2500);
    setTimeout(()=>{
        l5.classList.remove("land");
        l5.classList.add("wave");
        tree.classList.remove("fa", "fa-tree");
        console.log("started");
    }, 2600/3+2500);
    setTimeout(()=>{
        l6.classList.remove("land");
        l6.classList.add("wave");
        console.log("started");
    }, 2700/3+2500);
    setTimeout(()=>{
        l7.classList.remove("land");
        l7.classList.add("wave");
        console.log("started");
    }, 2800/3+2500);
    setTimeout(()=>{
        l8.classList.remove("land");
        l8.classList.add("wave");
        console.log("started");
    }, 2900/3+2500);
    setTimeout(()=>{
        l9.classList.remove("land");
        l9.classList.add("wave");
        console.log("started");
        link.textContent = "Read More";
    }, 3000/3+2500);
}

tsunami = () =>{
    recede();
    wave();    
}
content.addEventListener("mouseenter", tsunami);