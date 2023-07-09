export async function useFsExtra() {
  const { remove, ensureFile, writeFile } = await import('fs-extra');

  return {
    remove,
    ensureFile,
    writeFile
  };
}
