import { useStudents } from "../hooks/useStudents";

const StudentsPage = () => {
  const {
    data: students,
    isLoading,
    isError,
  } = useStudents();

  if (isLoading) {
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
        Students
      </h1>

      <div className="space-y-4">
        {students?.map((student) => (
          <div
            key={student.id}
            className="rounded-lg bg-white p-4 shadow-sm"
          >
            <h2 className="font-bold">
              {student.name}
            </h2>

            <p>{student.email}</p>

            <p>{student.className}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;