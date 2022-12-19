import type { UmiApiRequest, UmiApiResponse } from "umi";
// import { PrismaClient } from '@prisma/client'
// import { verifyToken } from "@/utils/jwt";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  // let prisma: PrismaClient;
  switch (req.method) {
    case 'GET':
      res.status(200).json();
      break;
    case 'POST':
      res.status(200).json('ok');
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' })
  }
}
