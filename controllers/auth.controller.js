const AuthServices = require('../services/auth.services');

const authController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const authUser = await AuthServices.authController(email, password);
    return res.status(200).json({
      message: authUser,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesion' });
  }
};
module.exports = { authController };
