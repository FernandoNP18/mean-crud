export class Buyers {
    _id:string;
    name:string;
    surname:string;
    idSeller:string;
    dni:string;
    phoneNumber:string;
    email:string;
    minMoney:number;
    idVehicleToBuy:string;
    constructor(_id="",name="",surname="",idSeller="",dni="",phoneNumber="",email="",minMoney=0,
    idVehicleToBuy=""){
        this._id=_id;
        this.dni=dni;
        this.email=email;
        this.idSeller=idSeller;
        this.idVehicleToBuy=idVehicleToBuy;
        this.minMoney=minMoney;
        this.name=name;
        this.phoneNumber=phoneNumber;
        this.surname=surname;
    }
}