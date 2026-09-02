const User = require('./models/User'); // Importera din modell

// CREATE - Lägg till ny användare
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.error('Fel vid skapande av användare:', error);
  }
};

// READ - Hämta användare via ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Fel vid hämtning av användare:', error);
  }
};

// READ - Hämta alla användare
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error('Fel vid hämtning av användare:', error);
  }
};

// UPDATE - Uppdatera användare
const updateUser = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );
    return updatedUser;
  } catch (error) {
    console.error('Fel vid uppdatering av användare:', error);
  }
};

// DELETE - Ta bort användare
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    console.error('Fel vid borttagning av användare:', error);
  }
};
