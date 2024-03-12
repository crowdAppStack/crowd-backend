export type LayoutProps = {
  children?: React.ReactNode;
};

export const UiLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container p-2 md:p-4 lg:p-8">
      {children}
    </div>
  )
}