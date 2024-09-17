import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2023-01-01', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
  { date: '2023-01-02', heartRate: 75, bloodPressure: 122, temperature: 98.4 },
  { date: '2023-01-03', heartRate: 71, bloodPressure: 118, temperature: 98.7 },
  { date: '2023-01-04', heartRate: 73, bloodPressure: 121, temperature: 98.5 },
  { date: '2023-01-05', heartRate: 74, bloodPressure: 119, temperature: 98.8 },
];

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">1,483</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Critical Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-red-500">23</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Appointments Today</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">47</p>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Patient Vitals Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
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
    </div>
  );
};

export default DashboardContent;
