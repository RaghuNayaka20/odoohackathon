import Badge from '@/components/ui/Badge'; import type { AttendanceStatus as Status } from '@/types/attendance';
export default function AttendanceStatus({status}:{status:Status}){const tone=status==='Present'?'green':status==='Late'?'amber':status==='Leave'?'blue':'gray';return <Badge tone={tone}>{status}</Badge>}
