function addTask() {
    var taskInput = document.getElementById("task-input");
    var dateInput = document.getElementById("date-input");
  
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
  
    var taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerHTML = taskInput.value;
  
    var taskDate = document.createElement("div");
    taskDate.innerHTML = formatDate(new Date(dateInput.value));
  
    var currentDate = new Date();
    var selectedDate = new Date(dateInput.value);
  
    if (selectedDate < currentDate) {
      taskItem.classList.add("overdue");
    }
  
    var doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.onclick = function() {
      var taskItem = this.parentElement;
      taskItem.classList.add("done");
  
      var gifContainer = document.getElementById("gif-container");
      gifContainer.classList.remove("hidden");
  
      var doneGif = document.createElement("img");
      doneGif.classList.add("gif");
      doneGif.src = getRandomGif(); 
  
      gifContainer.appendChild(doneGif);
  
      setTimeout(function() {
        gifContainer.innerHTML = '';
        gifContainer.classList.add("hidden");
      }, 2000);
    }
  
    var reminderButton = document.createElement("button");
    reminderButton.innerHTML = "Set Reminder";
    reminderButton.onclick = function() {
      var taskItem = this.parentElement;
      var reminderTime = selectedDate.getTime();
      var currentTime = new Date().getTime();
  
      if (reminderTime > currentTime) {
        var timeDiff = reminderTime - currentTime;
        setTimeout(function() {
          taskItem.classList.add("reminder");
          alert("Reminder: " + taskText.innerHTML);
        }, timeDiff);
      } else {
        alert("Cannot set a reminder for a past time.");
      }
    }
  
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDate);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(reminderButton);
    taskList.appendChild(taskItem);
  
    taskInput.value = '';
    dateInput.value = '';
  }
  
  function getRandomGif() {
      var gifs = ["done1.gif", "done2.gif", "done3.gif"]; 
      var randomIndex = Math.floor(Math.random() * gifs.length);
      return gifs[randomIndex];
    }
    
    function formatDate(date) {
      var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
    
    function changeBackground() {
      var backgroundSelect = document.getElementById("background-select");
      var selectedBackground = backgroundSelect.value;
      var body = document.body;
    
      if (selectedBackground === "default") {
        body.style.backgroundImage = "";
      } else {
        
        var imagePath = ""; 
        switch (selectedBackground) {
          case "background1":
            imagePath = "bg1.jpg";
            break;
          case "background2":
            imagePath = "bg2.jpg";
            break;
          case "background3":
            imagePath = "bg3.jpg";
            break;
        }
        body.style.backgroundImage = "url(" + imagePath + ")";
      }
    }