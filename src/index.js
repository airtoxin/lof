// http://www.dbs.ifi.lmu.de/Publikationen/Papers/LOF.pdf

const sum = (arr) => arr.reduce((a, v) => a + v);

export const euclideanDistance = (p1, p2) => Math.sqrt(sum(zip(p1, p2).map((c1, c2) => Math.pow(c1 - c2), 2)))

// k-Nearest Neighbors
export const knn = (k, dataset, sourceData) => {
    const kSubsetOfDataset = [[]];
    return kSubsetOfDataset;
};

// Local Reachability Distance?
export const lrd = (kNeighbors, source) => kNeighbors.map((nn) => euclideanDistance(nn, source)).reduce(Math.max);

// Mean of lrd
export const mlrd = (k, kNeighbors, source) => lrd(kNeighbors, source) / k;

// Local Outlier Factor
export const lof = (k, dataset, sourceData) => {
    const mlrdFraction = knn(k, dataset, sourceData).map(kNeighbor => {
        return mlrd(k, knn(k, dataset, sourceData), sourceData) / mlrd(k, knn(k, dataset, kNeighbor), kNeighbor);
    });
    return mlrdFraction / k;
};
