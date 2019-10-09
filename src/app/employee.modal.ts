export class Employee {
    id:number;
    name:string;
    address:string;
    dob:number;
    number:number;
    degree: string;
    marks: number;
    stream: string;
   college: string;
      
    txt:string[]=[];

    constructor(name, address, dob,number,degree,marks,stream,college) {
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.number=number;
        this.degree=degree;
        this.marks=marks;
        this.stream=stream;
        this.college=college;
     
    }

}