export type NotificationType='leave'|'attendance'|'payroll'|'announcement'; export type Notification={id:string;title:string;message:string;type:NotificationType;createdAt:string;read:boolean};
