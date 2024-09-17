import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', admissions: 65, discharges: 58 },
  { month: 'Feb', admissions: 59, discharges: 62 },
  { month: 'Mar', admissions: 80, discharges: 75 },
  { month: 'Apr', admissions: 81, discharges: 79 },
  { month: 'May', admissions: 56, discharges: 60 },
  { month: 'Jun', admissions: 55, discharges: 58 },
];

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Reports</h2>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Patient Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="admissions" fill="#8884d8" name="Admissions" />
              <Bar dataKey="discharges" fill="#82ca9d" name="Discharges" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;