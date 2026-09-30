// Suppress DEP0169 DeprecationWarning for legacy url.parse()
const originalEmitWarning = process.emitWarning;
process.emitWarning = function (warning: any, ...args: any[]) {
  const warningCode =
    typeof warning === 'object' && warning !== null
      ? warning.code
      : typeof args[0] === 'object' && args[0] !== null
        ? args[0].code
        : undefined;
  if (
    warningCode === 'DEP0169' ||
    warning === 'DEP0169' ||
    args[0] === 'DEP0169' ||
    args[1] === 'DEP0169'
  ) {
    return;
  }
  return (originalEmitWarning as any).apply(process, [warning, ...args]);
};
