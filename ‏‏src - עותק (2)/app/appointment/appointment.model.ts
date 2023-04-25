export interface AppointmentModel {
    id: number,
    patient: string | null,
    type: string,
    status: string,
    time: string
    date: string
}