
var pokemon = prompt('What is your favorite ice type pokemon?');

alert(pokemon + ' probably snowboards!');


var color = prompt("what is your favorite color?");

document.body.style.backgroundColor = color;

document.write('<body>' + 'You like' + color + "! Ready to learn how to snowboard?" + '<div/>')

var question = prompt('Are you ready to shred?')
alert('Great!');

confirm("Do you love the freedom of the outdoors?")

if( confirm === true) {
    alert("Smell the breeze");
}else{
    alert("But it's good for your health!")
};

document.write("")


function hello(){
    var today = new Date ();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome';
    }

    return greeting;

};

// var result = hello();

// document.write(result);

var showOrder = function (){
    var order = prompt("What would you like to order?");
    var item, quantity;
    var total = '';


    if(order === "house") {
        item = '<img src=>"images/house.png" >';
    } else if (order === 'hotel') {
        item = '<img src="images/hotel.png" >';
    } else {
        item = '<strong>No items ordered</strong>';
    }
    
    return item;
}



// showOrder()

while( order === 'house' && order === 'hotel'){
    order = prompt('Please enter house or hotel.')
};

while( order !== 'house' && order !== 'hotel'){
    order = prompt('Please enter house or hotel.')
};


// validate our input
while( order !== 'gloves' && order !== 'boots'){
    order = prompt('Please enter gloves or boots.')
};

//ask for quantity
var item, quantity; 
quantity = prompt("how many do you want?");

//validate the quantity
while ( isNaN(quantity)){
    quantity = prompt("Please enter a number like 6")
};

//iterate with for loop
for( var i = 0; i < quantity; i++ ){
    total = total + item;
};

// return item + item + item
return total;
}