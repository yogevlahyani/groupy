import { App, AppProps } from "./App";

interface AppsProps {
  items: AppProps[];
}

export const Apps: React.FC<AppsProps> = ({ items }) => {
  if (!items?.length) {
    return <div>No apps found</div>;
  }

  return (
    <div className="flex flex-row gap-10">
      {items.map((item) => (
        <App key={item.id} {...item} />
      ))}
    </div>
  );
};
