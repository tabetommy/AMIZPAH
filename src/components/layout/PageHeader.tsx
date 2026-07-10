type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
}
