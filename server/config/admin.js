module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b1c49fedab38eacf06c682d2263b35e'),
  },
});
