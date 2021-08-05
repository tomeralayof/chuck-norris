export default function errorHandler(err,cb1,cb2) {
  err.response && err.response.status === 404
  ? cb1("data not fount, please try again")
  : cb1("unexpected error has accured");
  cb2(-1);
}