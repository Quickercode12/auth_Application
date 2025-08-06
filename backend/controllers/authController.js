const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    console.log("Login request received with email:", email);
    console.log("Login request received with password:", password);
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    console.log("Register request received with name:", name);
    console.log("Register request received with email:", email);
    console.log("Register request received with password:", password);
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  login,
  register,
};
