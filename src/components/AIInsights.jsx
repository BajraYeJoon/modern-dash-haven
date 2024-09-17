import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIInsights = ({ patientId }) => {
  // This is a mock function to simulate AI-driven insights
  const getAIInsights = (id) => {
    const risks = [
      { condition: 'Diabetes', probability: 0.7 },
      { condition: 'Hypertension', probability: 0.5 },
      { condition: 'Heart Disease', probability: 0.3 },
    ];
    return risks;
  };

  const insights = getAIInsights(patientId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Driven Health Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {insights.map((risk, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{risk.condition}:</span> 
              <span className={`ml-2 ${risk.probability > 0.5 ? 'text-red-500' : 'text-green-500'}`}>
                {(risk.probability * 100).toFixed(1)}% risk
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          These insights are based on historical data and current metrics. Always consult with a healthcare professional for accurate diagnosis and treatment.
        </p>
      </CardContent>
    </Card>
  );
};

export default AIInsights;