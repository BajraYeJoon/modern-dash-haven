import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PatientProfile from './PatientProfile';

const patients = [
  { 
    id: 1, 
    name: 'John Doe', 
    age: 45, 
    gender: 'Male',
    heartRate: 72, 
    bloodPressure: '120/80', 
    temperature: 98.6,
    medicalHistory: ['Hypertension', 'Type 2 Diabetes'],
    currentMedications: ['Lisinopril', 'Metformin'],
    allergies: ['Penicillin'],
    lastAppointment: '2023-03-15',
    nextAppointment: '2023-06-15',
    treatmentOutcome: 'Stable',
    recoveryProgress: 'Good'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    age: 32, 
    gender: 'Female',
    heartRate: 68, 
    bloodPressure: '118/75', 
    temperature: 98.4,
    medicalHistory: ['Asthma'],
    currentMedications: ['Albuterol'],
    allergies: ['Latex'],
    lastAppointment: '2023-04-01',
    nextAppointment: '2023-07-01',
    treatmentOutcome: 'Improving',
    recoveryProgress: 'Excellent'
  },
  { 
    id: 3, 
    name: 'Bob Johnson', 
    age: 58, 
    gender: 'Male',
    heartRate: 75, 
    bloodPressure: '130/85', 
    temperature: 99.1,
    medicalHistory: ['Coronary Artery Disease', 'Hyperlipidemia'],
    currentMedications: ['Atorvastatin', 'Aspirin'],
    allergies: ['Sulfa drugs'],
    lastAppointment: '2023-05-01',
    nextAppointment: '2023-08-01',
    treatmentOutcome: 'Needs follow-up',
    recoveryProgress: 'Moderate'
  },
];

const PatientMetricsPage = () => {
  const [selectedPatient, setSelectedPatient] = React.useState(null);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Patient Metrics</h2>
      <Card>
        <CardHeader>
          <CardTitle>Current Patient Vitals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Heart Rate</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Temperature</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.heartRate} bpm</TableCell>
                  <TableCell>{patient.bloodPressure} mmHg</TableCell>
                  <TableCell>{patient.temperature}°F</TableCell>
                  <TableCell>
                    <button 
                      onClick={() => setSelectedPatient(patient)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      View Profile
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {selectedPatient && <PatientProfile patient={selectedPatient} onClose={() => setSelectedPatient(null)} />}
    </div>
  );
};

export default PatientMetricsPage;
