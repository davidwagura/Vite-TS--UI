const mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' },
  ];
  
  export const mockApi = {
    get: (url: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (url === '/users') {
            resolve(mockUsers);
          }
        }, 1000); // Simulate network delay
      });
    },
  
    post: (url: string, data: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url === '/register') {
            const { name, email, password } = data;
            const existingUser = mockUsers.find(user => user.email === email);
            if (existingUser) {
              reject('User already exists!');
            } else {
              const newUser: User = {
                id: mockUsers.length + 1,
                name,
                email,
                role: 'user', // Default role
              };
              mockUsers.push(newUser);
              resolve({ user: newUser, token: 'mock-token-123' }); // Mock token
            }
          } else if (url === '/login') {
            const { email, password } = data;
            const user = mockUsers.find(user => user.email === email);
            if (user) {
              resolve({ user, token: 'mock-token-123' }); // Mock token
            } else {
              reject('Invalid email or password!');
            }
          }
        }, 1000); // Simulate network delay
      });
    },
  };
  