function logCalorieSurplus(message) {
    console.log(`message`,message) // or email the user 
}

class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    // single responsibility
    trackCalories(calorieCount){
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories){
            logCalorieSurplus('Max calories exceeded');
        }
    }
}


const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)