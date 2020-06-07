

function Car(name,speed,mfg_year){
    this.name=name
    this.speed=speed
    this.mfg_year=mfg_year
    this.run=function(){
        console.log(`${this.name} car mfg-year ${this.mfg_year} can run ${this.speed}Km/h speed.`)

    }
}

let generalCarr = new Car("Maruti 800",120,1985)
generalCarr.run()
// generalCarr.run()


class Carr{
    constructor(name,speed,mfg_year){
        this.name=name
        this.speed=speed
        this.mfg_year=mfg_year
        
    }
    displayCar(){
            console.log(`${this.name} car mfg-year ${this.mfg_year} can run ${this.speed}Km/h speed.`)
            console.log("i am from Carr class")
        }
}
class Sedan extends Carr{
    constructor(name,speed,mfg_year,seat,engin){
        super(name,speed,mfg_year)
        this.seat=seat
        this.engin=engin
    }
    displayCar(){
        // super.displayCar()
        console.log(`and seat: ${this.seat} and engin no: ${this.engin}`)
        console.log("i am from Sedan class")
    }
    static className(){
        console.log("this is from Sedan")
    }
}

let sedan = new Sedan("Maruti 800",120,1985,6,"gm-8ffv")
sedan.displayCar()

// Sedan.className()

