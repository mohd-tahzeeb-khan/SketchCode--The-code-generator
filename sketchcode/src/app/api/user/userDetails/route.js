import { db } from '@/db/index';
import { userTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const userId = body.userId;
  if (!userId) {
    return NextResponse.json({ error: 'User ID missing' }, { status: 400 });
  }
  try {
    const userData = await db
      .select()
      .from(userTable)
      .where(eq(userTable.clerkid, userId));
      console.log("fetched user: ",userData[0])
    return NextResponse.json(userData[0] || {});
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}