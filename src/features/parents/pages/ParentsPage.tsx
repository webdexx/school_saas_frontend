import { useParents } from "../hooks/useParents";

const ParentsPage = () => {
  const {
    data: parents,
    isLoading,
    isError,
  } = useParents();

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
        Parents
      </h1>

      <div className="space-y-4">
        {parents?.map((parent) => (
          <div
            key={parent.id}
            className="rounded-lg bg-white p-4 shadow-sm"
          >
            <h2 className="font-bold">
              {parent.name}
            </h2>

            <p>{parent.email}</p>

            <p>{parent.className}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentsPage;