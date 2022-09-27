import { test, expect } from "vitest";
import { getFutureDate } from "../tests/utils/get-future-date";
import { Appointment } from "./appointment";

test("create an appointment", () => {
  const startsAt = getFutureDate('2022-01-12');
  const endsAt = getFutureDate('2022-01-13');

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt
  });
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toBe("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate('2022-01-14');
  const endsAt = getFutureDate('2022-01-13');

  expect(() => {
    new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow(); 
});
