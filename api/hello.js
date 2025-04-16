module.exports = async function (context, req) {
  context.res = {
    body: "Hello from the backend you almost forgot!",
  };
};
