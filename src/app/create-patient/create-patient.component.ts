import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {
  patient: Patient = {
    firstName: '',
    lastName: '',
    insuranceProvider: '',
    policyNumber: '',
    vitalSigns: '',
    narrative: ''
  };

  constructor(private patientService: PatientService) {}

  createPatient() {
    this.patientService.createPatient(this.patient).then(response => {
      console.log('Patient created successfully!', response.data);
    }).catch(error => {
      console.error('Error creating patient:', error);
    });
  }
}
