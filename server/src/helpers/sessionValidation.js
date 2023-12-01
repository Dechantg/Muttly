


const validateSession = (req, res, next) => {
  try {
    if (!req.session || !req.session.user || !req.session.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.session.user.userId = req.params.id;

    next();
  } catch (error) {
    console.error('Error during session validation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = validateSession;