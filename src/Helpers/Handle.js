import nc from "next-connect";
import dbConnect from "./DBConnect";

function onError(err, req, res, next) {
  console.error(err);
  res.status(500).end(err.toString());
}

const handler = nc({
  onError: onError,
  onNoMatch: (req, res) => {
    res.status(404).send("Page is not found");
  },
  attachParams: true,
}).use(dbConnect);

export default handler;
