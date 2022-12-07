let conversation = document.getElementsByClassName("conversation");
let btn = document.getElementsByClassName("btn");
let div;
let name;
let problem;
let answer;
let askedForName = true;
let askedForAge = false;
let msg;

function autoscroll() {
    let elem = document.getElementsByClassName('conversation');
    elem[0].scrollTop = elem[0].scrollHeight;
}

function yourMessage() {
    div = document.createElement("DIV");
    div.setAttribute("class", "balloon you");
    div.innerHTML = "<span class='userName'>You</span><br/>" + userInput.value;
    conversation[0].appendChild(div);

    return userInput.value;
}

function botMessage(str) {
    div = document.createElement("DIV");
    div.setAttribute("class", "balloon him");
    div.innerHTML = "<span class='botName'>AI-bot</span><br/>" + str;
    conversation[0].appendChild(div);
}

function send() {
    let message = yourMessage();
    userInput.value = "";
  
    //if statements here!
    if (message == "hello") {
        botMessage("Hi, how are you?");
    }
  	else if (message == "good") {
        botMessage("That is great");
    }
    else if (message == "are you a human") {
        botMessage("Yes I’m a robot but I’m a smart one");
    }
  	else if (message == "puppy") {
        botMessage("<img src='https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80'>");
    }
  	else if (message == "sad") {
      	botMessage("Can I tell you a joke?");
    }
    else if (message == "joke") {
        botMessage("How do you make a tissue dance?");
    }
    else if (message == "I dont know") {
        botMessage("You put a little boogie in it.");
    }
    else if (message == "toilet") {
        botMessage("Time to go pee pee");
    }
    else if (message == "bye") {
        botMessage("Thank you. Have a great day");
    }
    else if (message == "what is your name") {
        botMessage("My name is Nene");
    }
    else {
		botMessage("Sorry, I didn't understand that :(");
	}   

    //resets
    autoscroll();
}