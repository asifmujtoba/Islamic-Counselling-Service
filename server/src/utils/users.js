const users = {};

// Random ID until the ID is not in use


exports.create = async (username, socket) => {
  
  const id = username;
  users[id] = socket;
  return id;
  
};

exports.get = (id) => users[id]; 

exports.remove = (id) => delete users[id];
