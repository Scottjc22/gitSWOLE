function calculateCalories() {
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var activity = parseFloat(document.getElementById("activity").value);

    if (!isNaN(age) && !isNaN(weight) && !isNaN(height)) {
        if (gender === "male") {
            var bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === "female") {
            var bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        } else {
            document.getElementById("result").innerHTML = "Invalid input. Please select a gender.";
            return;
        }

        var dailyCalories = bmr * activity;
        document.getElementById("result").innerHTML = dailyCalories.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Invalid input. Please enter valid numbers.";
    }
}


function logExercise() {
    var exercise = document.getElementById("exercise").value;
    var sets = document.getElementById("sets").value;
    var reps = document.getElementById("reps").value;
    var weight = document.getElementById("weight").value;

    var logList = document.getElementById("logList");
    var listItem = document.createElement("li");
    listItem.textContent = `Exercise: ${exercise}, Sets: ${sets}, Reps: ${reps}, Weight: ${weight} kg`;
    logList.appendChild(listItem);

    // Reset form fields
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "1";
    document.getElementById("reps").value = "";
    document.getElementById("weight").value = "";
}

app.get('/path/to/your/resource', (req, res) => {
    // Set caching headers
    res.setHeader('Cache-Control', 'max-age=3600'); // Cache for 1 hour
    res.setHeader('Expires', new Date(Date.now() + 3600000).toUTCString()); // Expires in 1 hour

    // Send the resource
    res.sendFile('/path/to/your/resource');
});