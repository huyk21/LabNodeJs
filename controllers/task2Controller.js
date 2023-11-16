const controller = {};
controller.show = (req, res) => {
  let salary = req.query.salary ? parseFloat(req.query.salary) : 0; //salary is name of input
  let jar55 = ((salary * 55) / 100).toFixed(3);
  let jar10 = ((salary * 10) / 100).toFixed(3);
  let jar5 = ((salary * 5) / 100).toFixed(3);
  res.render("task2", { jar55, jar10, jar5 });
};
module.exports = controller;
