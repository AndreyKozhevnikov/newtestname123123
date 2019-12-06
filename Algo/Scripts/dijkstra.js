let visitedArr = new Set();

function printShortestPath(graph, start, finish) {
  visitedArr = new Set();
  let nodeArray = graph[start];
  let parentArr = {};
  for (let node in nodeArray) {
    parentArr[node] = start;
  }
  nodeArray[finish] = Infinity;
  let cheapestNodeName = findCheapestNode(nodeArray);
  let k = 0;
  while (cheapestNodeName != null) {
    let cheapestNodePrice = nodeArray[cheapestNodeName];
    let cheapestNodeGraph = graph[cheapestNodeName];
    for (let node in cheapestNodeGraph) {
      let newPrice = cheapestNodePrice + cheapestNodeGraph[node];
      let oldPrice = nodeArray[node];
      if (oldPrice == undefined || newPrice < oldPrice) {
        nodeArray[node] = newPrice;
        parentArr[node] = cheapestNodeName;
      }
    }
    visitedArr.add(cheapestNodeName);
    cheapestNodeName = findCheapestNode(nodeArray);

  }

  console.log('summary');
  let finalPrice = nodeArray[finish];
  console.log(finalPrice);

  let parentNode = parentArr[finish];
  let path = parentNode + ' - ' + finish;
  while (parentNode != start) {
    k++;
    if (k > 100) {
      console.log('something wrong');
      break;
    }
    parentNode = parentArr[parentNode];
    path = parentNode + ' - ' + path;
  }
  console.log(path);
  let finishObj = { finalPrice, path };
  return finishObj;
}

function findCheapestNode(arrObj) {
  let price = Infinity;
  let node = null;
  for (let key in arrObj) {
    if (!visitedArr.has(key)) {
      let value = arrObj[key];
      if (value < price) {
        price = value;
        node = key;
      }
    }
  }
  return node;
}


function runAlgo() {
  let graph = {};
  graph.a = { b: 10, c: 20 };
  graph.b = { d: 50, e: 10 };
  graph.c = { e: 33, d: 20 };
  graph.d = { f: 2 };
  graph.e = { f: 1 };
  console.log('1');
  //console.log(graph);
  let finishObject = printShortestPath(graph, 'a', 'f');
  console.assert(finishObject.finalPrice == 21, 'wrong price');
  console.assert(finishObject.path == 'a - b - e - f', 'wrong path');


  let graph2 = {};
  graph2.start = { a: 5, b: 2 };
  graph2.a = { c: 4, d: 2 };
  graph2.b = { d: 7 };
  graph2.c = { finish: 3 };
  graph2.d = { finish: 1 };
  console.log('2');
  //console.log(graph2);
  //debugger;
  let finishObject2 = printShortestPath(graph2, 'start', 'finish');
  console.assert(finishObject2.path == 'start - a - d - finish' && finishObject2.finalPrice == 8, 'wrong');


  let graph3 = {};
  graph3.start = { b: 2, a: 6 };
  graph3.b = { a: 3, fin: 5 };
  graph3.a = { fin: 1 };
  console.log('3');
  //console.log(graph3);
  let finishObject3 = printShortestPath(graph3, 'start', 'fin');
  console.assert(finishObject3.path == 'start - b - a - fin' && finishObject3.finalPrice == 6, 'wrong');

}

runAlgo();