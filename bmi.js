class BMI {
    //constructor used to initialise data in class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //calculate bmi
    calculatorBMI() {
        let bmi = this.weight / (this.height);
        return bmi; //return the individuals bmi
    }
}

//create object. add arguements
let myBMI = new BMI(2, 100);

//return the result
myBMI.calculatorBMI();
console.log(myBMI.calculatorBMI());
