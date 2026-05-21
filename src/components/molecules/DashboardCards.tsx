type DashboardCardProps = {
  title: string;
  value: number;
};

const DashboardCard = ({
  title,
  value,
}: DashboardCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 shadow-sm flex-1">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;