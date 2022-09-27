import { Appointment } from "../entities/appointment";
import { AppointmentRepository } from "../repositories/appointments-repository";

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}
type CreateAppointmentResponse = Appointment;

export class CreateAppointment { 

  constructor( private appointmentsRepository: AppointmentRepository){}


  async execute({
    customer,
    startsAt,
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt,
    });

  const overappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(startsAt, endsAt)
  
  if(overappingAppointment) {
    throw new Error('Another appointment overlaps this appointment dates')
  }

    return appointment;
  }
}
 