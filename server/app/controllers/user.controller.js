exports.allAccess = (req, res) => {
  res.status(200).send("Zona pública.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Perfil de usuario.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Perfil de administrador.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Perfil de moderador.");
};
