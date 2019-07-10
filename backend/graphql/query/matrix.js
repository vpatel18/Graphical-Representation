import matrix from "../../models/matrix";

export const GetMatrixList = async (_, args, context, fieldASTs) => {
  const { getProjection } = context;
  return new Promise((resolve, reject) => {
    var projections = getProjection(fieldASTs);
    matrix.find({}, projections, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};
