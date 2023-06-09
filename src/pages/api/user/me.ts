import { NextApiRequest, NextApiResponse } from "next";

// at route api/user/me
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.json({ data: { me: true } });
}