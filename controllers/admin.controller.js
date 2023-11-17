const { Admin, Transaction } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middleware/verify")

// Mendapatkan semua admin beserta transaksinya
exports.getAllAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.findAll({ include: Transaction});
    res.json(admins);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Membuat admin baru
exports.createAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validasi
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Please provide name, email, and password" });
    }

    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin without generating a JWT token
    await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Register successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fungsi untuk login admin
exports.loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });

    // Jika admin tidak ditemukan

    const isMatch = await bcrypt.compare(password, admin.password);
    if (isMatch) {
      const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful", token });
    } else {
      // Jika password tidak sesuai
      res.status(400).json({ message: "Email or password is incorrect" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Mendapatkan detail admin berdasarkan ID
exports.getAdminById = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const foundAdmin = await Admin.findByPk(adminId, {
      include: Transaction,
    });

    if (!foundAdmin) {
      res.status(404).json({ message: "Admin not found" });
    } else {
      res.json(foundAdmin);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Mengupdate admin berdasarkan ID
exports.updateAdmin = async (req, res, next) => {
  try {
    // ID admin yang ingin diperbarui
    const adminId = req.params.id;

    // Memverifikasi token menggunakan middleware
    verifyToken(req, res, async () => {
      // Dapatkan ID admin dari token
      const tokenAdminId = req.userId;

      // Jika ID admin dari token tidak sama dengan ID admin yang ingin diperbarui
      if (tokenAdminId !== adminId) {
        return res.status(403).json({
          message:
            "Unauthorized: You do not have permission to update this admin",
        });
      }

      // update adminh\
      await Admin.update(req.body, {
        where: { id: adminId },
      });

      res.json({ message: "Admin updated successfully" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Menghapus admin berdasarkan ID
exports.deleteAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    await Admin.destroy({ where: { id: adminId } });
    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
