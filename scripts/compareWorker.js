self.onmessage = function (e) {
  const compareList = e.data;
  const allSpecs = compareList.map((p) => p.specs);
  const diffIndexes = [];

  if (allSpecs.length > 1) {
    for (let i = 0; i < allSpecs[0].length; i++) {
      const vals = allSpecs.map((spec) => spec[i]);
      if (!vals.every((v) => v === vals[0])) diffIndexes.push(i);
    }
  }

  postMessage(diffIndexes);
};
