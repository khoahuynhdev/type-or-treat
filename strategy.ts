// functional strategy pattern
class Car {

}

type WashingStrategy = (car: Car) => void;
function standardWash(car: Car): void {
    // standard wash
}
function premiumWash(car: Car): void {
    // premium wash
}

class CarWash {
    service(car: Car, premium: boolean) {
        let washingStrategy: WashingStrategy;
        if (premium) {
            washingStrategy = premiumWash;
        } else {
            washingStrategy = standardWash;
        }

        washingStrategy(car);
    }
}
