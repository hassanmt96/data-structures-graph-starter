function maxValue(node, visited=new Set()) {
    if(visited.has(node)) return -Infinity;
    visited.add(node);

    let maxNieghbor = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
    return Math.max(node.val, ...maxNieghbor);
}

module.exports = {
    maxValue
};