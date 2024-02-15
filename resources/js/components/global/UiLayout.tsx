export type LayoutProps = {
  children?: React.ReactNode;
};

export const UiLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white w-full mx-auto md:w-2/3 p-4 lg:p-8 h-full">
      {children}
    </div>
  )
}