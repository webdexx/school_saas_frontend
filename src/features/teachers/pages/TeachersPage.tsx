import { useTeachers } from "../hooks/useTeachers";

const TeachersPage = () => {
  const {
    data: teachers,
    isLoading = false,
    isError,
  } = useTeachers();

  if (!isLoading) {
    return <p>Loading...</p>;
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

            <p>{teacher.className}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;