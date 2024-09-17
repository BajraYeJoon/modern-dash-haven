import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const EmergencyAlerts = ({ alerts }) => {
  return (
    <div className="space-y-4">
      {alerts.map((alert, index) => (
        <Alert key={index} variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Emergency Protocol Activated</AlertTitle>
          <AlertDescription>
            {alert.patientName}: {alert.condition} - {alert.action}
          </AlertDescription>
        </Alert>
      ))}
    </div>
  );
};

export default EmergencyAlerts;