import { Injectable } from '@angular/core';
import axios from 'axios';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl = 'http://localhost:8080/api/patients';  // Make sure your backend is running on this URL

  // Fetch all patients
  getAllPatients() {
    return axios.get<Patient[]>(this.apiUrl);
  }

  // Create a new patient
  createPatient(patientData: Patient) {
    return axios.post(this.apiUrl, patientData);
  }
}
