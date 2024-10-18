document.addEventListener("DOMContentLoaded", () => {
    const cancel = document.querySelector("#cancel_logo");
    const gorilla = document.querySelector(".gorilla_container");

    const data = [
        "24MCA10001", "24MCA10002", "24MCA10003", "24MCA10004",
        "24MCA10005", "24MCA10006", "24MCA10007", "24MCA10008",
        "24MCA10009", "24MCA10010", "24MCA10011", "24MCA10012",
        "24MCA10013", "24MCA10014", "24MCA10015", "24MCA10016",
        "24MCA10017", "24MCA10018", "24MCA10019", "24MCA10020",
        "24MCA10021", "24MCA10022", "24MCA10023", "24MCA10024",
        "24MCA10025", "24MCA10026", "24MCA10027", "24MCA10028",
        "24MCA10029", "24MCA10030", "24MCA10031", "24MCA10032"
    ];

    function checkRollNo(roll) {
        if (data.includes(roll)) {
            return true;
        }
        alert("Please Enter Correct RollNo");
        return false;
    }

    if (cancel && gorilla) {
        cancel.addEventListener("click", () => {
            gorilla.classList.toggle("gorilla_active");
        });
    }

    const getresult = document.querySelector("#getresult");

    if (getresult) {
        getresult.addEventListener("click", (event) => {
            event.preventDefault();

            // Retrieve the roll number inside the event listener to get the latest value
            const rollno = document.getElementById("rollNumber").value;

            if (checkRollNo(rollno)) {
                gorilla.classList.toggle("gorilla_active");
            }
        });
    }
});
