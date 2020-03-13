const middleware = (store) => (next) => (action) => {
    next(action);
};

//next()
// dispacth ( action )=====> middlleware1 ====> middleware2
export default middleware;
