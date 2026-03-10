import grpc from "@grpc/grpc-js";
import  protoLoader from  "@grpc/proto-loader";

const packageDef = protoLoader.loadSync("../customers.proto", {});
const customerService = grpc.loadPackageDefinition(packageDef).CustomerService;

const client = new customerService(
    "0.0.0.0:50051",
    grpc.credentials.createInsecure()
)

export default client