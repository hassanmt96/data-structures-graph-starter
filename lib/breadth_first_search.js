function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let visited = new Set();
    
    while(queue.length) {
        let node =queue.shift();
        if(visited.has(node)) continue;
        visited.add(node);
        //when the targetVal is contained in the full graph
        if(node.val === targetVal) return node;

        queue.push(...node.neighbors);
    }
    //when the targetVal is not contained in the full graph 
        return null;
    }



module.exports = {
    breadthFirstSearch
};