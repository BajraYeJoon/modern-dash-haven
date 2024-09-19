import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Users, Calendar, AlertTriangle } from 'lucide-react';

const data = [
  { date: '2023-01-01', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
  { date: '2023-01-02', heartRate: 75, bloodPressure: 122, temperature: 98.4 },
  { date: '2023-01-03', heartRate: 71, bloodPressure: 118, temperature: 98.7 },
  { date: '2023-01-04', heartRate: 73, bloodPressure: 121, temperature: 98.5 },
  { date: '2023-01-05', heartRate: 74, bloodPressure: 119, temperature: 98.8 },
];

const patientStatusData = [
  { name: 'Stable', value: 300 },
  { name: 'Improving', value: 150 },
  { name: 'Critical', value: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,483</div>
            <p className="text-xs text-blue-600">+2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-red-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-red-600">-5% from last week</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-green-600">+10% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Heart Rate</CardTitle>
            <Activity className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 bpm</div>
            <p className="text-xs text-purple-600">Across all patients</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
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
        <Card>
          <CardHeader>
            <CardTitle>Patient Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={patientStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {patientStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
