import { DEMO_USERS, saveUser } from '@/lib/auth';
import type { AuthUser } from '@/types/user';

export async function signIn(email: string, password: string, remember: boolean): Promise<AuthUser> {
  await new Promise(resolve => setTimeout(resolve, 450));
  const account = DEMO_USERS[email.trim().toLowerCase()];
  if (!account || account.password !== password) throw new Error('The email or password is incorrect.');
  saveUser(account.user, remember);
  return account.user;
}
