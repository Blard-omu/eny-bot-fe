import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import instance from "@/axios.config";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "mentee" | "mentor" | "admin";
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

async function getUser(id: string): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("No token found");

    const res = await instance.get<User>(`/users/${id}`, {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function UserProfile( props: any ) {
  const { id } = props.params;
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
