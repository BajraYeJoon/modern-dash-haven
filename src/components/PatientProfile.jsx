import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PatientProfile = ({ patient, onClose }) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Patient Profile: {patient.name}</span>
          <button onClick={onClose} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
            Close
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Demographics</h3>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
          </div>
          <div>
            <h3 className="font-bold">Vitals</h3>
            <p>Heart Rate: {patient.heartRate} bpm</p>
            <p>Blood Pressure: {patient.bloodPressure} mmHg</p>
            <p>Temperature: {patient.temperature}°F</p>
          </div>
          <div>
            <h3 className="font-bold">Medical History</h3>
            <ul>
              {patient.medicalHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Current Medications</h3>
            <ul>
              {patient.currentMedications.map((med, index) => (
                <li key={index}>{med}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Allergies</h3>
            <ul>
              {patient.allergies.map((allergy, index) => (
                <li key={index}>{allergy}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Appointments</h3>
            <p>Last: {patient.lastAppointment}</p>
            <p>Next: {patient.nextAppointment}</p>
          </div>
          <div>
            <h3 className="font-bold">Outcome Tracking</h3>
            <p>Treatment Outcome: {patient.treatmentOutcome}</p>
            <p>Recovery Progress: {patient.recoveryProgress}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientProfile;