class Car{
    constructor(public brand?: string, public model?: string, 
        public plate?: string, public wheels=5){
    }
}

let mycar = new Car('','','',3);