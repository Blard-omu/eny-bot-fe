import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import axios from "../../../axios.config";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "mentee" | "mentor" | "admin";
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

interface UserProfilePageProps {
  params: { id: string };
}


async function getUser(id: string): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("No token found");

    const res = await axios.get<User>(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}


export default async function UserProfile({ params }: UserProfilePageProps) {
  const { id } = await params // await was added to avoid nextjs warning
  const user = await getUser(id);

  if (!user) return notFound();

  return (
    <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{user?.name}&apos;s Profile</h1>
      <p className="text-gray-600 mb-2"><strong>Role:</strong> {user?.role}</p>
      <p className="text-gray-600 mb-4"><strong>Email:</strong> {user?.email}</p>

      <h3 className="text-gray-600 mt-6 mb-2 font-semibold">Skills</h3>
      <div className="flex gap-2 flex-wrap">
        {user.skills.length > 0 ? (
          user.skills.map((skill, idx) => (
            <span key={idx} className="bg-[#5c4efc]/30 text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))
        ) : (
          <span className="text-sm text-gray-500">No skills listed</span>
        )}
      </div>
    </div>
  );
}
