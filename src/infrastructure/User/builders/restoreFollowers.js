const restoreFollowers = (mockUsers) => {
  return {
    id: mockUsers.id,
    name: mockUsers.name,
    surname: mockUsers.lastName,
    messages: [],
  };
};

export default restoreFollowers;
