import { S3Client, ListBucketsCommand, CreateBucketCommand, CreateBucketCommandInput } from '@aws-sdk/client-s3';

const client = new S3Client({
    region: process.env.AWS_DEFAULT_REGION,
    endpoint: process.env.AWS_ENDPOINT,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    forcePathStyle: true,
});

const listBucket = async () => {
    const command = new ListBucketsCommand({});
    const output = await client.send(command);
    console.log(output);
};

const createBucket = async () => {
    const param: CreateBucketCommandInput = {
        Bucket: 'hoon-bucket',
        CreateBucketConfiguration: {
            LocationConstraint: process.env.AWS_DEFAULT_REGION,
        },
    };
    const command = new CreateBucketCommand(param);
    const output = await client.send(command);
    console.log(output);
};

export default async function app() {
    console.log('sending command');
    //await createBucket();
    await listBucket();
}
