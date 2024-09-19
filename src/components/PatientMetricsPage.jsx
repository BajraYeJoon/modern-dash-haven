import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import EmergencyAlerts from './EmergencyAlerts';
import { Search } from 'lucide-react';

const patients = [
  { 
    id: 1, 
    name: 'John Doe', 
    age: 45, 
    gender: 'Male',
    heartRate: 72, 
    bloodPressure: '120/80', 
    temperature: 98.6,
    medicationAdherence: '85%',
    activityLevel: 'Moderate',
    assignedDoctor: 'Dr. Sarah Johnson',
    riskLevel: 'Medium',
    emergencyProtocol: null
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    age: 32, 
    gender: 'Female',
    heartRate: 68, 
    bloodPressure: '118/75', 
    temperature: 98.4,
    medicationAdherence: '92%',
    activityLevel: 'High',
    assignedDoctor: 'Dr. Michael Brown',
    riskLevel: 'Low',
    emergencyProtocol: null
  },
  { 
    id: 3, 
    name: 'Bob Johnson', 
    age: 58, 
    gender: 'Male',
    heartRate: 75, 
    bloodPressure: '180/110', 
    temperature: 99.1,
    medicationAdherence: '78%',
    activityLevel: 'Low',
    assignedDoctor: 'Dr. Emily Chen',
    riskLevel: 'High',
    emergencyProtocol: {
      condition: 'Severe Hypertension',
      action: 'Immediate medical attention required. Administer prescribed medication and monitor closely.'
    }
  },
];

const vitalSignsData = [
  { date: '2023-01-01', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
  { date: '2023-01-02', heartRate: 75, bloodPressure: 122, temperature: 98.4 },
  { date: '2023-01-03', heartRate: 71, bloodPressure: 118, temperature: 98.7 },
  { date: '2023-01-04', heartRate: 73, bloodPressure: 121, temperature: 98.5 },
  { date: '2023-01-05', heartRate: 74, bloodPressure: 119, temperature: 98.8 },
];

const PatientMetricsPage = () => {
  const navigate = useNavigate();
  const [emergencyAlerts, setEmergencyAlerts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const viewPatientDetails = (patientId) => {
    navigate(`/patient/${patientId}`);
  };

  // Check for emergency protocols
  React.useEffect(() => {
    const alerts = patients
      .filter(patient => patient.emergencyProtocol)
      .map(patient => ({
        patientName: patient.name,
        ...patient.emergencyProtocol
      }));
    setEmergencyAlerts(alerts);
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Patient Metrics</h2>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4 py-2"
          />
        </div>
      </div>
      
      {emergencyAlerts.length > 0 && (
        <EmergencyAlerts alerts={emergencyAlerts} />
      )}

      <Card>
        <CardHeader>
          <CardTitle>Vital Signs Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vitalSignsData}>
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
          <CardTitle>Current Patient Metrics</CardTitle>
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
                <TableHead>Medication Adherence</TableHead>
                <TableHead>Activity Level</TableHead>
                <TableHead>Assigned Doctor</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.heartRate} bpm</TableCell>
                  <TableCell>{patient.bloodPressure} mmHg</TableCell>
                  <TableCell>{patient.temperature}°F</TableCell>
                  <TableCell>{patient.medicationAdherence}</TableCell>
                  <TableCell>{patient.activityLevel}</TableCell>
                  <TableCell>{patient.assignedDoctor}</TableCell>
                  <TableCell>
                    <span className={`font-bold ${
                      patient.riskLevel === 'High' ? 'text-red-500' :
                      patient.riskLevel === 'Medium' ? 'text-yellow-500' :
                      'text-green-500'
                    }`}>
                      {patient.riskLevel}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => viewPatientDetails(patient.id)}>
                      View Details
                    </Button>
                  </TableCell>
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
