// Part 1: Growing Pains
/*
Your task is to create a program that advises a group of environmental scientists
how to handle the growth and spread of a unique plant species under their supervision. 
You must develop a growth control system that will monitor and predict the plant growth, 
making decisions based on the available space and potential growth.

Here is the information you have been given:
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.

Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:
    1.Pruned, to stop them from exceeding the capacity of the garden.
    This condition should be met if the plant count after the given number of weeks is 
    greater than 80% of the maximum capacity of the garden.

    2.Monitored, if they are growing at an acceptable rate.
    This condition should be met if the plant count is 
    between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

    3.Planted, if there is room to plant more plants.
    This condition should be met if the plant count after 
    the given number of weeks is less than 50% of the maximum capacity of the garden.
    
    4.Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
*/

//TODO: Predict the plant growth after a specific number of weeks.
//TODO: Implement Pruned, to stop them from exceeding the capacity of the garden.
//TODO: Implement Monitored, if they are growing at an acceptable rate.
//TODO: Implement Planted, if there is room to plant more plants.
//TODO: The results for 1, 2, and 3 weeks of growth as inputs.

const PI = 3.1415;
const radius = 5;

//calculating the area of the garden
const area = PI * radius * radius;

//minimum space required for each plant
const minSpace = 0.8;

//initial number of plants
const initialPlants = 20;

//calculating the maximum capacity of the garden
const maxCapacity = area / minSpace;

//calculating the capacity of the garden at 80% and 50%
const capacity80 = maxCapacity * 0.8;
const capacity50 = maxCapacity * 0.5;


//deciding the action based on the plant count
// ****************** Week 1 ******************\\
let weeks = 1;

// Plants double every week
let plantCount = initialPlants * Math.pow(2, weeks); 

let action;
if (plantCount > capacity80) {
    action = "Pruned: The plants need to be pruned to prevent exceeding garden capacity.";
} else if (plantCount > capacity50) {
    action = "Monitored: The plants are growing at an acceptable rate.";
} else {
    action = "Planted: There is room to plant more plants.";
}
console.log(`After ${weeks} weeks, the plant count is ${plantCount}. Action: ${action}`);

// ****************** Week 2 ******************\\
weeks = 2;
plantCount = initialPlants * Math.pow(2, weeks); 

if (plantCount > capacity80) {
    action = "Pruned: The plants need to be pruned to prevent exceeding garden capacity.";
} else if (plantCount > capacity50) {
    action = "Monitored: The plants are growing at an acceptable rate.";
} else {
    action = "Planted: There is room to plant more plants.";
}
console.log(`After ${weeks} weeks, the plant count is ${plantCount}. Action: ${action}`);

// ****************** Week 3 ******************\\
weeks = 3;
plantCount = initialPlants * Math.pow(2, weeks); 

if (plantCount > capacity80) {
    action = "Pruned: The plants need to be pruned to prevent exceeding garden capacity.";
} else if (plantCount > capacity50) {
    action = "Monitored: The plants are growing at an acceptable rate.";
} else {
    action = "Planted: There is room to plant more plants.";
}
console.log(`After ${weeks} weeks, the plant count is ${plantCount}. Action: ${action}`);


