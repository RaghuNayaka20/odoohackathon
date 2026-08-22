export type Employee = { id: string; name: string; role: string; department: string; status: 'Active' | 'On leave'; email: string; joined: string; color: string; initials: string };

export const employees: Employee[] = [
  { id: 'maya-chen', name: 'Maya Chen', role: 'Product Designer', department: 'Design', status: 'Active', email: 'maya.chen@dayflow.co', joined: 'Mar 14, 2022', color: '#f4b8a5', initials: 'MC' },
  { id: 'jordan-rivera', name: 'Jordan Rivera', role: 'Engineering Lead', department: 'Engineering', status: 'Active', email: 'jordan.rivera@dayflow.co', joined: 'Jun 02, 2021', color: '#b8c9ec', initials: 'JR' },
  { id: 'samira-patel', name: 'Samira Patel', role: 'People Operations', department: 'People', status: 'On leave', email: 'samira.patel@dayflow.co', joined: 'Jan 09, 2023', color: '#f0d5a5', initials: 'SP' },
  { id: 'noah-williams', name: 'Noah Williams', role: 'Marketing Manager', department: 'Marketing', status: 'Active', email: 'noah.williams@dayflow.co', joined: 'Aug 21, 2022', color: '#b9d7c1', initials: 'NW' },
  { id: 'elena-garcia', name: 'Elena Garcia', role: 'Finance Analyst', department: 'Finance', status: 'Active', email: 'elena.garcia@dayflow.co', joined: 'Nov 11, 2023', color: '#d8c1e7', initials: 'EG' },
  { id: 'liam-okafor', name: 'Liam Okafor', role: 'Frontend Engineer', department: 'Engineering', status: 'Active', email: 'liam.okafor@dayflow.co', joined: 'Feb 18, 2024', color: '#c6d4c0', initials: 'LO' }
];

export const activities = [
  ['Maya Chen', 'submitted a time-off request', 'Today, 9:42 AM', 'MC'],
  ['Jordan Rivera', 'checked in for the day', 'Today, 9:17 AM', 'JR'],
  ['Elena Garcia', 'uploaded a new document', 'Yesterday, 4:36 PM', 'EG'],
  ['Noah Williams', 'completed onboarding', 'Yesterday, 2:10 PM', 'NW']
];
