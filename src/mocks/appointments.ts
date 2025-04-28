import { IAppointment } from "../interfaces/appointment.interface";

export const APPOINTMENTS: IAppointment[] = [
  {
    time: '09:00 AM',
    patientName: 'Juha Lahtinen',
    patientId: '240545-123Y',
    type: 'Etävastaanotto',
    message: 'Hei tohtori, kiitos, että hyväksyitte tapaamisen. Tarvitsen apua uusien oireideni kanssa, joita alkoi kolme viikkoa sitten.'
  },
  {
    time: '09:45 AM',
    patientName: 'Kaarina Mäkinen',
    patientId: '210637-963A',
    type: 'Etävastaanotto'
  },
  {
    time: '10:30 AM',
    patientName: 'Antti Virtanen',
    patientId: '060526-741B',
    type: 'Vastaanotto'
  },
  {
    time: '11:15 AM',
    patientName: 'Mari Hiltunen',
    patientId: '060526-741B',
    type: 'Hoitopuhelu'
  },
  {
    time: '01:00 PM',
    patientName: 'Petri Niemi',
    patientId: '060526-741B',
    type: 'Konsultaatio'
  },
  {
    time: '02:15 PM',
    patientName: 'Laura Leppänen',
    patientId: '151139-258D',
    type: 'Etävastaanotto'
  }
];
