import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const patientData = {
  1: {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    medicalHistory: ['Hypertension', 'Type 2 Diabetes'],
    currentMedications: ['Lisinopril', 'Metformin'],
    allergies: ['Penicillin'],
    emergencyContact: 'Jane Doe (Wife) - 555-1234',
    assignedDoctor: 'Dr. Sarah Johnson',
    appointments: [
      { date: '2023-06-15', time: '10:00 AM', type: 'Check-up' },
      { date: '2023-07-01', time: '2:00 PM', type: 'Blood Test' },
    ],
    vitalSigns: [
      { date: '2023-05-01', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
      { date: '2023-05-15', heartRate: 74, bloodPressure: 118, temperature: 98.4 },
      { date: '2023-06-01', heartRate: 71, bloodPressure: 122, temperature: 98.7 },
    ],
  },
  // Add more patient data here...
};

const PatientDetailsPage = () => {
  const { id } = useParams();
  const patient = patientData[id];

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Patient Details: {patient.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Emergency Contact: {patient.emergencyContact}</p>
            <p>Assigned Doctor: {patient.assignedDoctor}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medical Information</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-bold">Medical History</h3>
            <ul>
              {patient.medicalHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="font-bold mt-4">Current Medications</h3>
            <ul>
              {patient.currentMedications.map((med, index) => (
                <li key={index}>{med}</li>
              ))}
            </ul>
            <h3 className="font-bold mt-4">Allergies</h3>
            <ul>
              {patient.allergies.map((allergy, index) => (
                <li key={index}>{allergy}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Vital Signs Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={patient.vitalSigns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" />
              <Line yAxisId="left" type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Blood Pressure" />
              <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#ffc658" name="Temperature" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patient.appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDetailsPage;