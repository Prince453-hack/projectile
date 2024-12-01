import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import Stories from "./Stories";

const s3 = new S3Client({
  region: process.env.REGION!,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

type DataProps = {
  image: string;
  title: string;
  data: string;
};

async function fetchJsonFromS3(): Promise<DataProps[]> {
  const bucketName = "articledata0430";
  const key = "data.json";

  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const response = await s3.send(command);

    const streamToString = (stream: Readable): Promise<string> =>
      new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      });

    const jsonContent = await streamToString(response.Body as Readable);

    return JSON.parse(jsonContent) as DataProps[];
  } catch (error) {
    console.error("Error fetching JSON from S3:", error);
    throw new Error("Error fetching JSON from S3");
  }
}

const StoriesSection = async () => {
  const data = await fetchJsonFromS3();

  return <Stories data={data} />;
};

export default StoriesSection;
