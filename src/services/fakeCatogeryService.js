export const catogeries = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "kid" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "teenager" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "senior citizen" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "old" },
];

export function getCatogeries() {
  return catogeries.filter((c) => c);
}
