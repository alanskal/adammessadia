module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  async headers() {
    return [
      {
        source: '/Assets/:gif*',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/gif',
          },
        ],
      },
    ];
  },
};
