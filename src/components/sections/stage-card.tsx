interface TagProps {
  children: React.ReactNode;
}

interface StageCardProps {
  number: number;
  label: string;
  description: string;
  tags: string[];
  gradient: string;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <span className="mb-2 mr-2 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-[var(--gray-800)] backdrop-blur-sm">
    {children}
  </span>
);

const StageCard: React.FC<StageCardProps> = ({
  number,
  label,
  description,
  tags,
  gradient,
}) => (
  <div
    className="relative flex min-h-[500px] flex-col rounded-lg p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
    style={{ background: gradient }}
  >
    <div className="flex h-full flex-col">
      {number === 0 ? null : (
        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
          <span className="text-sm font-medium text-[var(--gray-600)]">
            {number}
          </span>
        </div>
      )}
      <h3 className="mb-4 mt-8 text-xl font-semibold text-[var(--gray-800)]">
        {label}
      </h3>
      <p className="mb-6 flex-grow text-[var(--gray-700)]">{description}</p>
      <div className="mt-auto flex flex-wrap">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </div>
  </div>
);

export default StageCard;
