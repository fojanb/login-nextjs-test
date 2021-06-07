import { login } from "../../lib/users";
export default (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({
      error: "Method is wrong",
      message: "Make sure to send POST request.",
    });
    return;
  }
  const { username, password } = JSON.parse(req.body);
  res.status(200).json(login(username, password));
};
