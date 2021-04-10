export const handleError = (error, res) => {
  console.log(EvalError);
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
};
