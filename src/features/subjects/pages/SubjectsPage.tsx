import Skeleton from "@/components/ui/Skeleton";
import { useSubjects } from "../hooks/useSubjects";

const SubjectsPage = () => {
  const { data: subjects, isLoading, isError } = useSubjects();

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
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Subjects</h1>

      <div className="space-y-4 flex gap-4">
        {subjects?.map((subject) => (
          <div key={subject.id} className="rounded-lg bg-white p-4 shadow-sm w-fit h-fit">
            <h2 className="font-bold mb-2">{subject.name}</h2>
            <p className="px-3 py-1 rounded-full text-center bg-amber-100">{subject.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;
