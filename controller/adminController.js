const { Admin } = require('../models/admin');

exports.getAllAdmins = async (req, res, next) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}


// Membuat admin baru
exports.createAdmin = async (req, res, next) => {
    try {
        const newAdmin = await admin.create(req.body);
        res.status(201).json(newAdmin);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Mendapatkan detail admin berdasarkan ID
exports.getAdminById = async (req, res, next) => {
    try {
        const adminId = req.params.id;
        const foundAdmin = await admin.findByPk(adminId);

        if (!foundAdmin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            res.json(foundAdmin);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Mengupdate admin berdasarkan ID
exports.updateAdmin = async (req, res, next) => {
    try {
        const adminId = req.params.id;
        const updatedAdmin = await admin.update(req.body, { where: { id_admin: adminId } });
        res.json(updatedAdmin);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Menghapus admin berdasarkan ID
exports.deleteAdmin = async (req, res, next) => {
    try {
        const adminId = req.params.id;
        await admin.destroy({ where: { id_admin: adminId } });
        res.json({ message: 'Admin deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
