let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span>${inputs.value}</span>
            <div>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        `;

        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector(".fa-trash").addEventListener("click", function() {
            newEle.remove();
        });

        newEle.querySelector(".fa-check").addEventListener("click", function() {
            newEle.classList.toggle("completed");
        });

        newEle.querySelector(".fa-pen").addEventListener("click", function() {
            let taskSpan = newEle.querySelector("span");
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskSpan.innerText;
            newEle.replaceChild(editInput, taskSpan);
            editInput.focus();

            editInput.addEventListener("blur", function() {
                taskSpan.innerText = editInput.value;
                newEle.replaceChild(taskSpan, editInput);
            });

            editInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    taskSpan.innerText = editInput.value;
                    newEle.replaceChild(taskSpan, editInput);
                }
            });
        });
    }
}
