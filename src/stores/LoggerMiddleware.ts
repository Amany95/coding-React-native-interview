const loggerMiddleware = store => next => action => {
  if (action.type.endsWith('/pending')) {
    console.log('Request Params:', action.meta.arg);
  }
  return next(action);
};

export default loggerMiddleware;
