export interface Patient {
  id?: number;
  firstName: string;
  lastName: string;
  insuranceProvider: string;
  policyNumber: string;
  vitalSigns: string;
  narrative: string;
}
