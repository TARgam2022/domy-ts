export class delivery {
  sender: string;
  senderAddress: string;
  addressee: string;
  addresseeAddress: string;
  deliveryMan: string;
  status: number;
  constructor(
    sender: string,
    adressee: string,
    senderAddress: string,
    adresseeAddress: string,
    deliverMan: string,
    status: number
  ) {
    this.sender = sender;
    this.senderAddress = adressee;
    this.addressee = senderAddress;
    this.addresseeAddress = adresseeAddress;
    this.deliveryMan = deliverMan;
    this.status = status;
  }
}
