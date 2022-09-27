import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointments-repository";
import { getFutureDate } from "../tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointments";

describe("Create appointment", () => {
  it("should be able to create an appointment", () => {

    const appointmentsRepository = new InMemoryAppointmentRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository);

    const startsAt = getFutureDate("2022-01-12");
    const endsAt = getFutureDate("2022-01-13");

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });


  // it("should not be able to create an appointment with overlapping date", async () => {

  //   const appointmentsRepository = new InMemoryAppointmentRepository()
  //   const createAppointment = new CreateAppointment(appointmentsRepository);

  //   const startsAt = getFutureDate("2022-01-10");
  //   const endsAt = getFutureDate("2022-01-15");

  //  await createAppointment.execute({
  //     customer: "John Doe",
  //     startsAt,
  //     endsAt,
  //   })

  //   expect( createAppointment.execute({
  //     customer: "John Doe",
  //     startsAt: getFutureDate("2022-01-14"),
  //     endsAt: getFutureDate("2022-01-18"),
  //   })
  //   ).rejects.toBeInstanceOf(Error);
  // });
});
