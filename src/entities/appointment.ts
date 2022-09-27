export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private _props: AppointmentProps;

  get customer() {
    return this._props.customer;
  }
  get startsAt() {
    return this._props.startsAt;
  }
  get endsAt() {
    return this._props.endsAt;
  }
  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    if(startsAt <= new Date()) {
      throw new Error(`Invalid start date`); 
    }

    if(endsAt <= startsAt) {
      throw new Error(`Invalid date`); 
    }

    this._props = props;
  }
}
