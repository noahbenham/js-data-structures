function lca(val1, val2, node = document.getRootNode()) {
  if (!node) return;
  if (node === val1 || node === val2) {
    return node;
  }

  const matches = Array.from(node.childNodes).map(childNode => lca(val1, val2, childNode)).filter(match => match);

  if (matches.length > 1) return node;
  if (matches.length) return matches[0];
}
