export function getRootCauseSummary(defects) {
  const summary = {};
  defects.forEach(d => summary[d.rootCause] = (summary[d.rootCause] || 0) + 1);
  return Object.entries(summary).map(([rootCause, count]) => ({ rootCause, count }));
}

export function getSeverityDistribution(defects) {
  const distribution = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  defects.forEach(d => distribution[d.severity]++);
  return Object.entries(distribution).map(([severity, count]) => ({ severity, count }));
}

export function getResolutionTimeAnalysis(defects) {
  const map = {};
  defects.forEach(d => {
    const hours = (new Date(d.resolvedAt) - new Date(d.createdAt)) / (1000 * 60 * 60);
    if (!map[d.severity]) map[d.severity] = [];
    map[d.severity].push(hours);
  });
  return Object.entries(map).map(([severity, times]) => ({
    severity,
    avgHours: (times.reduce((a, b) => a + b, 0) / times.length).toFixed(2),
  }));
}
