import { gql } from "apollo-server";
const typeDefs = gql`
  type GetMatrix {
    _id: String
    index: Int
    guid: String
    isActive: Boolean
    value: Int
    sensorType: String
    time: String
  }

  type Query {
    GetMatrixList: [GetMatrix]
  }
`;
export default typeDefs;
