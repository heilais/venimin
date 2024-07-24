app.get('/api/data', (req, res) => {
  const data = { message: 'Hello, world!' };
  res.json(data);
});
