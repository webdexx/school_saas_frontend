import Skeleton from "@/components/ui/Skeleton";
import { useStudents } from "../hooks/useStudents";

const StudentsPage = () => {
  const { data: students, isLoading, isError, error } = useStudents();

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
    return <p>Error Occured: <span className="bg-gray-100 p-2 rounded">{error.message}</span></p>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Students</h1>

      <div className="space-y-4 flex w-1/2">
        {students?.map((student) => (
          <div key={student.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex">
              <span className="font-bold">Student Name:</span>
              <p className="px-2">{student.name}</p>
              <span className="px-4 bg-sky-200 mx-4 rounded-full text-sky-800">{student.class_name}-{student.section_name}</span>
            </div>
            <p>Admission Number: {student.admission_number}</p>
            <p>{student.org_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
