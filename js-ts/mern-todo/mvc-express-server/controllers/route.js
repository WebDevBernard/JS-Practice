exports.getTasks = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post" }],
  });
};

exports.createTask = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  res.json({
    message: "Post created sucessfully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};