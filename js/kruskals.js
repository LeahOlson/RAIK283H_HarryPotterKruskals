/**
 * Creates minimum spanning tree
 * @param nodes		a dictionary of nodes
 * @param edges		an array of edges
 * @returns {*[]}
 */
function kruskalsMST(nodes, edges) {
	// instantiate new UnionFind data structure
	let uf = new UnionFind(nodes.length);

	// sort the edges
	edges.sort(sortingFunction);

	let t = [];
	let k = 0;

	while (t.length < nodes.length - 1) {
		let edge = edges[k];
		let representativeF = uf.find(edge.from)
		let representativeT = uf.find(edge.to);

		if (representativeT !== representativeF) {
			uf.union(representativeT, representativeF);
			t.push(edge);
		}
		k++;
	}

	return t; // the edges in the MST
}

/**
 * comparator function
 */
function sortingFunction(edge1, edge2) {
	return Number(edge1.label) - Number(edge2.label);
}