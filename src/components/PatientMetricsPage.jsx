import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const patients = [
  { id: 1, name: 'John Doe', age: 45, heartRate: 72, bloodPressure: '120/80', temperature: 98.6 },
  { id: 2, name: 'Jane Smith', age: 32, heartRate: 68, bloodPressure: '118/75', temperature: 98.4 },
  { id: 3, name: 'Bob Johnson', age: 58, heartRate: 75, bloodPressure: '130/85', temperature: 99.1 },
];

const PatientMetricsPage = () => {
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientMetricsPage;