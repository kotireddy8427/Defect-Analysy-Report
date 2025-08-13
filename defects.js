export const defects = [
  { id: "D001", title: "Login fails on invalid input", module: "Auth", rootCause: "Input Validation Missing", severity: "High", status: "Resolved", createdAt: "2025-08-10T10:00:00Z", resolvedAt: "2025-08-10T12:00:00Z", assignedTo: "Alice" },
  { id: "D002", title: "JWT token not refreshed", module: "Auth", rootCause: "Token Handling Bug", severity: "Critical", status: "Resolved", createdAt: "2025-08-09T09:00:00Z", resolvedAt: "2025-08-09T15:00:00Z", assignedTo: "Bob" },
  { id: "D003", title: "LoginForm UI misalignment", module: "Frontend", rootCause: "CSS/Styling Issue", severity: "Medium", status: "Resolved", createdAt: "2025-08-11T11:00:00Z", resolvedAt: "2025-08-11T14:00:00Z", assignedTo: "Charlie" },
  { id: "D004", title: "Axios interceptor fails on 401", module: "Frontend", rootCause: "Token Refresh Logic", severity: "High", status: "Resolved", createdAt: "2025-08-12T08:30:00Z", resolvedAt: "2025-08-12T12:30:00Z", assignedTo: "Alice" },
  { id: "D005", title: "Access token stored in localStorage insecurely", module: "Frontend", rootCause: "Security Misconfiguration", severity: "Critical", status: "Resolved", createdAt: "2025-08-13T07:00:00Z", resolvedAt: "2025-08-13T10:00:00Z", assignedTo: "Bob" },
];
