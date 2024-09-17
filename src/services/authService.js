const mockUsers = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'patient', password: 'patient123', role: 'patient' },
];

export const mockAuthenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        resolve({ id: user.id, username: user.username, role: user.role });
      } else {
        reject('Invalid credentials');
      }
    }, 500);
  });
};