"use client";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[250] mx-auto xl:px-20 lg:px-10 sm:px-2 px-4">{children}</div>;
};
export default Container;
