import Skeleton from "@/components/ui/Skeleton";
import { useTeachers } from "../hooks/useTeachers";

const TeachersPage = () => {
  const {
    data: teachers,
    isLoading,
    isError,
  } = useTeachers();

  if (isLoading) {
    return (
      <div className="w-full max-w-full rounded-md p-4">
              <div className="flex animate-pulse space-x-4">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
              <div className="flex animate-pulse space-x-4">
                <Skeleton />
                <Skeleton />
              </div>
            </div>
    );
  }

  if (isError) {
    return (
      <p>
        Something went wrong
      </p>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        teachers
      </h1>

      <div className="space-y-4">
        {teachers?.map((teacher) => (
          <div
            key={teacher.id}
            className="rounded-lg bg-white p-4 shadow-sm"
          >
            <h2 className="font-bold">
              {teacher.name}
            </h2>

            <p>{teacher.email}</p>

            <p>{teacher.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;