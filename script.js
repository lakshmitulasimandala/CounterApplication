let counter = document.getElementById("counterValue");

function onIncrement(){
    let prev_counter = counter.textContent;
    let next_counter = parseInt(prev_counter) + 1;
    counter.textContent = next_counter;
}

function onDecrement(){
    let curr_counter = counter.textContent;
    let decr_counter = parseInt(curr_counter) - 1
    counter.textContent = decr_counter;
}

function onReset(){
    let reset_counter = 0;
    counter.textContent = reset_counter;
}