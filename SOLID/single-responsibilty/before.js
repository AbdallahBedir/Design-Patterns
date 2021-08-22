/**
 * The single-responsibility principle (SRP) is a computer-programming principle that states that every module, 
 * class or function in a computer program should have responsibility over a single part of 
 * that program's functionality, and it should encapsulate that part.
 */
class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    // 1st responsibility
    trackCalories(calorieCount){
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories){
            this.logCalorieSurplus();
        }
    }

    // 2nd responsibility
    logCalorieSurplus(){
        console.log(`Max calories exceeded`)
    }
}


const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)