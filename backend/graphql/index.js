import typeDefs from "./types";
import { GetMatrixList } from "./query/matrix";
// this will return the projected fields requested from clientside
const getProjection = fieldASTs => {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    },
    {}
  );
};
const resolvers = {
  Query: {
    GetMatrixList
  }
};
export default {
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      getProjection
    };
  }
};
