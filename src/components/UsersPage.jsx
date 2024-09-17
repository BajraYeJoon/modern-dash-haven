import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/card";

const users = [
  { id: 1, name: 'Dr. Sarah Johnson', email: 'sarah.johnson@hospital.com', role: 'Physician' },
  { id: 2, name: 'Nurse Mike Brown', email: 'mike.brown@hospital.com', role: 'Nurse' },
  { id: 3, name: 'Dr. Emily Chen', email: 'emily.chen@hospital.com', role: 'Specialist' },
];

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Healthcare Providers</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
